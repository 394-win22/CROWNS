/* globals cy */

describe ('Test App', () => {

    it ('goal not shown', () => {
        cy.visit ('/');

        cy.get('[data-cy=quiz').click();
        cy.get('[data-cy=Kinky]').click();
        cy.get('[data-cy="Tight Coil"]').click();
        cy.contains('Complete Your Profile').should('not.exist');

        
    })

  
});
