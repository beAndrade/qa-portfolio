# Casos de Teste para Barra de Busca - Example Cafe

## Caso de Teste 1: Busca com Termo Válido

- **ID**: CT_Busca_001
- **Título**: Validar resultados para busca com termo válido
- **Pré-condições**: O usuário está na página inicial com a barra de busca.
- **Passos**:
  1. Insira "café" no campo de busca.
  2. Clique no botão de busca.
- **Dados**:
  - Termo: café
- **Resultado Esperado**: Resultados relevantes contendo “café” são exibidos.
- **Status**: _Passou_ ✅ - Resultados relevantes aparecem como esperado.

## Caso de Teste 2: Busca com Campo Vazio

- **ID**: CT_Busca_002
- **Título**: Validar mensagem de erro para busca vazia
- **Pré-condições**: O usuário está na página inicial com a barra de busca.
- **Passos**:
  1. Deixe o campo de busca vazio.
  2. Clique no botão de busca.
- **Dados**: Termo: [vazio]
- **Resultado Esperado**: Uma mensagem de erro aparece: “Por favor, insira um termo de busca.”
- **Status**: _Falhou_ ❌ - A página atualiza sem fornecer a mensagem esperada.
