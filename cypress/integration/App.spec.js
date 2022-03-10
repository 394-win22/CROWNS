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

    it ('tries to sign in', () => {
        cy.visit ('/');

        cy.get('[data-cy=signIn').click();
        
    })

    it('log in test', () => {
        cy.login();
    })
  
});
