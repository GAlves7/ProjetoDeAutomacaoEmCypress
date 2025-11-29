/// <reference types="cypress" />

describe('Test Case 8: Verificar Todos os Produtos e Página de Detalhes', () => {
    const URL_BASE = 'http://automationexercise.com';

    it('Deve verificar a lista de produtos e os detalhes do primeiro produto', () => {
        // 1. Lançar navegador e 2. Navegar para a URL
        cy.visit(URL_BASE);

        // 3. Verificar que a home page está visível com sucesso
        cy.title().should('eq', 'Automation Exercise');
        cy.get('#slider-carousel').should('be.visible');

        // 4. Clicar no botão 'Products'
        cy.get('a[href="/products"]').click();

        // 5. Verificar que o usuário foi navegado para a página ALL PRODUCTS com sucesso
        cy.url().should('include', '/products');
        
        // CORREÇÃO do Passo 5 (Case-Insensitive): 
        cy.get('.title.text-center').invoke('text').should('match', /all products/i); 

        // 6. A lista de produtos está visível
        cy.get('.features_items .col-sm-4').as('productList');
        cy.get('@productList').should('have.length.greaterThan', 0);

        // 7. Clicar em 'View Product' do primeiro produto
        // Usamos o seletor mais específico e {force: true} para contornar problemas de clique.
        cy.get('@productList').first()
            .find('a[href*="/product_details"]')
            .click({ force: true });

        // 8. O usuário é direcionado para a página de detalhes do produto
        cy.url().should('include', 'product_details');
        
        // 9. Verificar se os detalhes do produto estão visíveis:
        const productInfo = cy.get('.product-information');

        // Garantir que a área de informações está carregada
        productInfo.should('be.visible');

        // Nome do Produto
        productInfo.find('h2').should('be.visible'); 
        
        // CORREÇÃO ROBUSTA DE SINCRONIZAÇÃO/ASSERSÃO:
        // Usamos cy.contains() para esperar que o texto específico apareça dentro da seção.
        // Isso resolve o problema de tempo limite ao procurar por <p> antes de carregar.
        
        // Categoria - Espera que o texto "Category" apareça (ignora maiúsculas/minúsculas)
        cy.contains('.product-information p', 'Category:', { matchCase: false }).should('be.visible');
        
        // Preço (o seletor :contains("Rs.") é bom para o preço)
        cy.contains('.product-information span', 'Rs.').should('be.visible'); 
        
        // Disponibilidade
        cy.contains('.product-information p', 'Availability:', { matchCase: false }).should('be.visible');
        
        // Condição
        cy.contains('.product-information p', 'Condition:', { matchCase: false }).should('be.visible');
        
        // Marca
        cy.contains('.product-information p', 'Brand:', { matchCase: false }).should('be.visible');
    });
});