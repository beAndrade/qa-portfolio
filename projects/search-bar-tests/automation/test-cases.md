# Casos de Teste Automatizados para Barra de Busca - Example Cafe

> **Nota**: "Estes cenários de teste automatizados com Cypress demonstram minha capacidade de combinar QA com automação, verificando funcionalidade, usabilidade e tratamento de erros. Meu conhecimento em front-end foi aplicado para criar asserções visuais e comportamentais precisas."

## Caso de Teste 1: Busca com Termo Válido (Automação)

- **ID**: CT_Busca_Auto_001
- **Título**: Validar resultados para busca com termo válido usando Cypress
- **Pré-condições**: O site Example Cafe (<www.examplecafe.com>) está acessível, e o Cypress está configurado com o ambiente de teste.
- **Passos**:
  1. Visite a página inicial (<www.examplecafe.com>).
  1. Insira "café" no campo de busca (seletor: `[data-cy="search-input"]`).
  1. Clique no botão de busca (seletor: `[data-cy="search-button"]`).
  1. Verifique se os resultados são exibidos.
- **Dados**:
  - Termo: café
- **Resultado Esperado**: O Cypress confirma que a lista de resultados (seletor: `[data-cy="search-results"]`) contém itens como “Café Expresso” e “Café com Leite” usando a asserção `.should('contain', 'Café Expresso')`.
- **Status**: _Passou_ ✅ - Resultados relevantes aparecem como esperado.

## Caso de Teste 2: Busca com Campo Vazio (Automação)

- **ID**: CT_Busca_Auto_002
- **Título**: Validar mensagem de erro para busca vazia usando Cypress
- **Pré-condições**: O site Example Cafe está acessível, e o Cypress está configurado.
- **Passos**:
  1. Visite a página inicial.
  1. Deixe o campo de busca vazio.
  1. Clique no botão de busca.
  1. Verifique se a mensagem de erro é exibida.
- **Dados**: Termo: [vazio]
- **Resultado Esperado**: O Cypress confirma que uma mensagem de erro (seletor: `[data-cy="error-message"]`) aparece com o texto “Por favor, insira um termo de busca” usando `.should('have.text', 'Por favor, insira um termo de busca')`.
- **Status**: _Passou_ ✅ - A página atualiza sem fornecer a mensagem esperada.

## Caso de Teste 3: Busca com Caracteres Especiais (Automação)

- **ID**: CT_Busca_Auto_003
- **Título**: Validar tratamento de caracteres especiais no campo de busca usando Cypress
- **Pré-condições**: O site Example Cafe está acessível, e o Cypress está configurado.
- **Passos**:
  1. Visite a página inicial.
  1. Insira "@#$%" no campo de busca.
  1. Clique no botão de busca (ou pressione Enter).
  1. Verifique a resposta do sistema.
- **Dados**: Termo: [@#$%]
- **Resultado Esperado**: O Cypress confirma que uma mensagem de erro (seletor: `[data-cy="error-message"]`) aparece com o texto “A busca deve conter apenas letras, números ou espaços” usando `.should('have.text', 'A busca deve conter apenas letras, números ou espaços')`. Alternativamente, verifica se os caracteres especiais são ignorados e resultados válidos são exibidos.
- **Status**: _Passou_ ✅ - Mensagem de erro aparece como esperado.

## Caso de Teste 4: Busca com Termo Inexistente (Automação)

- **ID**: CT_Busca_Auto_004
- **Título**: Validar resposta para termo não encontrado usando Cypress
- **Pré-condições**: O site Example Cafe está acessível, e o Cypress está configurado.
- **Passos**:
  1. Visite a página inicial.
  1. Insira "xyz123" no campo de busca.
  1. Clique no botão de busca (ou pressione Enter).
  1. Verifique a mensagem de resultado.
- **Dados**: Termo: [xyz123]
- **Resultado Esperado**: O Cypress confirma que uma mensagem (seletor: `[data-cy="no-results"]`) aparece com o texto “Nenhum resultado encontrado para ‘xyz123’” usando `.should('have.text', 'Nenhum resultado encontrado para ‘xyz123’')`.
- **Status**: _Passou_ ✅ - Mensagem aparece como esperado.

## Caso de Teste 5: Responsividade da Barra de Busca em Dispositivos Móveis (Automação)

- **ID**: CT_Busca_Auto_005
- **Título**: Validar usabilidade da barra de busca em dispositivos móveis usando Cypress
- **Pré-condições**: O site Example Cafe está acessível, e o Cypress está configurado com um viewport móvel (ex.: 360x640px).
- **Passos**:
  1. Configure o viewport para 360x640px no Cypress.
  1. Visite a página inicial.
  1. Verifique se a barra de busca e o botão de busca estão visíveis e acessíveis.
  1. Insira "sanduíche" no campo de busca.
  1. Clique no botão de busca (ou pressione Enter).
  1. Verifique os resultados.
- **Dados**: Termo: [sanduíche]
- **Resultado Esperado**: O Cypress confirma que a barra de busca (seletor: `[data-cy="search-input"]`) e o botão (seletor: `[data-cy="search-button"]`) estão visíveis usando `.should('be.visible')`. Os resultados contêm “Sanduíche Natural” usando `.should('contain', 'Sanduíche Natural')`.
- **Status**: _Passou_ ✅ - Tudo funciona como esperado.
