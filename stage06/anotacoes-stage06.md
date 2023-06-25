# Stage 6 - Javascript antes do framework



==================================================

## Conceitos de SPA

Nessa aula aprenderemos os conceitos do SPA, a diferença entre uma aplicação que não utiliza e outra que utiliza essa tecnologia.

===========================

Alterando comportamento padrão do evento de redirecionamento

Qual evento altera o comportamento padrão do roteamento de uma página web?

event.preventDefault()

===========================

Mapeando as rotas

Qual a propriedade do JavaScript que exibe o caminho das rotas?

Propriedade history.

Exemplo: window.history.pushState({}, "", event.target.href)

============================

Javascript Assíncrono e Promises

O que são Promises?

É a quebra do padrão de excução do Javascript, porém a aplicação não fica travada aguardando o término de algum procedimento.

Este procedimento é retirado da fila e após sua finalização, retorna para fila para ser exibido ao usuário, por exemplo.

============================

Finalizando as funcionalidades e reorganizando a aplicação

O que faz a propriedade element.innerHTML ?

O innerHTML é uma propriedade do Element que define ou retorna o conteúdo HTML de um elemento. Essa propriedade geralmente é escrita no DOM (Document Object Model), através do JavaScript.

Exemplo:

fetch(route)
    .then((data) => data.text())
    .then((html) => {
      document.querySelector("#app").innerHTML = html;
    });


=============================

Orientação a objetos no Javascript

O que são Classes no JavaScript? Exemplifique abaixo

São funções especiais que usamos para instanciar/ criar objetos a partir delas.

Exemplo:

class Router {
  sayHello() {
    alert("hello");
  }
}

const router = new Router();

router.sayHello();


Em outras palavras, imagine algumas formas de bolo, forma quadrada, redonda e retangular. E a partir delas você pode fazer bolos com formatos diferentes a partir destas formas.

Exemplo: bolo quadrado, redondo e retangular.


=============================

Mais conceitos de Orientação a Objetos

Mais conceitos de Orientação a Objetos

Qual nome é dado quando uma função está dentro de uma classe?

Método.

Exemplo:

class Bird {

  // METHOD == FUNCTION
  voar() {
    alert('Voar')
  }
}


=============================

Adicionando um servidor local e simples com NodeJS

O que é um arquivo .json ?

É uma estrutura de dados em forma de texto com propriedades e valores. Muito semelhante a um objeto em Javascript.

Exemplo:

{
  "name": "projeto07",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


=============================

**** REVISÃO ****

PRÓXIMA AULA >>> Adicionando um servidor local e simples com NodeJS

=============================

AULA DE AJUDA >>> SPA Universe

TEMPO >>> 00:00:00

iniciar aplicação >>> npm start

===========================================

===========================================

===========================================

## Avançando nas promises

Apresentação dos conceitos e projeto desta etapa.

- Fique a vontade para adicionar qualquer anotação.

Nessa aula apresentaremos o projeto que será desenvolvido e revisaremos alguns conceitos do módulo anterior.
Importante: o projeto visto neste módulo não tem um arquivo de layout do Figma, mas você pode utilizar [o arquivo do desafio](https://www.figma.com/file/SzQA07HwmSPj4hOYgu1Pps/[Desafios-Explorer]-GitFav/duplicate) caso deseje um referencial.

===============================

## Construindo tabelas no HTML

- Fique a vontade para adicionar qualquer anotação.

Nessa aula começaremos a construir toda a nossa estrutura HTML do projeto, aprenderemos sobre tabelas no HTML.

===============================

## Iniciando o CSS e definindo acessibilidade sr-only

- O que faz a classe .sr-only ? 

Esconde visualmente o texto, mas permite que leitores de tela consigam lê-lo para quem precisade acessibilidade.

Exemplo:

.sr-only {

 position: absolute;

 width: 1px;

 height: 1px;

 padding: 0;

 margin: -1px;

 overflow: hidden;

 clip: rect(0,0,0,0);

 white-space: nowrap;

 border-width: 0;

}

===============================

## Finalizando o CSS

- Qual o significado da propriedade even e odd ?

even = seleciona um elemento que sua posição na DOM seja PAR;

odd = seleciona um elemento que sua posição na DOM seja ímpar;

================================

## Fazendo classes e herança no JS

- Qual o significado da propriedade defer no HTML ?

O script da página será executado somente após a estrutura (HTML) e estilo (CSS) estiverem completamente carregados.

Exemplo: 

<!DOCTYPE html>
<html lang="pt-BR">

<head>

<script src="js/main.js" type="module" defer></script>

</head>

<body>

</body>

</html>

===============================

## Criando HTML com Javascript

- Para o que serve a propriedade append()?

Adicionar conteúdo na estrutura HTML a partir do Javascript.

================================

## Imutabilidade para trabalhar com os dados da aplicação

- O que é imutabilidade no JavaScript?

É um princípio da programação funcional onde é retornado um novo array ao invés de retornar o array original alterado.

 Exemplo: se retornamos um quadrado verde e agora precisamos de um quadrado azul, será criado um novo quadrado na cor azul ao invés de mudarmos a cor do quadrado verde para azul.

================================

## Conhecendo o localStorage

- O que é localStorage ?

É a API do browser (navegador de internet). Nela podemos armazenar dados neste mini banco de dados do navegador.

==================================

## Métodos estáticos e promessas

- O que faz o método fetch() ?

Um método responsável por buscar dados no local definido pelo desenvolvedor. 

É também uma promise, ou seja, uma função/ método que promete buscar algo e retornar assim que estiver concluído sua busca.

==================================

## Promessas com Async Await

- Qual a palavra reservada podemos usar dentro de uma promessa?

Palavra chave: await

Exemplo:

async add(username) {

​	const user = await GithubUser.search(username)

}

==================================

## Cuidando do fluxo da aplicação com try, catch e throw

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como trabalhar com erros e evitar mensagens inesperadas de erros no nosso projeto utilizando os métodos `try`, `catch` e `throw`.

==================================

## Ajustes finais, revisão e próximos passos

- Fique a vontade para adicionar qualquer anotação.

Nessa aula faremos os ajustes finais do nosso projeto e revisaremos tudo que foi apresentado neste módulo. E no final, traremos um novo desafio para você.

tempo: 

=================================

## GitFav









































