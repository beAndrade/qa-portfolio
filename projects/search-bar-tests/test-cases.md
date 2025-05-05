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

## Caso de Teste 3: Busca com Caracteres Especiais

- **ID**: CT_Busca_003
- **Título**: Validar tratamento de caracteres especiais no campo de busca
- **Pré-condições**: O usuário está na página inicial do site Example Cafe com a barra de busca visível.
- **Passos**:
  1. Insira "@#$%" no campo de busca.
  1. Clique no botão de busca (ou pressione Enter).
- **Dados**: Termo: [@#$%]
- **Resultado Esperado**: Uma mensagem de erro aparece: “A busca deve conter apenas letras, números ou espaços.” Alternativamente, o sistema ignora os caracteres especiais e retorna resultados válidos, se aplicável.
- **Status**: _Passou_ ✅ - Mensagem de erro aparece como esperado.

## Caso de Teste 4: Busca com Termo Inexistente

- **ID**: CT_Busca_004
- **Título**: Validar resposta para termo não encontrado
- **Pré-condições**: O usuário está na página inicial do site Example Cafe com a barra de busca visível.
- **Passos**:
  1. Insira "xyz123" no campo de busca.
  1. Clique no botão de busca (ou pressione Enter).
- **Dados**: Termo: [xyz123]
- **Resultado Esperado**: Uma mensagem aparece: “Nenhum resultado encontrado para ‘xyz123’.”
- **Status**: _Passou_ ✅ - Mensagem aparece como esperado.

## Caso de Teste 5: Responsividade da Barra de Busca em Dispositivos Móveis

- **ID**: CT_Busca_005
- **Título**: Validar usabilidade da barra de busca em dispositivos móveis
- **Pré-condições**: O usuário está na página inicial do site Example Cafe usando um navegador móvel (ex.: Chrome em uma tela de 360x640px) ou simulando um viewport móvel via Ferramentas de Desenvolvedor.
- **Passos**:
  1. Acesse a página inicial em um dispositivo móvel ou viewport simulado.
  1. Verifique se a barra de busca e o botão de busca estão visíveis e acessíveis.
  1. Insira "sanduíche" no campo de busca.
  1. Clique no botão de busca (ou pressione Enter).
- **Dados**: Termo: [sanduíche]
- **Resultado Esperado**: A barra de busca está totalmente visível, bem alinhada, e os resultados são exibidos corretamente, como em CT_Busca_001. O campo de busca e o botão são facilmente clicáveis em uma tela pequena.
- **Status**: _Passou_ ✅ - Tudo funciona como esperado.
