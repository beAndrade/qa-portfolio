# Casos de Teste para API - Example Cafe

> _"Nota: Estes casos de teste demonstram minha capacidade de validar APIs REST, cobrindo cenários de funcionalidade, erro e segurança. Meu conhecimento em front-end foi aplicado para garantir que as respostas da API atendem às expectativas da interface do usuário."_

## Caso de Teste 1: Listar Itens do Menu com GET

- **ID:** CT_API_001
- **Título:** Validar resposta do endpoint /menu com requisição GET
- **Pré-condições:** A API do Example Cafe está acessível, e o Postman está configurado.
- **Passos:**

  1. Configure uma requisição GET para <https://api.examplecafe.com/menu>.
  1. Envie a requisição.
  1. Verifique a resposta.

- **Dados:** Nenhum
- **Resultado Esperado:** Status 200 OK, e a resposta contém uma lista de itens em JSON (ex.: `{ "items": ["Café Expresso", "Sanduíche Natural"] }`).
- **Status:** _Passou_ ✅ - Itens listados conforme esperado.
- **Captura de Tela**:
  ![Captura de tela de erro](/projects/api-tests/screenshots/ct_api_001_success.png)

## Caso de Teste 2: Busca com Parâmetro Inválido no Endpoint /menu

- **ID:** CT_API_002
- **Título:** Validar erro ao enviar parâmetro inválido no endpoint /menu
- **Pré-condições:** A API do Example Cafe está acessível, e o Postman está configurado.
- **Passos:**

  1. Configure uma requisição GET para <https://api.examplecafe.com/menu?category=invalid123>.
  1. Envie a requisição.
  1. Verifique a resposta.

- **Dados:** Parâmetro: category=invalid123
- **Resultado Esperado:** Status 400 Bad Request, com mensagem de erro em JSON (ex.: `{ "error": "Categoria inválida. Use 'bebidas' ou 'comidas'." }`).
- **Status:** _Passou_ ✅ - Status e mensagem aparecem conforme esperado.
- **Captura de Tela**:
  ![Captura de tela de erro](/projects/api-tests/screenshots/ct_api_002_invalid_param.png)

## Caso de Teste 3: Criar Reserva com Dados Válidos

- **ID:** CT_API_003
- **Título:** Validar criação de reserva com dados válidos no endpoint /reservations
- **Pré-condições:** A API do Example Cafe está acessível, e o Postman está configurado.
- **Passos:**

  1. Configure uma requisição POST para <https://api.examplecafe.com/reservations>.
  1. Adicione o corpo da requisição em JSON:

     ```json
     {
       "name": "Ana Silva",
       "email": "ana.silva@email.com",
       "date": "2025-06-15",
       "time": "19:00",
       "guests": 4
     }
     ```

  1. Envie a requisição.
  1. Verifique a resposta.

- **Dados:** Nome: Ana Silva, E-mail: <ana.silva@email.com>, Data: 2025-06-15, Hora: 19:00, Convidados: 4
- **Resultado Esperado:** Status 201 Created, com resposta em JSON confirmando a reserva (ex.: `{ "message": "Reserva criada com sucesso", "reservationId": "12345" }`).
- **Status:** _Passou_ ✅ - Status e mensagem aparecem conforme esperado.
- **Captura de Tela**:
  ![Captura de tela de erro](/projects/api-tests/screenshots/ct_api_003_reservation_created.png)

## Caso de Teste 4: Criar Reserva com E-mail Inválido

- **ID:** CT_API_004
- **Título:** Validar erro ao criar reserva com e-mail inválido no endpoint /reservations
- **Pré-condições:** A API do Example Cafe está acessível, e o Postman está configurado.
- **Passos:**

  1. Configure uma requisição POST para <https://api.examplecafe.com/reservations>.
  1. Adicione o corpo da requisição em JSON:

     ```json
     {
       "name": "João Souza",
       "email": "joao.invalid",
       "date": "2025-06-15",
       "time": "19:00",
       "guests": 4
     }
     ```

  1. Envie a requisição.
  1. Verifique a resposta.

- **Dados:** Nome: João Souza, E-mail: joao.invalid, Data: 2025-06-15, Hora: 19:00, Convidados: 4
- **Resultado Esperado:** Status 400 Bad Request, com mensagem de erro em JSON (ex.: `{ "error": "E-mail inválido. Forneça um endereço de e-mail válido." }`).
- **Status:** _Passou_ ✅ - Status e mensagem aparecem conforme esperado.
- **Captura de Tela**:
  ![Captura de tela de erro](/projects/api-tests/screenshots/ct_api_004_invalid_email.png)

## Caso de Teste 5: Acessar Endpoint Inexistente

- **ID:** CT_API_005
- **Título:** Validar erro ao acessar um endpoint inexistente
- **Pré-condições:** A API do Example Cafe está acessível, e o Postman está configurado.
- **Passos:**

  1. Configure uma requisição GET para <https://api.examplecafe.com/invalid-endpoint>.
  1. Envie a requisição.
  1. Verifique a resposta.

- **Dados:** Nenhum
- **Resultado Esperado:** Status 404 Not Found, com mensagem de erro em JSON (ex.: `{ "error": "Endpoint não encontrado." }`).
- **Status:** _Passou_ ✅ - Status e mensagem aparecem conforme esperado.
- **Captura de Tela**:
  ![Captura de tela de erro](/projects/api-tests/screenshots/ct_api_005_not_found.png)
