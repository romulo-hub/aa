/// <reference types="cypress" />


import nopCommerce from "../nopCommerce/index"

describe('Fazer login no site nopCommerce', () => {
it('Procurar por um produto em especifico', () => {

cy.viewport('macbook-16')

nopCommerce.login()
nopCommerce.Eletronicos()


})


})