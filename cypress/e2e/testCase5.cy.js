describe('Automation Exercise - Test Case 5', () => {

  const url = 'https://automationexercise.com';

  it('Test Case 5 - Register user with existing email', () => {

    cy.visit(url);

    // Home page
    cy.get('.logo').should('be.visible');

    cy.contains('Signup / Login').click();

    cy.contains('New User Signup!').should('be.visible');

    // Usar um email que existe de verdade
    cy.get('[data-qa="signup-name"]').type('João');
    cy.get('[data-qa="signup-email"]').type('userTestProjeto@example.com');

    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Email Address already exist!').should('be.visible');
  });
});
