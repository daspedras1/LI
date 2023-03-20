/// <reference types="cypress" />

const { Acoes } = require("../../funcoes/acoes");
const { Validacoes } = require("../../funcoes/validacoes");


describe('Testes carrinho', () => {
    const acoes = new Acoes();
    const validacoes = new Validacoes();
    

    beforeEach(() => {
        acoes.carregarPagina();
        validacoes.validaPaginaInicial();
    })
    
    it('Deve adicionar o cupom FRETEGRATIS ao carrinho', () => {
        acoes.selecionaProduto(':nth-child(1) > ul > :nth-child(1) > .listagem-item > .acoes-produto > .botao');
        validacoes.validarProdutoSelecionado('[CATEGORIA] Produto com categoria - 1 Nível', 'CATEGORIA2', 'CATEGORIA', 'R$ 80,00');        
        acoes.adicionaProdutoAoCarrinho('div.principal > .acoes-produto > .comprar > .botao');
        validacoes.validaCarrinho(
            '1', //quantidade de produtos no carrinho -> ao lado do ícone do carrinho
            '[CATEGORIA] Produto com categoria - 1 Nível', //nome do primeiro produto
            'R$ 80,00', //preço unitário do primeiro produto
            '1', //quantidade do primeiro produto
            'R$ 80,00', //subtotal do primeiro produto
            'R$ 80,00', //subtotal de todos os produtos
            '',
            ''
        );
        validacoes.validaTotalEBoletoDoCarrinho('R$ 80,00', true, 'R$ 72,00');
        acoes.preencheCep('80530280');
        validacoes.validaFrete('R$ 0,00', 'R$ 35,10');
        acoes.selecionaOpcaoFrete ('sedex');
        validacoes.validaTotalEBoletoDoCarrinho('R$ 115,10', true, 'R$ 107,10');
        acoes.insereCupom('FRETEGRATIS');
        validacoes.validaCupomFreteGratis('R$ 80,00');
    });

    it('Deve remover o cupom FRETEGRATIS do carrinho', () => {
        acoes.selecionaProduto(':nth-child(1) > ul > :nth-child(1) > .listagem-item > .acoes-produto > .botao');
        validacoes.validarProdutoSelecionado('[CATEGORIA] Produto com categoria - 1 Nível', 'CATEGORIA2', 'CATEGORIA', 'R$ 80,00');        
        acoes.adicionaProdutoAoCarrinho('div.principal > .acoes-produto > .comprar > .botao');
        validacoes.validaCarrinho(
            '1', //quantidade de produtos no carrinho -> ao lado do ícone do carrinho
            '[CATEGORIA] Produto com categoria - 1 Nível', //nome do primeiro produto
            'R$ 80,00', //preço unitário do primeiro produto
            '1', //quantidade do primeiro produto
            'R$ 80,00', //subtotal do primeiro produto
            'R$ 80,00', //subtotal de todos os produtos
            '',
            ''
        );
        validacoes.validaTotalEBoletoDoCarrinho('R$ 80,00', true, 'R$ 72,00');
        acoes.preencheCep('80530280');
        validacoes.validaFrete('R$ 0,00', 'R$ 35,10');
        acoes.selecionaOpcaoFrete ('sedex');
        validacoes.validaTotalEBoletoDoCarrinho('R$ 115,10', true, 'R$ 107,10');
        acoes.insereCupom('FRETEGRATIS');
        validacoes.validaCupomFreteGratis('R$ 80,00');
        acoes.removeCupom();
        validacoes.validaCarrinho(
            '1', //quantidade de produtos no carrinho -> ao lado do ícone do carrinho
            '[CATEGORIA] Produto com categoria - 1 Nível', //nome do primeiro produto
            'R$ 80,00', //preço unitário do primeiro produto
            '1', //quantidade do primeiro produto
            'R$ 80,00', //subtotal do primeiro produto
            'R$ 80,00', //subtotal de todos os produtos
            '80530-280',
            ''
        );
        validacoes.validaTotalEBoletoDoCarrinho('R$ 115,10', true, 'R$ 107,10');
    })

    it('Não deve adicionar o cupom CUPOMVENCIDO ao carrinho', () => {
        acoes.selecionaProduto(':nth-child(1) > ul > :nth-child(1) > .listagem-item > .acoes-produto > .botao');
        validacoes.validarProdutoSelecionado('[CATEGORIA] Produto com categoria - 1 Nível', 'CATEGORIA2', 'CATEGORIA', 'R$ 80,00');        
        acoes.adicionaProdutoAoCarrinho('div.principal > .acoes-produto > .comprar > .botao');
        validacoes.validaCarrinho(
            '1', //quantidade de produtos no carrinho -> ao lado do ícone do carrinho
            '[CATEGORIA] Produto com categoria - 1 Nível', //nome do primeiro produto
            'R$ 80,00', //preço unitário do primeiro produto
            '1', //quantidade do primeiro produto
            'R$ 80,00', //subtotal do primeiro produto
            'R$ 80,00', //subtotal de todos os produtos
            '',
            ''
        );
        validacoes.validaTotalEBoletoDoCarrinho('R$ 80,00', true, 'R$ 72,00');
        acoes.preencheCep('80530280');
        validacoes.validaFrete('R$ 0,00', 'R$ 35,10');
        acoes.selecionaOpcaoFrete ('sedex');
        validacoes.validaTotalEBoletoDoCarrinho('R$ 115,10', true, 'R$ 107,10');
        acoes.insereCupom('CUPOMVENCIDO');
        validacoes.validaCupomVencido();
        validacoes.validaCarrinho(
            '1', //quantidade de produtos no carrinho -> ao lado do ícone do carrinho
            '[CATEGORIA] Produto com categoria - 1 Nível', //nome do primeiro produto
            'R$ 80,00', //preço unitário do primeiro produto
            '1', //quantidade do primeiro produto
            'R$ 80,00', //subtotal do primeiro produto
            'R$ 80,00', //subtotal de todos os produtos
            '80530-280',
            ''
        );
        validacoes.validaTotalEBoletoDoCarrinho('R$ 115,10', true, 'R$ 107,10');
    });

    it('Deve aumentar a quantidade do produto no carrinho com CEP e cupom preenchidos', () => {
        acoes.selecionaProduto(':nth-child(1) > ul > :nth-child(1) > .listagem-item > .acoes-produto > .botao');
        validacoes.validarProdutoSelecionado('[CATEGORIA] Produto com categoria - 1 Nível', 'CATEGORIA2', 'CATEGORIA', 'R$ 80,00');        
        acoes.adicionaProdutoAoCarrinho('div.principal > .acoes-produto > .comprar > .botao');
        validacoes.validaCarrinho(
            '1', //quantidade de produtos no carrinho -> ao lado do ícone do carrinho
            '[CATEGORIA] Produto com categoria - 1 Nível', //nome do primeiro produto
            'R$ 80,00', //preço unitário do primeiro produto
            '1', //quantidade do primeiro produto
            'R$ 80,00', //subtotal do primeiro produto
            'R$ 80,00', //subtotal de todos os produtos
            '',
            ''
        );
        validacoes.validaTotalEBoletoDoCarrinho('R$ 80,00', true, 'R$ 72,00');
        acoes.preencheCep('80530280');
        validacoes.validaFrete('R$ 0,00', 'R$ 35,10');
        acoes.selecionaOpcaoFrete ('sedex');
        validacoes.validaTotalEBoletoDoCarrinho('R$ 115,10', true, 'R$ 107,10');
        acoes.insereCupom('10OFF');
        validacoes.validaCupom10Porcento('R$ 107,10');
        acoes.aumentaQuantidade();
        validacoes.validaCupom10Porcento('R$ 179,10');
        validacoes.validaCarrinho(
            '1', //quantidade de produtos no carrinho -> ao lado do ícone do carrinho
            '[CATEGORIA] Produto com categoria - 1 Nível', //nome do primeiro produto
            'R$ 80,00', //preço unitário do primeiro produto
            '2', //quantidade do primeiro produto
            'R$ 160,00', //subtotal do primeiro produto
            'R$ 160,00', //subtotal de todos os produtos
            '80530-280',
            false
        );
        validacoes.validaTotalEBoletoDoCarrinho('R$ 179,10', false, '');
    });
})