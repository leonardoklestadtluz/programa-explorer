# Stage 08 - Backend

Neste módulo veremos sobre: O que é Node.js, como ele funciona e suas vantagens. Construiremos uma API completa utilizando Node.js e Exoress. Utilizaremos o Insominia para cadastras nossas rotas e verificar os status codes das mesmas. Criaremos um banco de dados utilizando o SQLite, manipularemos nosso DB utilizando a ferramenta  Beekeper Studio juntamente com o Query Builder Knex.js.

===================================

## MÓDULO 1 - Conhecendo o Node.js

==============

## O que é uma API?

- O que é uma API?

Application Programming Interface -> Interface de Programação de Aplicação. Ela é a intermediadora entre quem requisita algo (client) e quem recebe a requisição (server). É ela quem faz a comunicação entre o cliente e o servidor.

- cliente = client => site/ mobile
- garçom = API => node.js backend
- cozinha = server => server

----------

## O que é Node.js?

- O que é Node.js?

É um ambiente de execução para executar a linguagem de programação [Javascript](https://pt.wikipedia.org/wiki/JavaScript), fora do navegador de internet, [front-end](https://ebaconline.com.br/blog/desenvolvedor-front-end-o-que-faz) (client). Isso significa que, agora o  [Javascript](https://pt.wikipedia.org/wiki/JavaScript) é executado no [back-end](https://www.ewally.com.br/blog/ajudando-sua-empresa/backend/) (server)

Portanto, [Node.js](https://pt.wikipedia.org/wiki/Node.js) não é uma linguagem de programação e sim um ambiente de execução.

Exemplo: [Google Chrome](https://pt.wikipedia.org/wiki/Google_Chrome)

-----------

## Onde o Node.js pode ser utilizado?

- Fique a vontade para adicionar qualquer anotação.

Nessa aula veremos diversas formas de utilizar o Node.js como em sites, apps, scripts, micro-serviços entre outros.

Exemplo:

- [back-end](https://www.ewally.com.br/blog/ajudando-sua-empresa/backend/)
- [front-end](https://ebaconline.com.br/blog/desenvolvedor-front-end-o-que-faz)
- [API](https://www.hashtagtreinamentos.com/o-que-e-uma-api-python?gclid=CjwKCAiAmJGgBhAZEiwA1JZoln3hRvUdEaSN8ChPmcwItHQLEYOC0HJ58x-K9UsnqNBbFUW-gp99-RoCykgQAvD_BwE)
  - [Web](https://kenzie.com.br/blog/desenvolvimento-web/)
  - [Desktop](https://igtec.com.br/desenvolvimento-desktop/)
  - [Mobile](https://pt.wikipedia.org/wiki/Desenvolvimento_de_software_m%C3%B3vel)

- [Script de Automação](https://www.zup.com.br/blog/scripts-e-automacoes-ritchie-cli)
- [I.A.](https://www.insper.edu.br/noticias/inteligencia-artificial/?gclid=CjwKCAiAmJGgBhAZEiwA1JZoll1hiNTsFSDcm1uKZheUOTocCXQdsU6xlz3lsQSanqCrfuqUJLQ3pBoC9NMQAvD_BwE)
- [Machine Learning](https://www.ibm.com/br-pt/cloud/learn/machine-learning)

---------

## Vantagens do Node.js

- Quais as vantagens de utilizar o Node.js?

Pelos seguintes motivos.

- Grandes empresas por trás da tecnologia
  - IMB
  - Microsoft
  - PayPal
- Por sua rapidez em sua execução
- Escalável
- Muitas aplicações de ponta usando a tecnologia
  - Netflix
  - Spotify
- Javascript pode ser escrito em qualquer lugar
- Ecosistema gigante
  - Comunidade para ajuda
  - Bibliotecas para uso
- Amplitude de utilização no mercado, ou seja, muitas oportunidades de trabalho com ele, [Node.js](https://pt.wikipedia.org/wiki/Node.js).
- Algumas das várias empresas que utilizam [Node.js](https://pt.wikipedia.org/wiki/Node.js), [link aqui](https://kinsta.com/pt/blog/aplicativos-node-js/)

-------

## v8 Engine

- O que é a v8 Engine?

Interpretador [Javascript](https://pt.wikipedia.org/wiki/JavaScript). Traduz a linguagem de programação [Javascript](https://pt.wikipedia.org/wiki/JavaScript) para que o navegador  [Google Chrome](https://pt.wikipedia.org/wiki/Google_Chrome) entenda as instruções e aumentar a performance que as instruções eram executadas.

Mas... Em conjunto com [Node.js](https://pt.wikipedia.org/wiki/Node.js), é possível executarmos [Javascript](https://pt.wikipedia.org/wiki/JavaScript) fora dos navegadores, ou seja, [back-end](https://www.ewally.com.br/blog/ajudando-sua-empresa/backend/).

---------------

## O funcionamento do Node.js

- Fique a vontade para adicionar qualquer anotação.

Nessa aula entenderemos o funcionamento do Node.js de forma mais detalhada

*(Event-loop, single-thread, Non-blocking I/O)*

Assim:

![Fluxo de execução do Node.js](C:\Users\Leonardo k. Luz\Documents\Rocketseat\explorer\stage08\Screenshot_2.png)

======================================

## Módulo 2 - Criando uma aplicação Node.js

==============

## Iniciando um projeto Node.js

- Qual o comando para iniciar um projeto em Node.js?

npm init -y

-------------

## Adicionando o Express

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como instalar o Express em nosso projeto, o Express é um framework utilizado para lidar com requisições HTTP.

No Node.js, os módulos podem ser adicionados conforme formos utilizando-os, ou seja, instalamos somente o que é necessário para nosso projeto. 

-----------

## node_modules

- O que contém na pasta node_modules?

Contém as pastas de dependências de outros projetos que, neste caso, o express precisa para funcionar.

Ela pode ser excluída, pois é possível cria-la novamente com o comando npm install.

-----------

## Iniciando o Express

- Fique a vontade para adicionar qualquer anotação.

Nessa aula entenderemos para que serve a pasta `node_modules` o que tem dentro dela e como evitar para que ela seja enviada para um repositório na nuvem.

-----------------

## Executando a aplicação

- Fique a vontade para adicionar qualquer anotação.

Nessa aula executaremos o Express em nosso projeto e como automatizar a execução do Express.

OBS: para tudo funcionar em sincronia, é preciso ter a última versão LTS do node js instalada.

----------

## Rotas e Métodos HTTP

- O que são os métodos HTTP?

São formas de requisitar algo para uma API ou servidor.

- GET = Leitura
- POST = Criação
- PUT = Atualização
- DELETE = Deleção
- PATCH = Atualização parcial

---------

## Método GET

- Fique a vontade para adicionar qualquer anotação.

Nessa aula utilizaremos em nossa API o método GET para exibir uma mensagem no navegador ao acessar a rota.

-----------

## Route Params

- O que seria um parâmetro em uma rota? Exemplifique abaixo

Seria alguma informação que é enviada para o recurso.

![Parâmetro passado para o recurso](C:\Users\Leonardo k. Luz\Documents\Rocketseat\explorer\stage08\Screenshot_3.png)

Exemplo:

1. app.get("/message/:id", (req, res) => {

​	2. res.send("Hello, world!")

3. })

Note que na linha 1, o "id" após os " : " dentro dos parênteses é o parâmetro.

----

## Query Params

- Qual a estrutura de uma rota utilizando Query Params? Exemplifique abaixo

Lembrando que aqui no ***query params*** os parâmetros (params), não são obrigatórios. 

![Estrutura de uma rota usando Query Params](C:\Users\Leonardo k. Luz\Documents\Rocketseat\explorer\stage08\Screenshot_4.png)

Exemplo:

`http://localhost:3333/users?page=8&limit=22`

---------

## Nodemon

- Qual a funcionalidade do Nodemon?

Reiniciar nosso servidor a cada mudança que ocorre no código.

Lembrando que ele será utilizado durante o processo de desenvolvimento, quando subirmos a aplicação para uma hospedagem nossa aplicação será executada de forma constante.

Outra observação importante.

*A seguir está o comando para executarmos aplicação*.

`npm run dev`

Então precisamos adicionar um script no arquivo `package.json` para a partir de agora executarmos a aplicação usando o *nodemon*.

`"dev": "nodemon ./src/server.js"`

A linha de código acima é inserida no bloco de código *scripts* do arquivo `package.json`.

O bloco fica assim:

"scripts": {

  "start": "node ./src/server.js",

  "dev": "nodemon ./src/server.js"

 }

------------------------

## Insomnia

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como utilizar outras rotas dentro do nosso projeto utilizando a ferramenta Insomnia.

Download:

[Insomnia](https://insomnia.rest/download)

---------------

## Método POST

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como utilizar o método POST dentro do Insomnia

---------

## Body Params

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como enviar e receber dados utilizando o body da nossa requisição no formato JSON.

---------------

## Organizando a estrutura do projeto

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos a melhor maneira de organizar a estrutura do nosso projeto.

Imagem de exemplo de como será a estrutura daqui pra frente:

![Estrutura inicial do nosso projeto](C:\Users\Leonardo k. Luz\Documents\Rocketseat\explorer\stage08\Screenshot_5.png)

---

## Controllers

- Quais as funcionalidades dos Controllers em nosso projeto?

É a camada onde serão processadas as requisições da aplicação.

Lembrando que é uma boa prática, um único Controller conter no máximo 5 funções/ métodos.

-------

## Users Controller

- Fique a vontade para adicionar qualquer anotação.

Nessa aula começaremos a separar as responsabilidades do nosso projeto, para isso criaremos o nosso primeiro Controller *(User Controller)*.

------------

## HTTP Codes

- Qual a mensagem de retorno para o código HTTP 404?

Not Found = significa que alguma coisa não foi encontrada.

Exemplo: pesquisa de um produto, um endereço de um site que não existe ou um usuário que não foi encontrado

-------

## Entendendo Middlewares

- O que é Middleware?

São funções que interceptam o pacote da requisição e tem acesso ao seu conteúdo.

----------------------

## Utilizando Middleware

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como utilizar o Middleware em nosso projeto.

-------------

## AppError

- Por que é importante tratarmos os erros da nossa aplicação?

Para que a aplicação continue funcionando da maneira esperada quando surgir algum erro e não derrube-a.

-------

## Tratando Exceções

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como tratar exceções para sempre que nossa aplicação der um erro conseguirmos identificar de onde está vindo (client ou server).

-----------

## Configurando o Insomnia

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos configurar o Insomnia separando os nossos Controllers em pastas e criar as variáveis de ambiente da nossa rota.

======================================

## Módulo 3 - SQL

==============

## O que é um Banco de Dados?

- O que é uma foreign key?

É um atributo identificador (*chave primária*), de um registro que é utilizado em outra tabela.

Note que na tabela ***users*** o atributo ***id*** é a chave primária. Ele é usado na tabela ***notes*** como chave estrangeira com o nome ***user_id***.

![Relacionamento entre duas tabelas](C:\Users\Leonardo k. Luz\Documents\Rocketseat\explorer\stage08\Screenshot_6.png)

---------------

## Estrutura do banco de dados

- Fique a vontade para adicionar qualquer anotação.

Nessa aula apresentaremos como será a estrutura do banco de dados do projeto que iremos desenvolver.

![Estrutura de um Banco de Dados](C:\Users\Leonardo k. Luz\Documents\Rocketseat\explorer\stage08\Screenshot_7.png)

-------

## Conectando com o banco de dados

- Fique a vontade para adicionar qualquer anotação.

Nessa aula faremos a configuração inicial para que nosso projeto consiga se comunicar com o banco de dados SQLite.

Driver para estabelecer conexão

​	`const sqlite3 = require('sqlite3')`

Responsável por conexão entre o banco e a aplicação

​	`const sqlite = require('sqlite')`

----------

## SGBD

- Fique a vontade para fazer qualquer anotação.

Nessa aula instalaremos a ferramenta **Beekeper Studio** para que consigamos visualizar e executar funções em nosso banco da dados.

Importante: recentemente o Beekeeper Studio deixou sua versão gratuita disponível apenas no GitHub do projeto. Você pode baixar a última release para o seu sistema operacional no link abaixo de acordo com seu sistema operacional:

[Beekeeper Studio - Windows](https://github.com/beekeeper-studio/beekeeper-studio/releases/download/v3.6.2/Beekeeper-Studio-Setup-3.6.2.exe)

[Beekeeper - macOS (Intel)](https://github.com/beekeeper-studio/beekeeper-studio/releases/download/v3.6.2/Beekeeper-Studio-3.6.2.dmg)

[Beekeeper - macOS (Apple Silicon)](https://github.com/beekeeper-studio/beekeeper-studio/releases/download/v3.6.2/Beekeeper-Studio-3.6.2-arm64.dmg)

[Beekeeper - Linux (Ubuntu/PopOS)](https://github.com/beekeeper-studio/beekeeper-studio/releases/download/v3.6.2/beekeeper-studio_3.6.2_amd64.deb)

----------

## Criando Tabela de Usuário

- Qual o comando para criar uma tabela no banco de dados?

CREATE TABLE nome_da_tabela (

​	nome_do_campo tipo_do_campo,

​	nome_do_campo tipo_do_campo,

​	nome_do_campo tipo_do_campo,

)

Exemplo:

`CREATE TABLE users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name VARCHAR,
	email VARCHAR,
	password VARCHAR,
	avatar VARCHAR NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updated_at TIMESTAMP DEFAUTL CURRENT_TIMESTAMP
)`

-----------

## SQL

- Quais são os comandos DDL?
  - CREATE
  - DROP
  - ALTER

--------------

## Alter

- Qual o comando para alterar tabelas no banco de dados?

ALTER nome_da_tabela

Exemplos:

`ALTER TABLE users DROP COLUMN status`

`ALTER TABLE users RENAME COLUMN active TO status`

`ALTER TABLE users ADD status VARCHAR`

`ALTER TABLE users RENAME TO users`

-----------

## Comandos DDL

- Quais são os comandos DDL?
  - C - Create ----> INSERT
  - R - Read ------> SELECT
  - U - Update ---> UPDATE
  - D - Delete ----> DELETE

------

## Manipulando Dados

- Qual o comando SQL que atualiza os registros de uma tabela? Exemplifique abaixo.

***IMPORTANTE:*** caso tenha mais de um comando na mesma query, além de selecionar o comando que deseja executar, é preciso colocar um " ; " no final de cada comando, caso contrário, ocorrerá erro.

UPDATE nome_da_tabela SET nome_do_campo = info_a_ser_alterada WHERE nome_do_campo_específico

Exemplo:

`UPDATE users SET avatar = 'leonardo.png'
WHERE id = 1`

----

## Migrations

- O que é uma Migration?

É uma forma de versionar o schema de sua aplicação. Migrations trabalha na manipulação da base de dados: criando, alterando ou removendo. Uma forma de controlar as alterações do seu banco juntamente com o versionamento de sua aplicação e compartilhar-la.

------------

## Select

- Fique a vontade para adicionar qualquer anotação.

Nessa aula faremos a consulta SQL em nosso Controller para saber se um e-mail já existe no banco de dados.

----------

## Cadastrando Usuário

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como cadastrar usuários em nosso banco de dados através do nosso Controller.

-----------

## Criptografando Senha do Usuário

- Qual a importância de criptografar a senha no banco de dados?

Nessa aula aprenderemos como criptografar as senhas do usuários utilizando a lib `bcryptjs` .

-------------

## Atualizando Usuário

- Fique a vontade para adicionar qualquer anotação.

Nessa aula faremos a lógica em nosso back-end para que os dados dos usuários sejam atualizados.

----

## Atualizando Senha

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos qual estratégia utilizar para atualizar a senha do usuário.

-----

## Datetime do Banco

- Qual a função do banco de dados que formata a data?

`DATETIME('now')`

***IMPORTANTE***: o banco de dados também possuí funções. Neste caso substituímos a função Javascript `new Date()` pela função SQL `DATETIME('now')`.

----------

## Validando Nome e E-mail

- Fique a vontade para adicionar qualquer anotação.

Nessa aula faremos a validação de nome e e-mail ao atualizar um registro no banco de dados utilizando o **Nullish coalescing operator `(??)`**

======================================

## Módulo 4 - Query Builder

==============

## O que é um SQL Query Builder?

- O que é um SQL Query Builder?

É um construtor de consultas SQL. Faz com que as consultas funcionem independente do SGBD relacional utilizado.

![Query Builder](C:\Users\Leonardo k. Luz\Documents\Rocketseat\explorer\stage08\Screenshot_8.png)

----------

## Instalando o Knex.js

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como instalar o Query Builder **Knex.js**

[Knex.js - A SQL Query for Javascript](http://knexjs.org/#Installation-node)

--------------

## Configurando o Knex.js

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como configurar o Knex.js para que ele possa se comunicar com o nosso banco de dados SQLite.

---------------

## Conceito de Migrations

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos os conceitos de Migrations suas vantagens e seus métodos (UP e DOWN).

É uma forma de versionar o schema de sua aplicação. Migrations trabalha na manipulação da base de dados: criando, alterando ou removendo. Uma forma de controlar as alterações do seu banco juntamente com o versionamento de sua aplicação e compartilha-lá.

------------------

## Migrations para Notes

- Fique a vontade para adicionar qualquer anotação.

Nessa aula criamos a migration do projeto utilizando Knex e executaremos ela para que as tabelas sejam inseridas no banco de dados.

Exemplo:

Arquivo `20230314015122_createNotes.js`

`exports.up = knex => knex.schema.createTable("notes", table => {`
	`table.increments("id")`
	`table.text("title")`
	`table.text("description")`
	`table.integer("user_id").references("id").inTable("users")`

​	`table.timestamp("created_at").default(knex.fn.now())`
​	`table.timestamp("updated_at").default(knex.fn.now())`
`})`

`exports.down = knex => knex.schema.dropTable("notes")`

------------

## NPM vs NPX

- Qual a diferença entre o NPM e o NPX?

Nessa aula entenderemos a diferença entre usar o NPM e o NPX. Basicamente o NPM é utilizado para instalar pacotes, enquanto o NPX é utilizado para executar pacotes.

***IMPORTANTE***

Podemos usar o `npm` para executar algo, pacote por exemplo, mas este pacote precisa estar instalado no projeto.

Já o `npx` executa qualquer coisa, instalada ou não no projeto. Mas lembre-se: `npx` busca este pacote nas dependências do `npm` e faz sua execução.

`npm` = focado em instalação

`npx` = focado em execução

-----------------

## Primary Key e Foreign Key

- Qual a diferença entre Primary key e Foreign key?

Nessa aula entenderemos a diferença entre chave primária e chave estrangeira.

Primary key => possui um id único com ela na tabela.

Foreign key => faz a referência desse id da chave primária em outras tabelas.

----------------

## Cardinalidade

- O que é cardinalidade?

É a frequência com que uma tabela se relaciona com outra(s) tabela(s).

![Cardinalidades](C:\Users\Leonardo k. Luz\Documents\Rocketseat\explorer\stage08\Screenshot_9.png)

------------

## Migrations para Links e Tags

- Fique a vontade para adicionar qualquer anotação.

Nessa aula criaremos mais duas migrations em nosso projeto que proverá as tabelas `link` e `tags` em nosso banco de dados.

------------------

## Cadastrando Nota

- Fique a vontade para adicionar qualquer anotação.

Nessa aula criaremos uma nova Migration em nosso projeto, para conseguirmos cadastrar as notas diretamente da nossa API.

------------------

## Exibindo Nota

- Fique a vontade para adicionar qualquer anotação.

Nessa aula criaremos a rota para exibir a nota que o usuário cadastrou no Rocketnotes.

-------------

## Deletando Nota

- Fique a vontade para adicionar qualquer anotação.

Nessa aula criaremos a rota para deletar a nota em modo cascata em nosso banco de dados.

------------------

## Listando Nota

- Fique a vontade para adicionar qualquer anotação.

-------------

## Operador Like

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como utilizar o operador `like` para buscar valores que contenham partes de uma palavra. Exemplo

Registro no banco: Introdução Nodejs

Pesquisa: Nodejs

Resultado: Introdução Nodejs

---------

## Filtro WhereIn

- Fique a vontade para adicionar qualquer anotação.

Nessa aula utilizaremos o filtro `WhereIn` para filtrar realmente o que é necessário em nossa busca no banco de dados.

--------------

## Conceito de Inner Join

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos sobre Inner Join para fazer a junção de duas tabelas e trazer um resultado em conjunto desses dados.

---------

## Aplicando Inner Join

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aplicaremos o Inner Join dentro do nosso projeto unificando as tabelas *notes* e *tags*.

------------

## Map e Filter

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos a utilizar a função `map` e `filter` utilizando a ferramenta PlayCode.

[PlayCode - Javascript Playground](https://playcode.io/)

```javascript
const tags=[
{id: 1, name: "node", note_id:1},
{id: 2, name: "express", note_id:1},
{id: 3, name: "react", note_id:1},
{id: 4, name: "javascript", note_id:2},
{id: 5, name: "frontend", note_id:2},
];


// **** FILTER ****
const newArray = tags.filter(tag => tag.note_id === 1)
console.log(newArray)

// **** MAP ****
// const newArray = tags.map(tag => {
//   return {
//     ...tag,
//     date: new Date()
//   }
// })
// console.log(newArray)
```



--------------

## Obtendo Tags da Nota

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aplicaremos os conceitos vistos na aula anterior em nosso projeto.

```javascript
const userTags = await knex("tags").where({ user_id })
    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id)

      return {
        ...note,
        tags: noteTags
      }
    })
```

---------------------------

## Listando Tags

- Fique a vontade para adicionar qualquer anotação.

Nessa aula faremos um novo Controller para listar todas as tags do usuário.

---------------------

## Testando Tudo

- Fique a vontade para adicionar qualquer anotação.

Nessa aula faremos todos os testes necessários para verificar se o nosso projeto está funcionando tudo corretamente.

----------------

## Conclusão

- Fique a vontade para adicionar qualquer anotação.

Nessa aula faremos a revisão de tudo que foi visto até aqui.

======================================
