# desafio-consulta-processual

Este projeto tem como base um desafio técnico para análise de código

#
## Execução do frontend
    npm -i
    npm run dev

## Execução do backend
    go mod tidy
    go run main.go

## Automação
    rodar comando shell para automatizar processo de rodar frontend e backend

    execute:
    ./desafio.sh

## Add novo processo
comando de exemplo para criar um novo processo
obs.: deve informar os dados corretos no lançamento

    curl --location --request POST 'http://localhost:8787/process' \
    --header 'Content-Type: text/plain' \
    --data-raw '{
        "nr_cnj": "42385478112345155499",
        "status_processo": "Rito ordináro",
        "descricao": "Descrição curta do processo",
        "nr_instancia": 1,
        "envolvidos": [
            {
                "nome": "Abner Silva",
                "tipo": 1
            },
            {
                "nome": "Paula Santos",
                "tipo": 1
            },
            {
                "nome": "José da Silva",
                "tipo": 2
            }
        ],
        "tribunal_origem": {
            "nome": "TJSP",
            "tipo": "Foro de Indaiatuba",
            "local": "Indaiatuba"
        },
        "vr_causa": 1549.88,
        "data_inicio": "2023-03-07 23:29:36",
        "movimentacoes": [
            {
                "data_movimentacao": "2023-03-07 23:29:36",
                "descricao": "Uma descriição da movimentação"
            },
            {
                "data_movimentacao": "2023-03-08 15:29:36",
                "descricao": "Uma descriição da movimentação do processo"
            }
        ]
    }'