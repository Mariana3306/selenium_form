// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out
it('Login with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('.large-6.small-12.columns [type="text"]').type('tomsmith');
    cy.get('.large-6.small-12.columns [id="password"]').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('.flash.success ').contains('You logged into a secure area!').should('exist')
})
it('Login with invalid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('.large-6.small-12.columns [type="text"]').type('tom');
    cy.get('.large-6.small-12.columns [id="password"]').type('SuperSecret')
    cy.get('.radius').click()
    cy.get('.flash.error ').contains('Your username is invalid!').should('exist')
})
it('Logout from app', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('.large-6.small-12.columns [type="text"]').type('tomsmith');
    cy.get('.large-6.small-12.columns [id="password"]').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('.flash.success ').contains('You logged into a secure area!').should('exist')
    cy.get('.icon-2x.icon-signout').click()
    cy.get('.flash.success ').contains('You logged out of the secure area!').should('exist')
})