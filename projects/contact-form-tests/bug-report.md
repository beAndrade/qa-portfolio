# Relatório de Bugs - Formulário de Contato

> _**Nota**: Este relatório de bugs documenta um problema encontrado durante testes manuais do formulário de contato do Example Cafe, destacando minha capacidade de identificar e comunicar problemas de interface, apoiada pelo meu conhecimento em front-end._

## Bug 1: Ausência de Mensagem de Erro para Campo Nome Vazio

- **Caso de Teste**: CT_Contato_002
- **Descrição**: O formulário de contato permite o envio quando o campo Nome está vazio, sem exibir uma mensagem de erro, o que viola o requisito de que todos os campos são obrigatórios.
- **Passos para Reproduzir**:
  1. Acesse a página do formulário de contato (<www.examplecafe.com/contact>).
  1. Deixe o campo Nome vazio.
  1. Insira um e-mail válido (ex.: "<ana.silva@email.com>") no campo E-mail.
  1. Insira uma mensagem válida (ex.: "Eu gostaria de reservar uma mesa para 4 nesta fim de semana.") no campo Mensagem.
  1. Clique no botão Enviar.
- **Resultado Obtido**: O formulário é enviado com sucesso, e uma mensagem de sucesso aparece: “Obrigado pela sua mensagem! Entraremos em contato em breve.”
- **Resultado Esperado**: Uma mensagem de erro deveria aparecer abaixo do campo Nome: “O campo Nome é obrigatório,” e o formulário não deveria ser enviado.
- **Severidade**: Média (os usuários podem contornar a validação, mas o problema não causa perda de dados ou falha do sistema).
- **Ambiente**:
  - Navegador: Chrome (Versão 126.0.6478.127)
  - Dispositivo: Desktop (Windows 11, resolução 1920x1080)
  - URL: <www.examplecafe.com/contact>
- **Captura de Tela**:
  ![Captura de tela de erro](/projects/contact-form-tests/screenshots/bug-CT_002.png)

  > _**Legenda**: "A captura de tela mostra o formulário enviado com o campo Nome vazio, sem exibir mensagem de erro, evidenciando o problema de validação."_

- **Notas Adicionais**:
  - Testado no Firefox (Versão 128.0) com o mesmo resultado, indicando um problema em múltiplos navegadores.
  - Usando as Ferramentas de Desenvolvedor do navegador, observei que não há validação JavaScript acionada para o campo Nome, sugerindo um erro de implementação no front-end.
  - Esse bug impacta a experiência do usuário ao permitir envios incompletos, o que pode levar a dados inválidos no backend.

## Bug 2: Ausência de Mensagem de Erro para E-mail Inválido

- **Caso de Teste**: CT_Contato_003
- **Descrição**: O formulário aceita um e-mail inválido ("joao@invalid") sem exibir uma mensagem de erro.
- **Passos para Reproduzir**:
  1. Acesse a página do formulário de contato (<www.examplecafe.com/contact>).
  2. Insira "João Souza" no campo Nome.
  3. Insira "joao@invalid" no campo E-mail.
  4. Insira "Você pode compartilhar o menu?" no campo Mensagem.
  5. Clique no botão Enviar.
- **Resultado Obtido**: O formulário é enviado com sucesso, exibindo: “Obrigado pela sua mensagem!”
- **Resultado Esperado**: Uma mensagem de erro aparece: “Por favor, insira um endereço de e-mail válido.”
- **Severidade**: Média
- **Ambiente**:
  - Navegador: Chrome (Versão 126.0.6478.127)
  - Dispositivo: Desktop (Windows 11, resolução 1920x1080)
  - URL: <www.examplecafe.com/contact>
- **Captura de Tela**:
  ![Captura de Tela de E-mail Inválido](/projects/contact-form-tests/screenshots/bug-CT_003.png)

  > **Legenda**: "A captura mostra o formulário enviado com e-mail inválido, sem mensagem de erro."

- **Notas Adicionais**:
  - O problema foi reproduzido no Edge, sugerindo uma falha geral na validação de e-mail.
  - A ausência de validação pode permitir dados incorretos no backend.

## Bug 3: Ausência de Mensagem de Erro para Mensagem com Mais de 500 Caracteres

- **Caso de Teste**: CT_Contato_004
- **Descrição**: O formulário de contato permite o envio de uma mensagem com mais de 500 caracteres sem exibir uma mensagem de erro, violando o requisito de limite máximo de caracteres.
- **Passos para Reproduzir**:
  1. Acesse a página do formulário de contato (<www.examplecafe.com/contact>).
  2. Insira "Maria Lima" no campo Nome.
  3. Insira "<maria.lima@email.com>" no campo E-mail.
  4. Insira uma mensagem com 501 caracteres (ex.: repetir “Mensagem de teste ” até exceder 500 caracteres).
  5. Clique no botão Enviar.
- **Resultado Obtido**: O formulário é enviado com sucesso, exibindo: “Obrigado pela sua mensagem! Entraremos em contato em breve.”
- **Resultado Esperado**: Uma mensagem de erro deveria aparecer abaixo do campo Mensagem: “A mensagem não pode exceder 500 caracteres,” e o formulário não deveria ser enviado.
- **Severidade**: Média (permite entrada de dados fora do limite, mas não causa falha crítica no sistema).
- **Ambiente**:
  - Navegador: Chrome (Versão 126.0.6478.127)
  - Dispositivo: Desktop (Windows 11, resolução 1920x1080)
  - URL: <www.examplecafe.com/contact>
- **Captura de Tela**:
  ![Captura de Tela de Mensagem Longa](/projects/contact-form-tests/screenshots/bug-CT_004.png)

  > **Legenda**: "A captura mostra o formulário enviado com uma mensagem de 501 caracteres, sem exibir mensagem de erro, evidenciando a falha na validação."

- **Notas Adicionais**:
  - O problema foi reproduzido no Firefox (Versão 128.0), confirmando uma falha consistente em múltiplos navegadores.
  - Usando as Ferramentas de Desenvolvedor, notei que o campo Mensagem não possui validação de comprimento no front-end, permitindo a submissão de textos longos.
  - Esse bug pode sobrecarregar o backend com dados excessivos, impactando a integridade dos dados armazenados.
