// cypress/e2e/testCase2.cy.js

describe('Test Case 2 - Login with correct email and password', () => {

  it('Should login successfully with valid credentials', () => {

    const validEmail = "userTestProjeto@example.com";  // coloque o email de teste do grupo
    const validPassword = "12345678";                  // coloque a senha padrão

    // 1-3 Acessar home
    cy.visit('https://automationexercise.com');
    cy.get('img[src="/static/images/home/logo.png"]').should('be.visible');

    // 4 Login
    cy.contains('Signup / Login').click();

    // 5 Verificar 'Login to your account'
    cy.contains('Login to your account').should('be.visible');

    // 6 Preencher credenciais válidas
    cy.get('input[data-qa="login-email"]').type(validEmail);
    cy.get('input[data-qa="login-password"]').type(validPassword);

    // 7 Login
    cy.get('button[data-qa="login-button"]').click();

    // 8 Verificar logged in
    cy.contains('Logged in as', { timeout: 10000 }).should('be.visible');

    // 9 Delete account
    cy.contains('Delete Account').click();

    // 10 Verificar ACCOUNT DELETED!
    cy.contains('Account Deleted!').should('be.visible');
  });
});
