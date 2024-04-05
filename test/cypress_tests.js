describe( 'Sync', function ( ) {
    beforeEach(function ( ) {
        cy.visit('http://locathost:8081/')
        
        cy.get('.md-button')
            .type('{enter}')
            .type('feed the cat')
    })
        
    /*it.only( 'hides "Clear Compteted" With nothing checked' , function ( ) {
        cy.get('.todo—tist' ).eq(1).find('.toggle').check()
        cy.get('.clear—completed').should('be.visible').click( )
        cy.get('.clear—completed').should('not.exist')
    })*/
})