describe('Automation Exercise - Test Case 6', () => {

    const url = 'https://automationexercise.com';

    // -------------------------------
    // Test Case 6: Contact Us Form
    // -------------------------------
    it('Test Case 6 - Contact Us Form', () => {

        cy.visit(url);

        // 3. Verificar home page
        cy.get('body').should('contain', 'Full-Fledged practice website for Automation Engineers');

        // 4. Click Contact Us
        cy.contains('Contact us').click();

        // 5. Verificar GET IN TOUCH
        cy.contains('Get In Touch').should('be.visible');

        // 6. Preencher o formulário
        cy.get('[data-qa="name"]').type('Juan');
        cy.get('[data-qa="email"]').type('juan@email.com');
        cy.get('[data-qa="subject"]').type('Teste Cypress');
        cy.get('[data-qa="message"]').type('Mensagem de teste enviada pelo Cypress.');

        // 7. Upload de arquivo
        cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/example.json');

        // 8. Submit
        cy.get('[data-qa="submit-button"]').click();

        // 9. Alert - clicar OK automaticamente
        cy.on('window:alert', (text) => {
            expect(text).to.eq('Press OK to proceed!');
        });

        // 10. Verificar mensagem de sucesso
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

        // 11. Voltar ao home
        cy.contains('Home').click();
        cy.url().should('eq', url + '/');
    });
});