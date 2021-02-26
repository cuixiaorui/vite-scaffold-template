describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('http://localhost:5000/')
    cy.get('button').click()
  })
})
