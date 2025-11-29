// cypress/e2e/testCase1.cy.js

describe('Test Case 1 - Register User', () => {

  it('Should register a new user successfully', () => {

    const randomEmail = `test_${Date.now()}@gmail.com`;

    // 1-3 Launch + acessar home
    cy.visit('https://automationexercise.com');
    cy.get('img[src="/static/images/home/logo.png"]', { timeout: 10000 }).should('be.visible');

    // 4 Acessar Signup/Login
    cy.contains('Signup / Login').click();

    // 5 Verificar título
    cy.contains('New User Signup!').should('be.visible');

    // 6 Preencher nome e email
    cy.get('input[data-qa="signup-name"]').type('Test User');
    cy.get('input[data-qa="signup-email"]').type(randomEmail);

    // 7 Clicar Signup
    cy.get('button[data-qa="signup-button"]').click();

    // 8 Verificar ENTER ACCOUNT INFORMATION
    cy.contains('Enter Account Information').should('be.visible');

    // 9 Preencher Title, Name, Email, Password, DOB
    cy.get('#id_gender1').check();  
    cy.get('#password').type('123456');

    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1999');

    // 10 Checkbox newsletter
    cy.get('#newsletter').check();

    // 11 Checkbox offers
    cy.get('#optin').check();

    // 12 Demais informações
    cy.get('#first_name').type('Test');
    cy.get('#last_name').type('User');
    cy.get('#company').type('Automation Test');
    cy.get('#address1').type('123 Fake Street');
    cy.get('#address2').type('Apt 2');
    cy.get('#country').select('United States');
    cy.get('#state').type('California');
    cy.get('#city').type('Los Angeles');
    cy.get('#zipcode').type('90001');
    cy.get('#mobile_number').type('11999999999');

    // 13 Criar conta
    cy.get('button[data-qa="create-account"]').click();

    // 14 Verificar ACCOUNT CREATED!
    cy.contains('Account Created!').should('be.visible');

    // 15 Continuar
    cy.get('a[data-qa="continue-button"]').click();

    // 16 Verificar Logged in as username
    cy.contains('Logged in as Test User', { timeout: 10000 }).should('be.visible');

    // 17 Delete Account
    cy.contains('Delete Account').click();

    // 18 Verificar ACCOUNT DELETED!
    cy.contains('Account Deleted!').should('be.visible');

    cy.get('a[data-qa="continue-button"]').click();
  });

  //Criando conta para os proximos testes
  it('Criando conta para outros testes', () => {

    // 1-3 Launch + acessar home
    cy.visit('https://automationexercise.com');
    cy.get('img[src="/static/images/home/logo.png"]', { timeout: 10000 }).should('be.visible');

    // 4 Acessar Signup/Login
    cy.contains('Signup / Login').click();

    // 5 Verificar título
    cy.contains('New User Signup!').should('be.visible');

    // 6 Preencher nome e email
    cy.get('input[data-qa="signup-name"]').type('Test User');
    cy.get('input[data-qa="signup-email"]').type('userTestProjeto@example.com');

    // 7 Clicar Signup
    cy.get('button[data-qa="signup-button"]').click();

    // 8 Verificar ENTER ACCOUNT INFORMATION
    cy.contains('Enter Account Information').should('be.visible');

    // 9 Preencher Title, Name, Email, Password, DOB
    cy.get('#id_gender1').check();  
    cy.get('#password').type('12345678');

    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1999');

    // 10 Checkbox newsletter
    cy.get('#newsletter').check();

    // 11 Checkbox offers
    cy.get('#optin').check();

    // 12 Demais informações
    cy.get('#first_name').type('Test');
    cy.get('#last_name').type('User');
    cy.get('#company').type('Automation Test');
    cy.get('#address1').type('123 Fake Street');
    cy.get('#address2').type('Apt 2');
    cy.get('#country').select('United States');
    cy.get('#state').type('California');
    cy.get('#city').type('Los Angeles');
    cy.get('#zipcode').type('90001');
    cy.get('#mobile_number').type('11999999999');

    // 13 Criar conta
    cy.get('button[data-qa="create-account"]').click();

    // 14 Verificar ACCOUNT CREATED!
    cy.contains('Account Created!').should('be.visible');

    // 15 Continuar
    cy.get('a[data-qa="continue-button"]').click();

    // 16 Verificar Logged in as username
    cy.contains('Logged in as Test User', { timeout: 10000 }).should('be.visible');

  });

});
