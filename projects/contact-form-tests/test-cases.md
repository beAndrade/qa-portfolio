# Casos de teste para Contact Form - Example Cafe

## Caso de Teste 1: Enviar formulário com entradas válidas

- **ID**: CT_Contato_001
- **Título**: Validar o envio bem-sucedido do formulário com entradas válidas.
- **Pré-condições**: Usuário está na página do formulário.
- **Passos**:
  1. Digitar "Ana Silva" no campo de Nome.
  2. Digitar "<ana.silva@email.com>" no campo de Email.
  3. Digitar "Eu gostaria de reservar uma mesa para 4 pessoas neste final de semana." no campo de Mensagem.
  4. Clicar no botão de Enviar.
- **Dados**: Nome: Ana Silva, Email: <ana.silva@email.com>, Mensagem: Eu gostaria de reservar uma mesa para 4 pessoas neste final de semana.
- **Resultado Esperado**: Uma mensagem de sucesso aparece: “Obrigado pela sua mensagem! Entraremos em contato em breve.”
- **Status**: [Preencher após o teste]

## Caso de Teste 2: Envio de Formulário com Campo Nome Vazio

- **ID**: CT_Contato_002
- **Título**: Validar mensagem de erro para campo Nome vazio
- **Pré-condições**: O usuário está na página do formulário de contato.
- **Passos**:
  1. Deixe o campo Nome vazio.
  2. Insira "<ana.silva@email.com>" no campo E-mail.
  3. Insira "Por favor, entre em contato sobre catering." no campo Mensagem.
  4. Clique no botão Enviar.
  - **Dados**:
    - Nome: [vazio],
    - E-mail: <ana.silva@email.com>,
    - Mensagem: Por favor, entre em contato sobre catering.
- **Resultado Esperado**: Uma mensagem de erro aparece: “O campo Nome é obrigatório.”
- **Status**: _Reprovado_ ❌

## Caso de Teste 3: Envio de Formulário com E-mail Inválido

- **ID**: CT_Contato_003
- **Título**: Validar mensagem de erro para formato de E-mail inválido
- **Pré-condições**: O usuário está na página do formulário de contato.
- **Passos**:
  1. Insira "João Souza" no campo Nome.
  1. Insira "joao@invalid" no campo E-mail.
  1. Insira "Você pode compartilhar o menu?" no campo Mensagem.
  1. Clique no botão Enviar.
  - **Dados**:
    - Nome: João Souza,
    - E-mail: joao@invalid,
    - Mensagem: Você pode compartilhar o menu?
- **Resultado** Esperado: Uma mensagem de erro aparece: “Por favor, insira um endereço de e-mail válido.”
- **Status**: [A ser preenchido após o teste]

## Caso de Teste 4: Envio de Formulário com Mensagem Excedendo Limite de Caracteres

- **ID**: CT_Contato_004
- **Título**: Validar erro para mensagem com mais de 500 caracteres
- **Pré-condições**: O usuário está na página do formulário de contato.
- **Passos**:
  1. Insira "Maria Lima" no campo Nome.
  1. Insira "<maria.lima@email.com>" no campo E-mail.
  1. Insira uma mensagem com 501 caracteres (ex.: repetir “Mensagem de teste ” até exceder 500 caracteres).
  1. Clique no botão Enviar.
  - **Dados**:
    - Nome: Maria Lima,
    - E-mail: <maria.lima@email.com>,
    - Mensagem: [texto com 501 caracteres]
- **Resultado Esperado**: Uma mensagem de erro aparece: “A mensagem não pode exceder 500 caracteres.”
- **Status**: [A ser preenchido após o teste]

## Caso de Teste 5: Teste de Usabilidade do Botão Enviar com Campos Vazios

- **ID**: CT_Contato_005
- **Título**: Validar estado do botão Enviar quando todos os campos estão vazios
- **Pré-condições**: O usuário está na página do formulário de contato.
- **Passos**:
  1. Deixe todos os campos (Nome, E-mail, Mensagem) vazios.
  1. Observe o estado do botão Enviar ou tente clicar nele.
  - **Dados**:
    - Nenhum
- **Resultado Esperado**: O botão Enviar está desabilitado (cinza) ou, ao clicar, exibe: “Por favor, preencha todos os campos obrigatórios.”
  Status: [A ser preenchido após o teste]

## Caso de Teste 6: Teste de Responsividade em Dispositivos Móveis

> _**Nota**: Este teste utiliza meu conhecimento em front-end para garantir que o formulário seja amigável em dispositivos móveis, um aspecto crítico de aplicações web modernas._

- **ID**: CT_Contato_006
- **Título**: Validar responsividade do formulário de contato em dispositivos móveis
- **Pré-condições**: O usuário está na página do formulário de contato usando um navegador móvel (ex.: Chrome em uma tela de 360x640px).
- **Passos**:
  1. Acesse o formulário de contato em um dispositivo móvel ou use as Ferramentas de Desenvolvedor para simular um viewport móvel.
  1. Verifique se todos os campos e o botão Enviar estão visíveis e acessíveis.
  1. Preencha todos os campos.
     1. Insira "Lucas Costa" no campo Nome,
     2. "<lucas.costa@email.com>" no campo E-mail,
     3. "Ótimo café!" no campo Mensagem.
  1. Clique no botão Enviar.
  - **Dados**:
    - Nome: Lucas Costa,
    - E-mail: <lucas.costa@email.com>,
    - Mensagem: Ótimo café!
- **Resultado Esperado**: O formulário está totalmente visível, os campos estão devidamente alinhados, e o envio funciona como no TC_Contact_001.
- **Status**: [A ser preenchido após o teste]
