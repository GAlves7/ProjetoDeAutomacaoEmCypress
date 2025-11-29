// cypress/e2e/testCase3.cy.js

describe('Test Case 3 - Login with incorrect credentials', () => {

  it('Should show error for invalid login', () => {

    const wrongEmail = "emailErrado@example.com";
    const wrongPassword = "senhaErrada";

    // 1-3 Home
    cy.visit('https://automationexercise.com');
    cy.get('img[src="/static/images/home/logo.png"]').should('be.visible');

    // 4 Login
    cy.contains('Signup / Login').click();

    // 5 Login to your account
    cy.contains('Login to your account').should('be.visible');

    // 6 Preencher incorretos
    cy.get('input[data-qa="login-email"]').type(wrongEmail);
    cy.get('input[data-qa="login-password"]').type(wrongPassword);

    // 7 Login
    cy.get('button[data-qa="login-button"]').click();

    // 8 Verificar mensagem de erro
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
