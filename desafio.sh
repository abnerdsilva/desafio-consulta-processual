#!/bin/bash

cd frontend/
npm i
npm run build

cd ../server
go mod tidy
go build
./desafio-consulta-processual