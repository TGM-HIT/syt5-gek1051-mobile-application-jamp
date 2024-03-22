describe('Page Load Test', () => {
  it('Successfully opens the page', () => {
    cy.visit('https://main--magnificent-conkies-14ea88.netlify.app') // Besuche die Seite
    cy.url().should('eq', 'https://main--magnificent-conkies-14ea88.netlify.app/') // Überprüfe, ob die URL korrekt ist
    cy.contains('Shopping Lists') // Überprüfe, ob ein erwarteter Text auf der Seite vorhanden ist
  })
})

describe('Gear Button Test', () => {
  it('Clicks the gear button', () => {
    cy.visit('localhost:8081') // Besuche die Seite unter localhost:8081

    // Klicke auf den Zahnrad-Button
    cy.get('.settings-button').click()

    // Hier kannst du weitere Assertions hinzufügen, um sicherzustellen,
    // dass das erwartete Verhalten nach dem Klicken des Buttons erfolgt.
  })
})

describe('Input and Button Click Test', () => {
  it('Types into input field and clicks Start Sync button', () => {
    cy.visit('http://localhost:8081') // Besuche die Seite unter localhost:8081
    cy.get('.settings-button').click()

    // Schreibe etwas in das Eingabefeld
    const textToType = 'http://admin:admin@localhost:5984/list'
    cy.get('.url-input').type(textToType)

    // Klicke auf den "Start Sync" Button
    cy.get('.start-sync-button').click()

    // Hier kannst du weitere Assertions hinzufügen, um sicherzustellen,
    // dass das erwartete Verhalten nach dem Klicken des Buttons erfolgt.
  })
})