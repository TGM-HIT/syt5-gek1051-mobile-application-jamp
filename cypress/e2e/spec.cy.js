// ------ Pfeiler's Testcases: ------
// --- Implementierung der Suchleiste ---

describe('ShoppingListApp', function() {
  describe('SearchBar', function() {
    beforeEach(function() {
      // Initialisiere den Zustand der Anwendung vor jedem Test
      app.clearSearchQuery();
    });

    it('should successfully filter items when a valid search query is provided', function() {
      app.searchQuery = 'milch'; // Angenommen, 'milch' ist ein gültiger Suchbegriff
      app.filteredShoppingListItems(); // Filterfunktion aufrufen
      assert.notEqual(app.filteredShoppingListItems().length, 0, 'Items should be found');
    });

    it('should return no items when an invalid search query is provided', function() {
      app.searchQuery = 'xyz'; // Angenommen, 'xyz' ist kein gültiger Suchbegriff
      app.filteredShoppingListItems(); // Filterfunktion aufrufen
      assert.equal(app.filteredShoppingListItems().length, 0, 'No items should be found');
    });
  });
});

// --- Horizontales Anordnen von Einkaufslisten ---

// Diese Funktion wurde hauptsächlich in CSS implementiert, Java Script Tests können diese Funktion also nicht testen.

// --- Angabe von Mengenangaben ---

describe('QuantityHandling', function() {
  beforeEach(function() {
    // Initialisiere den Zustand der Anwendung vor jedem Test
    // Beispiel: Auswahl eines bestimmten Listenelements
    app.currentListId = 'list1'; // Angenommen, 'list1' ist die ID einer Liste
    app.newItemTitle = 'Brot';
    app.onAddListItem(); // Fügt ein Element hinzu
  });

  it('should correctly increment item quantity', function() {
    const item = app.shoppingListItems.find(item => item.title === 'Brot');
    const initialQuantity = parseInt(item.quantity);
    app.incrementQuantity(item);
    assert.equal(parseInt(item.quantity), initialQuantity + 1, 'Quantity should be incremented by 1');
  });

  it('should correctly decrement item quantity but not below 1', function() {
    const item = app.shoppingListItems.find(item => item.title === 'Brot');
    app.decrementQuantity(item); // Angenommen, die anfängliche Menge ist 1
    assert.equal(parseInt(item.quantity), 1, 'Quantity should not be less than 1');
  });
});

// ------ End of Pfeiler's Test Cases ------

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


describe('Local Places Test', () => {
  it('should only get places from austria', () => {
    cy.visit('http://localhost:8081') // Besuche die Seite unter localhost:8081

    // Klicke auf den Local Places Button
    cy.get('.add-list').click();7

    var inputField = cy.get('.place-input');
    inputField.type('Nah&Frisch');

    cy.get('.lookup-button').click();
  })

  it('should get no places from austria', () => {
    cy.visit('http://localhost:8081') // Besuche die Seite unter localhost:8081

    // Klicke auf den Local Places Button
    cy.get('.add-list').click();

    var inputField = cy.get('.place-input');
    inputField.type('Rewe');

    cy.get('.lookup-button').click();
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
