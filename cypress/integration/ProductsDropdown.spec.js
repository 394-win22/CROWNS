/* globals cy */

describe ('Test Products Dropdown', () => {

    it ('opens and closes, revealing and hiding internal elements', () => {
        cy.visit ('/');
        cy.get('[data-cy=selector]').click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/selector')
        });
        cy.get("[data-cy=hairtype]").first().click();
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/results')
        });
        cy.wait(100)
        // check not visible
        cy.get('[data-cy="product_image"]')
            .should('not.be.visible')
        // click dropdown to open
        cy.get("[data-cy=dropdowns]").first().click()
        // check element image is visible
        cy.get('[data-cy="product_image"]')
            .should('be.visible')
            .and(($img) => {expect($img[0].naturalWidth).to.be.greaterThan(0)})
        // click dropdown to close
        cy.get("[data-cy=dropdowns]").first().click()
        // check element in image is no longer visible again
        cy.get('[data-cy="product_image"]')
            .should('not.be.visible')

    })
});