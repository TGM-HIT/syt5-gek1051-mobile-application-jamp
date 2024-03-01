class User(HashModel):
  email: str = Field(index=True, primary_key=True)
  password: str = Field()