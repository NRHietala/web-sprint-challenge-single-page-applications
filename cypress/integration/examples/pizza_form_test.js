describe('Nates pizza palace form', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001")
    // could only find by text content
    cy.contains('Ready To Dine Like Royalty?').click()

  })

  // make some handles here
  const nameInput = () => cy.get('#name')
  const sizeInput = () => cy.get('#size')
  const selectCheese = () => cy.get('#cheese')
  const selectHam = () => cy.get('#ham')
  const selectPineapple = () => cy.get('#pineapple')
  const selectChicken = () => cy.get('#chicken')

  it("Sanity Check", () => {
    expect(2+2).to.equal(4)
  })
  it('Check if text can be input', () => {

    //rerenders stopping from inputting more than 1 char
    nameInput()
    .type('TEST NAME')
    .should('have.value', 'TEST NAME')
    .clear()

  })

  it('Check if multiple toppings can be selected', () => {


  })

  it('Check that we can submit form', () => {


  })
})