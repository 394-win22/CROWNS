/* globals cy */

describe('Test Primary Quiz Navigation', () => {

    it('Redirects to the correct hairtype for 1A', () => {
        cy.visit ('/quiz');
        cy.get('[data-cy=quizQuestion]').should('be.visible');
        cy.get('[data-cy=Straight]').should('be.visible');
        cy.get('[data-cy=Straight]').click();
        cy.get('[data-cy=Fine]').should('be.visible');
        cy.get('[data-cy=Fine]').click();
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 1A');
    });
    it('Redirects to the correct hairtype for 4C', () => {
        const tightCoil = "Tight Coil"
        cy.visit ('/quiz');
        cy.get('[data-cy=quizQuestion]').should('be.visible');
        cy.get('[data-cy=Kinky]').should('be.visible');
        cy.get('[data-cy=Kinky]').click();
        cy.get(`[data-cy="${tightCoil}"]`).should('be.visible');
        cy.get(`[data-cy="${tightCoil}"]`).click();
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 4C');
    })
});