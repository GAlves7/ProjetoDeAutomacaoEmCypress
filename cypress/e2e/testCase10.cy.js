describe('Test Case 10: Verify Subscription in home page', () => {
  it('Should subscribe successfully (DEUS QUER PASSAR)', () => {
    cy.on('uncaught:exception', () => false)

    cy.visit('https://automationexercise.com/', { timeout: 60000 })

    cy.wait(4000) // O SITE É LENTO PRA CACETE

    cy.scrollTo('bottom', { duration: 2000 })

    cy.wait(4000)

    const email = `teste${Date.now()}@mail.com`
    cy.get('#susbscribe_email', { timeout: 20000 }).type(email, { force: true })
    cy.get('#subscribe').click({ force: true })

    cy.wait(3000)

    cy.contains('You have been successfully subscribed!', { timeout: 20000 })
      .should('exist')
  })
})
