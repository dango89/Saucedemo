/// <reference types="cypress" />
import examples from '../fixtures/example.json'

function login(selector1,selector2,seledtor3,user,pass){
  cy.get(selector1).type(user);
  cy.get(selector2).type(pass);
  cy.get(seledtor3).click()
}

describe('Saucedemo Page', () => {
  before(()=> {
    cy.visit(examples.data.url)
  })
  it('Flujo', () => {
    login(examples.selectores.username,examples.selectores.pass,examples.selectores.login_button, examples.data.usuario, examples.data.contraseña)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('.shopping_cart_link').click()
    cy.wait(2000)
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
    cy.wait(2000)
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Daniel')
    cy.get('[data-test="lastName"]').type('Gonzalez')
    cy.get('[data-test="continue"]').click()
    cy.contains('[data-test="error"]', 'Error: Postal Code is required')
    cy.get('[data-test="postalCode"]').type('13270')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.contains('.complete-header', 'THANK YOU FOR YOUR ORDER')

  })
})