Pré-requisitos:

Git;
Node.JS versão 12 ou superior;
NPM (Node Package Manager);

Instalar Cypress:
  - Crie um diretório onde será instalado o Cypress;
  - Esse será o mesmo diretório onde ficarão armazenados os testes;
  - Acesse o diretório no terminal;
  - Rode o comando:
    - npm install cypress
  - Esse comando irá instalar o Cypress somente no diretório criado
  - Para instalar globalmente (npm install -g cypress)
  - Baixar repositório: https://github.com/daspedras1/LI

Rodando testes:

  - Acesse o diretório onde estão salvos os testes via terminal;
  - Digitar o comando: npx cypress open;
    - Clicar em E2E Testing;
    - Selecionar o navegador Google Chrome;
    - Clicar em Start E2E Testing in Chrome;
    - Na tela do Chrome controlado pelo Cypress, acessar o diretório cypress/e2e/1-carrinho;
    - Clicar no arquivo carrinho.cy.js;
  - Aguardar os testes serem finalizados;
  - Verificar os resultados do teste;
  - Fechar o navegador aberto;
  - Fechar Cypress.

Caso queira rodar os testes sem abrir o navegador, usando apenas o terminal, utilizar o comando:
  - npm cypress run