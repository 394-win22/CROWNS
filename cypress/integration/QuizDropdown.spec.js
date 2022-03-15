/* globals cy */

describe ('Quiz Dropdown', () => {
    it ('opens quiz dropdown buttons on click', () => {
        cy.visit ('/quiz');

        const wideWaves = "Wide Waves"
        cy.get('[data-cy=quizQuestion]').should('be.visible');
        cy.get('[data-cy=Fine]').should('not.be.visible');
        cy.get(`[data-cy="${wideWaves}"]`).should('not.be.visible');
        cy.get('[data-cy=Straight]').should('be.visible');

        cy.get('[data-cy=Straight]').click();
        cy.get('[data-cy=Fine]').should('be.visible');
        cy.get(`[data-cy="${wideWaves}"]`).should('not.be.visible');

        cy.get('[data-cy=Wavy]').click();
        cy.get('[data-cy=Fine]').should('be.visible');
        cy.get(`[data-cy="${wideWaves}"]`).should('be.visible');

        cy.get('[data-cy=Straight]').click();
        cy.get('[data-cy=Fine]').should('not.be.visible');
        cy.get(`[data-cy="${wideWaves}"]`).should('be.visible');
    })  
});
