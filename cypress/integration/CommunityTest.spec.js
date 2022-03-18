/* globals cy */

describe ('Test Community Page', () => {

    it ('shows all 3 posts', () => {
        cy.visit('/community');
        cy.get('[data-cy=post-card]').should('have.length', 3);
    });

    it ('does not show all tests when filter active', () => {
        cy.visit('/community');
        cy.contains('Stylists').click();
        cy.get('[data-cy=post-card]').should('not.have.length', 3)
        cy.get('[data-cy=post-card]').should('have.length', 1)
    });

    it ('shows the right post with a stylist filter', () => {
        cy.visit('/community');
        cy.contains('Stylists').click();
        cy.get('[data-cy=post-card]').should((card) => {
            expect(card.find('.MuiCardHeader-root')).to.contain('New Salon Open!');
            expect(card.find('.MuiCardHeader-title')).to.contain('New Salon Open!');
            expect(card.find('.MuiCardHeader-subheader')).to.contain('March 5, 2022');
            expect(card.find('.MuiCardHeader-root')).to.not.contain('denisedoeshair.com');
            expect(card.find('.MuiCardContent-root')).to.contain('denisedoeshair.com');
            expect(card.find('.MuiCardContent-root')).to.not.contain('badstringnotinpost');
        })
    });

    it ('shows a coming soon banner on create post', () => {
        cy.visit('/community');
        cy.contains("Create Post").click();
        cy.root().contains("Comments Coming Soon...").should('not.exist');
        cy.root().contains("Coming Soon...");
    });

    it ('shows a coming soon banner on comment button', () => {
        cy.visit('/community');
        cy.contains('Stylists').click();
        cy.get("[data-cy=comment-button]").click();
        cy.root().contains("Comments Coming Soon...");
    });
});