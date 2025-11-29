/// <reference types="cypress" />

describe('Test Case 9: Buscar Produto', () => {
    const URL_BASE = 'http://automationexercise.com';
    // Usamos um termo de busca comum. Você pode alterá-lo se necessário.
    const SEARCH_TERM = 'T-Shirt'; 

    it('Deve buscar um produto e verificar se os resultados da busca são exibidos', () => {
        // 1. Lançar navegador e 2. Navegar para a URL
        cy.visit(URL_BASE);

        // 3. Verificar que a home page está visível com sucesso
        cy.title().should('eq', 'Automation Exercise');
        cy.get('#slider-carousel').should('be.visible');

        // 4. Clicar no botão 'Products'
        cy.get('a[href="/products"]').click();

        // 5. Verificar que o usuário foi navegado para a página ALL PRODUCTS com sucesso
        cy.url().should('include', '/products');
        
        // Asserção robusta para o cabeçalho "ALL PRODUCTS"
        cy.get('.title.text-center')
            .should('be.visible') // Verifica primeiro que o elemento está visível
            .invoke('text')
            .should('match', /all products/i); // Depois verifica o texto (case-insensitive)

        // 6. Inserir nome do produto no input de busca e clicar no botão de busca
        cy.get('#search_product').should('be.visible').type(SEARCH_TERM);
        cy.get('#submit_search').click();

        // 7. Verificar se 'SEARCHED PRODUCTS' está visível
        // CORREÇÃO APLICADA: Quebramos as asserções para garantir que 'be.visible' seja chamado no elemento DOM.
        cy.get('.title.text-center')
            .should('be.visible') // Verifica a visibilidade no elemento
            .invoke('text')
            .should('match', /searched products/i); // Verifica o texto (case-insensitive)

        // 8. Verificar se todos os produtos relacionados à busca estão visíveis
        cy.get('.features_items .col-sm-4').as('searchResults');
        
        // 8a. Deve haver resultados (mais de 0 produtos)
        cy.get('@searchResults').should('have.length.greaterThan', 0);
        
        // 8b. Opcional: Verifica se o nome de pelo menos o primeiro produto contém o termo de busca (case-insensitive)
        cy.get('@searchResults').first().find('.productinfo p')
            .invoke('text')
            .should('include', SEARCH_TERM);
    });
});