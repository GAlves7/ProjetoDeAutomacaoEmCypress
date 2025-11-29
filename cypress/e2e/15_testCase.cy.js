beforeEach(() => {
  cy.intercept('GET', '**/googleads**', { statusCode: 204 }).as('ads')
})

describe('Test Case 15: Place Order: Register before Checkout', () => {
  it('Should register, place order and delete account successfully', () => {

    const email = `teste${Date.now()}@mail.com`

    cy.visit('https://automationexercise.com/')

    cy.contains('Signup / Login').click()

    cy.get('[data-qa="signup-name"]').type('Tester')
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()

    cy.get('#id_gender1').check()
    cy.get('[data-qa="password"]').type('123456')
    cy.get('[data-qa="days"]').select('10')
    cy.get('[data-qa="months"]').select('January')
    cy.get('[data-qa="years"]').select('2000')

    // Campos obrigatórios que estavam faltando:
    cy.get('[data-qa="first_name"]').type('Test')
    cy.get('[data-qa="last_name"]').type('User')
    cy.get('[data-qa="address"]').type('Rua Teste 123')
    cy.get('[data-qa="country"]').select('India')
    cy.get('[data-qa="state"]').type('Kerala')
    cy.get('[data-qa="city"]').type('Cochin')
    cy.get('[data-qa="zipcode"]').type('123456')
    cy.get('[data-qa="mobile_number"]').type('999999999')

    cy.scrollTo('bottom')
    cy.get('[data-qa="create-account"]').click()

    cy.contains('Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })
})
