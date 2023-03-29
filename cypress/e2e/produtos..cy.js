/// <reference types="cypress"/>

describe("Funcionalidade Página de produtos", () => {
    beforeEach(() => {
      cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
    }); ///visita a mesma URL antes cada teste
  
    it("Deve selecionar um produto da lista", () => {
      cy.get('[class = "product-block grid"]')
        //.first()
        //.last()
        .eq(3) //vai no item que é de acordo com o numero (começa do 0)
        .click();
    });
    it("Deve selecionar um item no carrinho", () => {
      var quantidade = 3 //com uma variavel ao querer mudar a quantidade no teste ele não falhará
      cy.get('[class = "product-block grid"]')
        .last().click();
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Red').click()
      cy.get('.input-text').clear().type(quantidade)
      cy.get('.single_add_to_cart_button').click()
  
      cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
      cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
  });
  