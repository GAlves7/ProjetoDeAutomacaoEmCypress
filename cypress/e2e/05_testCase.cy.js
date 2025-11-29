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

  //Aq deletamos a conta criada no teste 1, pois caso seja necessário rodar "npx cypress run" 
  //novamente, não irá dar erro.
  it('Deletando conta criada, para novo "npx cypress run"', () => {

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
