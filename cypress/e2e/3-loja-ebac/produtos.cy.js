/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    it('deve selecionar um produto da lista', () => {
        cy.get('.block-inner')
        .first()
        .click()
        cy.get('#tab-title-description > a'). should('contain' , 'Descrição')
    });
    it('Deve selecionar o produto da lista procurando pelo nome', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a'). should('contain' , 'Descrição')
    });
    it('deve buscar um produto com  sucesso usando o buscador', () => {
        let produto ='Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });
    it('deve vistar a pagina do produto', () => {
        produtosPage.visitarProduto('Aero Daily Fitness Tee')
    });
    it('deve adicionar o produto ao carrinho ', () => {
        let qtd = 10
        produtosPage.buscarProduto('Geo Insulated Jogging Pant')
        produtosPage.addProdutoCarrinho('34', 'Green', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + '× “Geo Insulated Jogging Pant” foram adicionados no seu carrinho.')
    });
    it.only('deve adicionar o produto ao carrinho buscando da massa de dados ', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[5].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[5].tamanho, 
            dados[5].cor, 
            dados[5].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[5].nomeProduto)
        
    });

});
})