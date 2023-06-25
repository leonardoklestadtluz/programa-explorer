# Stage 07 - Git & Github

Neste módulo você aprenderá sobre Git, uma ferramenta para controle de versões e como utilizar o Github para armazenar o código fonte do seu projeto, além de ser uma ótima estratégia de portfólio para mostras para empresas e recrutadores.

----------------------------------------------------------

## ETAPA  1



## Abertura

- Fique a vontade para adicionar qualquer anotação.

Introdução ao nível 07 onde aprenderemos sobre as ferramentas Git e Github.

---------------------------------------------------------

## Controle de versão

- O que é VCS?

É um sistema que gerencia as alterações realizadas no código-fonte ao longo do tempo.

-------------------------------------------------------------

## Iniciando um repositório

- Qual o comando para inicializar um repositório no Git?

git init

-------------------------------------------------------------

## O .git

- Por que não devemos apagar a pasta .git?

Basicamente é o coração do Git. Ali são armazenadas todas as informações de histórico de alterações e configurações do sistema.

--------------------------------------------------------------

## Configurando o Git

- Qual o comando de configuração do git?

git config --global user.name "Leoanrdo K. Luz"

git config --global user.email "klestadt@hotmail.com"

------------------------------------------------------------

## Primeiro commit

- Qual o comando devemos utilizar para fazer o commit com uma mensagem?

git commit -m "my first commit"

--------------------------------------------------------------

## Git log

- Qual comando devemos utilizar para verificar um número x de log no terminal?

git log -n 3

--------------------------------------------------------------

## Estágios do arquivo

- Quais são os estágios do arquivo no Git?

Inicialização do repositório Git >>> Modificação dos arquivos >>> Área de estágio >>> Registrar arquivos no histórico

---------------------------------------------------------

## Git Status

- Qual a funcionalidade do comando git status?

Mostrar em qual etapa os arquivos estão. Modificação, área de estágio ou registro de arquivos no histórico.

---------------------------------------------------------

## HEAD

- Qual é a principal função do HEAD em um commit?

Apontar o último commit realizado na linha do tempo do projeto. Esta linha do tempo chama-se main. Estes commits na linha do tempo são chamados de pontos na história.

--------------------------------------------------------

## Git Diff

- O que faz o comando git diff?

Mostrar a(s) linha(s) que foram alterada(s) no projeto.

-<title>Document</title>

<title>Aulas de Git</title>

----------------------------------------------------------

## Desfazendo modificações

- Qual o comando para desfazer uma modificação?

git restore nome_do_arquivo

Exemplo:

git restore index.html

E o comando a seguir, restaura todas as modificações realizadas.

git restore .

------------------------------------------------------------

## Restaurando da Staged

- Qual o comando restaura os arquivos para a stage anterior?

git restore --staged .

o comando a seguir, retorna o arquivo especificado para a área de modificação

git restore --staged index.html

-----------------------------------------------------

## Como corrigir o último commit

- Qual o comando para corrigir a mensagem de commit?

Informar a nova mensagem entre as aspas "" duplas.

git commit --amend -m "change title page index.html"

--------------------------------------------------------

## Desfazendo o último commit

- Qual o comando para desfazer o último commit?

git reset --soft HEAD~1

--------------------------------------------------------

## Source Control do VS Code

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como utilizar o Git utilizando o Source Control do próprio VS Code.

==================================

## ETAPA 2

## Criando uma conta

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como utilizar o Github para subir os nossos repositórios locais para a nuvem.

-----------------------------------------------------

## Perfil Público

- Fique a vontade para adicionar qualquer informação.

Nessa aula aprenderemos como criar uma conta no Github.

-----------------------------------------------------------

## Página do usuário

- Fique a vontade para adicionar qualquer informação.

Nessa aula aprenderemos como deixar o nosso perfil público do Github acessível para recrutadores e outros devs.

---------------------------------------------

## Criando repositório

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como criar um repositório no Github.

------------------------------------------

## Git push

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como enviar o nosso repositório local para a nuvem (Github) utilizando o comando `git push` e o Source Control do VS Code.

-----------

## Git ignore

- Qual a vantagem de utilizar o arquivo .gitignore em nosso projeto?

Vantagem de não enviar arquivos ou pastas desnecessárias para o Github, ainda mais se o arquivo ou pasta forem grandes.

----------

## Gitkeep

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como utilizar o arquivo `.gitkeep` para subir pastas vazias para o repositório no Github.

-----

## Histórico remoto

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como visualizar o histórico remoto no Github.

------------

## Git clone

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como utilizar o comando `git clone` para clonar os repositórios remotos para a sua máquina local.

---------------------

## Git pull

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como utilizar o comando `git pull` para trazer as últimas atualizações do repositório remoto para o seu repositório local.

-----

## README

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como utilizar o arquivo `README.md` e entenderemos a importância de ter ele em um repositório.

------

## Mudar a visibilidade do projeto

- Fique a vontade para adicionar qualquer anotação.

Nessa aula aprenderemos como alterar a visibilidade do projeto de público para privado ou o inverso.
