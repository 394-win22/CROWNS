describe ('Test profile page with no user', () => {
    it ('shows join button, correct text', () => {
        cy.visit ('/profile');
        cy.get('[data-cy=profileTitle]').should('contain', 'Profile');
        cy.get('[data-cy=profileSubtitle]').should('contain', 'Please login to view your profile');
        cy.get('[data-cy=profileJoinButton]').should('be.visible');
    })
});