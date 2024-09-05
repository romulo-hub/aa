/// <reference types="cypress" />


const el = require('./elements').ELEMENTS


class nopCommerce{
login(){
cy.visit(el.visit)
cy.get(el.botao1).click()
cy.get(el.botao2).type('romulo@gmail.com')
cy.get(el.botao3).type('cristiver10')
cy.get(el.botao4).click()

}

Eletronicos(){
cy.get(el.botao5).click()
cy.get(el.botao6).click()
cy.get(el.botao7).contains('Nikon D5500 DSLR').should('be.visible').click()
cy.get(el.botao7).contains('Nikon D5500 DSLR - Black').should('be.visible')
cy.wait(1000)
cy.get(el.botao8).click()
cy.get(el.botao9).contains('The product has been added to your shopping cart').should('be.visible')
cy.get(el.botao10).click()
cy.get(el.botao11).click()
cy.wait(1000)
cy.get(el.botao12).click({force:true})
cy.get(el.botao13).contains('Your Shopping Cart is empty!').should('be.visible')

}

}

export default new nopCommerce()