export class Acoes {
    carregarPagina() {
        cy.visit('https://qastoredesafio.lojaintegrada.com.br/');
            
        // cy.contains('QA').should('have.text', '\n            \n              QA Store Desafio\n            \n          ');
        // cy.contains('[CATEGORIA] Produto com categoria - 1 Nível').should('have.text', '[CATEGORIA] Produto com categoria - 1 Nível');
        // cy.get('.interno > .titulo').should('have.text', '\n        Fale conosco\n      ');
        // cy.get('.titulo > .icon-phone').should('be.visible');
        // cy.get('.interno > ul > li > span').should('have.text', '\n              \n              Telefone: (11) 99738-1841\n            ');
    }

    selecionaProduto (id) {
        cy.get(id).click();
    }

    adicionaProdutoAoCarrinho (id) {
        cy.get(id).click();
    }

    preencheCep (cep) {
        cy.get('#calcularFrete').type(`${cep}{enter}`, {timeout: 1000})
    }

    selecionaOpcaoFrete (frete) {
        if (frete == 'retirar') {cy.get(':nth-child(1) > .radio').click()};
        if (frete == 'sedex') {cy.get(':nth-child(2) > .radio').click()};
    }

    insereCupom (cupom) {
        cy.get('#usarCupom').type(`${cupom}{enter}`, {timeout: 1000});
    }

    removeCupom () {
        cy.get('.text-error').click();
    }

    aumentaQuantidade () {
        cy.get('.icon-plus').click();
    }
}