import { expect } from "chai";

describe('Usabilidade tela inicial',() => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })


it('verifica mensagem de user name é necessário', () => {
    cy.contains ('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="userName"]');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');

})

it('verifica mensagem nome com letra maiuscula', () => {
    cy.contains ('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="userName"]').type('Igor');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');

})   

});
