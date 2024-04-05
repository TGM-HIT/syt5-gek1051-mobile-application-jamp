describe('Page Load Test', () => {
  it('Successfully opens the page', () => {
    cy.visit('https://main--magnificent-conkies-14ea88.netlify.app') // Besuche die Seite
    cy.url().should('eq', 'https://main--magnificent-conkies-14ea88.netlify.app/') // Überprüfe, ob die URL korrekt ist
    cy.contains('Shopping Lists') // Überprüfe, ob ein erwarteter Text auf der Seite vorhanden ist
  })
})

describe('Gear Button Test', () => {
  it('Clicks the gear button', () => {
    cy.visit('https://main--magnificent-conkies-14ea88.netlify.app') // Besuche die Seite unter localhost:8081

    // Klicke auf den Zahnrad-Button
    cy.get('.settings-button').click()

    // Hier kannst du weitere Assertions hinzufügen, um sicherzustellen,
    // dass das erwartete Verhalten nach dem Klicken des Buttons erfolgt.
  })
})

describe('Input and Button Click Test', () => {
  it('Types into input field and clicks Start Sync button', () => {
    cy.visit('https://main--magnificent-conkies-14ea88.netlify.app') // Besuche die Seite unter localhost:8081
    cy.get('.settings-button').click()

    // Schreibe etwas in das Eingabefeld
    const textToType = 'http://admin:admin@jamp.textminr.tech:5984/list'
    cy.get('.url-input').type(textToType)

    // Klicke auf den "Start Sync" Button
    cy.get('.start-sync-button').click()

    // Hier kannst du weitere Assertions hinzufügen, um sicherzustellen,
    // dass das erwartete Verhalten nach dem Klicken des Buttons erfolgt.
  })
})

describe('Add Shopping List test', function() {

  // Der eigentliche Testfall
  it('should click a button and input text', function() {
    cy.visit("https://main--magnificent-conkies-14ea88.netlify.app")
    // Den Button finden und darauf klicken
    cy.get('.add-list').click();

    // Das Eingabefeld finden und Text eingeben
    var inputField = cy.get('.new-list-title');
    inputField.type('Neue Liste');

    cy.get(".add-list-button").click();

  });
});

describe('Search bar functionality', function() {

  // Der eigentliche Testfall
  it('should enter a text in the search bar and click enter', function() {
    cy.visit("https://main--magnificent-conkies-14ea88.netlify.app")
    // Den Button finden und darauf klicken
    var inputField = cy.get('#search');

    // Das Eingabefeld finden und Text eingeben
    inputField.type('Apfel' + '{enter}');
  });
});