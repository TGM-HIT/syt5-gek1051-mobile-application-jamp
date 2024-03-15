import base64

import dns.resolver as dnsresolver
import jwt
from dns.resolver import NoAnswer
from email_validator import EmailNotValidError, validate_email
from fastapi import FastAPI
from passlib.hash import sha512_crypt
from redis_om import Migrator, NotFoundError
from pydantic import BaseModel

from user import User

app = FastAPI()

class UserData(BaseModel):
  '''This model is used in both endpoints to validate the request body (otherwise these
  parameters would need to be passed as query parameters, which is incredibly insecure)'''

  email: str
  password: str

@app.get('/')
def read_root():
  return {'Hello': 'World'}

@app.post('/register')
def register_user(register_data: UserData):
  try:
    # check if the email address is "bascially" (meaning a mx domain check is performed) valid
    domain = validate_email(register_data.email, check_deliverability=False).domain
    dnsresolver.resolve(domain, 'MX')

  except NoAnswer as e:
    return {'error': 'No valid domain', 'success': False}

  except EmailNotValidError as e:
    return {'error': str(e), 'success': False}

  # the password is saved as a sha512 hash (NOT md5) and encoded in base64
  user = User(email=register_data.email, password=sha512_crypt.hash(base64.b64decode(register_data.password.encode('utf-8'))))
  user.save()

  return {'success': True, 'message': 'Successfully registered! Welcome to the club!'}

@app.post('/login')
def login_user(login_data: UserData):
  try:
    user = User.get(login_data.email)

    # same procedure as in the register endpoint, but this time just need to verify the password
    if sha512_crypt.verify(base64.b64decode(login_data.password.encode('utf-8')), user.password):
      return {
        'message': 'Successfully logged in!', 
        'success': True, 
        'token': jwt.encode({'email': login_data.email}, 'secret', algorithm='HS256')
      }
    
    else:
      return {'error': 'Incorrect password!', 'success': False}
      
  except NotFoundError as e:
     return {'error': 'User not found', 'success': False}
  
  except Exception as e:
    return {'error': str(e), 'success': False}

Migrator().run()