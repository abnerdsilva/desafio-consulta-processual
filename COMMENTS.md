# Comentarios para o desafio técnico

## Ideias para projeto
    [x] criar base com dados fake com alguns processos
    [] implementação do docker para iniciar projeto (backend e frontend) mais automatizado
    [x] definição de linguagem para backend
    [] utilização de banco relacional
    [] criação de crawler para automatizar cópia de dados de processos para incluir na base de dados


## Testes
    [] Teste de unidade na consulta dos processos
    [x] Teste de validação de campo do processo


## Decisões tomadas
    - Base de dados: em arquivo no formato JSON pela otimização de tempo e recursos
    - linguagem de backend é Go por estar usando a mais tempo que Java
    - foi adicionado um endpoint para consulta de todos os processos, de apenas 1 processo pelo uid e criação de novo processo
    
    - criado arquivo shell para inicialização do projeto backend e frontend

    # frontend
    - utilizado framework Vite para facilitar criação do projeto web
    - utilizado também a lib do Bootstrap, pois já possui estilização em seus componentes e pela praticidade de trabalhar com colunas na tela
    
    # backend
    - utilizado gin no backend para auxilio no uso de criação de webservice



## Arquitetura utilizada
    [x] MVC no backend
