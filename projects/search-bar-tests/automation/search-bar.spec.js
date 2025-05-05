describe('Testes Automatizados da Barra de Busca - Example Cafe', () => {
  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    cy.visit('https://www.examplecafe.com');
  });

  it('CT_Busca_Auto_001: Busca com termo válido', () => {
    cy.get('[data-cy="search-input"]').type('café');
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="search-results"]').should('contain', 'Café Expresso');
    cy.get('[data-cy="search-results"]').should('contain', 'Café com Leite');
  });

  it('CT_Busca_Auto_002: Busca com campo vazio', () => {
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="error-message"]').should(
      'have.text',
      'Por favor, insira um termo de busca'
    );
  });

  it('CT_Busca_Auto_003: Busca com caracteres especiais', () => {
    cy.get('[data-cy="search-input"]').type('@#$%');
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="error-message"]').should(
      'have.text',
      'A busca deve conter apenas letras, números ou espaços'
    );
  });

  it('CT_Busca_Auto_004: Busca com termo inexistente', () => {
    cy.get('[data-cy="search-input"]').type('xyz123');
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="no-results"]').should(
      'have.text',
      'Nenhum resultado encontrado para ‘xyz123’'
    );
  });

  it('CT_Busca_Auto_005: Responsividade em dispositivos móveis', () => {
    // Configura viewport para dispositivo móvel
    cy.viewport(360, 640);
    cy.get('[data-cy="search-input"]').should('be.visible');
    cy.get('[data-cy="search-button"]').should('be.visible');
    cy.get('[data-cy="search-input"]').type('sanduíche');
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="search-results"]').should('contain', 'Sanduíche Natural');
  });
});
