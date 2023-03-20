export class Validacoes {
    validaPaginaInicial() {
        cy.contains('QA').should('have.text', '\n            \n              QA Store Desafio\n            \n          ');
        cy.contains('[CATEGORIA] Produto com categoria - 1 Nível').should('have.text', '[CATEGORIA] Produto com categoria - 1 Nível');
        cy.get('.interno > .titulo').should('have.text', '\n        Fale conosco\n      ');
        cy.get('.titulo > .icon-phone').should('be.visible');
        cy.get('.interno > ul > li > span').should('have.text', '\n              \n              Telefone: (11) 99738-1841\n            ');
    }
    
    validarProdutoSelecionado(nome, codigo, marca, preco) {
        cy.get('.info-principal-produto > .nome-produto').should('have.text', nome);
        cy.get('.codigo-produto').should('have.text', `\n              \n                Código:  ${codigo}\n              \n              \n                \n                  Marca: \n                  ${marca}\n                  \n                \n              \n              \n                \n                  \n                \n              \n            `)
        cy.get('div.principal > .acoes-produto > :nth-child(1) > .preco-produto > div > .preco-promocional').should('have.text', `\n                        \n                      \n                    \n                      ${preco}\n                    `)
        cy.get('div.principal > .acoes-produto > .comprar > .botao').should('have.text', '\n               Comprar\n            ')
    }

    validaTotalEBoletoDoCarrinho (total, validaBoleto, valorBoleto) {
        cy.get('.total > .titulo').should('have.text', total)
        if (validaBoleto) {cy.get('.descontos > span > .cor-principal').should('have.text', valorBoleto)}
    }

    validaCarrinho(numProdutosNoCarrinho, nome, precoUnitario, qtdPorProduto, subTotalProduto, subTotalTdsProdutos, cep, cupom) {
        cy.get('.span4 > .carrinho > :nth-child(1) > .qtd-carrinho').should('have.text', numProdutosNoCarrinho)
        cy.get('.span12 > .titulo').should('have.text', '\n              Carrinho  Clique em finalizar compra para efetuar o seu pedido.\n            ')
        cy.get('.produto-info').should('have.text', `\n                  \n                    ${nome}\n                  \n                  \n                  \n                    \n                      \n                        SKU:\n                        \n                          CATEGORIA2\n                        \n                      \n                    \n                    \n                      \n                        Estoque:\n                        \n                          Disponível\n                        \n                      \n                    \n                    \n                          \n                        \n                  \n                `)
        cy.get('.hidden-phone > .preco-produto > div > .preco-promocional').should('have.text', `\n                      \n                    \n                  \n                    ${precoUnitario}\n                  `)
        cy.get('.input-mini').should('have.value', qtdPorProduto)
        cy.get('.preco-produto > .preco-promocional').should('have.text', `\n                      ${subTotalProduto}\n                    `)
        cy.get('.subtotal > .titulo').should('have.text', `\n                      ${subTotalTdsProdutos}\n                    `)
        cy.get('#calcularFrete').should('have.value', cep)
        if (cupom != false) {cy.get('#usarCupom').should('have.value', cupom)}
    }

    validaFrete (retirar, sedex) {
        cy.get(':nth-child(1) > .radio > .nome').should('have.text', 'Retirar pessoalmente')
        cy.get(':nth-child(1) > .radio > .cor-principal').should('have.text', retirar)
        cy.get(':nth-child(2) > .radio > .nome').should('have.text', 'SEDEX')
        cy.get(':nth-child(2) > .radio > .cor-principal').should('have.text', sedex)
    }

    validaCupomFreteGratis (total) {
        cy.get(':nth-child(1) > .radio > .nome').should('have.text', 'Retirar pessoalmente')
        cy.get(':nth-child(1) > .radio > .cor-principal').should('have.text', 'R$ 0,00')
        cy.get(':nth-child(2) > .radio > .nome').should('have.text', 'Frete Grátis')
        cy.get(':nth-child(2) > .radio > .cor-principal').should('have.text', 'R$ 0,00')
        cy.get('.total > .titulo').should('have.text', total);
        // cy.get('.descontos > span > .cor-principal').should('have.text', 'R$ 72,00'); //esse campo está com erro ao incluir cupom
        cy.get('.cupom-sucesso > .cor-secundaria').should('have.text', 'Cupom de desconto:')
        cy.get('.cupom-codigo').should('have.text', 'FRETEGRATIS')
        cy.get('.cupom-valor > .cor-secundaria').should('have.text', 'Frete Grátis')
    }

    validaCupom10Porcento (total) {
        cy.get(':nth-child(1) > .radio > .nome').should('have.text', 'Retirar pessoalmente')
        cy.get(':nth-child(1) > .radio > .cor-principal').should('have.text', 'R$ 0,00')
        cy.get(':nth-child(2) > .radio > .nome').should('have.text', 'SEDEX')
        cy.get(':nth-child(2) > .radio > .cor-principal').should('have.text', 'R$ 35,10')
        cy.get('.total > .titulo').should('have.text', total);
        // cy.get('.descontos > span > .cor-principal').should('have.text', 'R$ 72,00'); //esse campo está com erro ao incluir cupom
        cy.get('.cupom-sucesso > .cor-secundaria').should('have.text', 'Cupom de desconto:')
        cy.get('.cupom-codigo').should('have.text', '10OFF')
        cy.get('.cupom-valor').should('have.text', '\n                        \n                          Desconto:\n                          \n                            \n                              10 %\n                            \n                          \n                          \n                            \n                            (frete não incluso)\n                          \n                        \n                      ')
    }

    validaCupomVencido () {
        cy.get('.alert-danger').should('have.text', '\n              ×\n                O cupom não é válido.\n            ')
    }
}