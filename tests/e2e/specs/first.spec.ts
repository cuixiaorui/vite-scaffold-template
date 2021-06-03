describe('first', () => {
  it('one', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('get user').click()
  })
})
