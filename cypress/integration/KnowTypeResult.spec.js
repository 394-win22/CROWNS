/* globals cy */

describe('Test for Know Type Result Navigation', () => {

    it('Ensures list image is not clickable or no faulty redirect', () => {
        cy.visit('/selector');
        cy.get(('[data-cy=unclickable]')).click();
        cy.url().should('include', '/selector');
        cy.get(('[alt="List of Types"]')).should('be.visible');
    })

    it('opens correct hairtype results for type 1A hair', () => {
        cy.visit('/selector');
        cy.get(('[alt="1A"]')).should('be.visible');
        cy.get(('[data-cy=1A]')).click();
        cy.url().should('include', '/results');
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 1A');
    })

    it('opens correct hairtype results for type 2A hair', () => {
        cy.visit('/selector');
        cy.get(('[alt="2A"]')).should('be.visible');
        cy.get(('[data-cy=2A]')).click();
        cy.url().should('include', '/results');
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 2A');
    })

    it('opens correct hairtype results for type 2B hair', () => {
        cy.visit('/selector');
        cy.get(('[alt="2B"]')).should('be.visible');
        cy.get(('[data-cy=2B]')).click();
        cy.url().should('include', '/results');
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 2B');
    })

    it('opens correct hairtype results for type 2C hair', () => {
        cy.visit('/selector');
        cy.get(('[alt="2C"]')).should('be.visible');
        cy.get(('[data-cy=2C]')).click();
        cy.url().should('include', '/results');
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 2C');
    })

    it('opens correct hairtype results for type 3A hair', () => {
        cy.visit('/selector');
        cy.get(('[alt="3A"]')).should('be.visible');
        cy.get(('[data-cy=3A]')).click();
        cy.url().should('include', '/results');
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 3A');
    })

    it('opens correct hairtype results for type 3B hair', () => {
        cy.visit('/selector');
        cy.get(('[alt="3B"]')).should('be.visible');
        cy.get(('[data-cy=3B]')).click();
        cy.url().should('include', '/results');
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 3B');
    })

    it('opens correct hairtype results for type 3C hair', () => {
        cy.visit('/selector');
        cy.get(('[alt="3C"]')).should('be.visible');
        cy.get(('[data-cy=3C]')).click();
        cy.url().should('include', '/results');
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 3C');
    })

    it('opens correct hairtype results for type 4A hair', () => {
        cy.visit('/selector');
        cy.get(('[alt="4A"]')).should('be.visible');
        cy.get(('[data-cy=4A]')).click();
        cy.url().should('include', '/results');
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 4A');
    })

    it('opens correct hairtype results for type 4B hair', () => {
        cy.visit('/selector');
        cy.get(('[alt="4B"]')).should('be.visible');
        cy.get(('[data-cy=4B]')).click();
        cy.url().should('include', '/results');
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 4B');
    })

    it('opens correct hairtype results for type 4C hair', () => {
        cy.visit('/selector');
        cy.get(('[alt="4C"]')).should('be.visible');
        cy.get(('[data-cy=4C]')).click();
        cy.url().should('include', '/results');
        cy.get('[data-cy=hairtypeTitle]').should('contain', 'Your hair type is 4C');
    })
});