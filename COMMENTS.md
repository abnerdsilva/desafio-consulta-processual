# Comentarios para o desafio técnico

## Ideias para projeto
    [x] criar base com dados fake com alguns processos
    [] implementação do docker para iniciar projeto (backend e frontend) mais automatizado
    [x] definição de linguagem para backend
    [] utilização de banco relacional


## Testes
    [] Teste de unidade na consulta dos processos
    [x] Teste de validação de campo do processo


## Decisões tomadas
    - Base de dados: em arquivo no formato JSON pela otimização de tempo e recursos
    - linguagem de backend é Go por estar usando a mais tempo que Java
    - utilizado gin no backend para auxilio no uso de criação de webservice
    
    - foi adicionado um endpoint para consulta de todos os processos, de apenas 1 processo pelo uid e criação de novo processo
    
    - criado arquivo shell para inicialização do projeto backend e frontend


## Arquitetura utilizada
    [x] MVC no backend
