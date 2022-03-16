/* globals cy */

describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with landing page', () => {
        cy.visit ('/');
        cy.get('[data-cy=title]').should('contain', 'CROWNS');
      });

    it ('clicks quiz button', () => {
        cy.visit ('/');
        
        cy.get('[data-cy=quiz]').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/quiz')
        });
        cy.get('[data-cy=quizQuestion]').should('be.visible');
    })
    
    it ('goal not shown', () => {
        cy.visit ('/');

        cy.get('[data-cy=quiz').click();
        cy.get('[data-cy=Kinky]').click();
        cy.get('[data-cy="Tight Coil"]').click();
        cy.contains('Complete Your Profile').should('not.exist');

        
    })

  
});
