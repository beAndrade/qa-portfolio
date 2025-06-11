# Testes de API - Example Cafe

> Este projeto contém casos de teste para endpoints da API REST do Example Cafe, validados com Postman.

## Estrutura

- `test-cases.md`: 5 casos de teste para os endpoints `/menu` e `/reservations`.
- `menu-api-tests.postman_collection.json`: Coleção Postman com scripts de teste.
- `screenshots/`: Capturas de tela simuladas usando JSONPlaceholder.

## Como Executar

1. Importe a coleção `menu-api-tests.postman_collection.json` no Postman.
2. Configure a URL base (https://api.examplecafe.com).
3. Execute cada requisição e verifique os testes automatizados.

## Notas

- A API é fictícia. Para testes reais, substitua a URL base por uma API pública (ex.: jsonplaceholder.typicode.com).
- Os scripts de teste validam status HTTP e conteúdo das respostas JSON.
