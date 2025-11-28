describe('Automation Exercise - Test Case 4', () => {

  const url = 'https://automationexercise.com';

  it('Test Case 4 - Logout User', () => {

    cy.visit(url);

    // Home page carregou
    cy.get('.logo').should('be.visible');

    cy.contains('Signup / Login').click();

    cy.contains('Login to your account').should('be.visible');

    cy.get('[data-qa="login-email"]').type('userTestProjeto@example.com');
    cy.get('[data-qa="login-password"]').type('12345678');

    cy.get('[data-qa="login-button"]').click();

    cy.contains('Logged in as').should('be.visible');

    cy.contains('Logout').click();

    cy.contains('Login to your account').should('be.visible');
  });
});
