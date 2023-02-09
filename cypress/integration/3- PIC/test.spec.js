import { expect } from "chai";

describe('alura busca cursos',() => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })
it('verifica mensagem validacao', () => {
    cy.contains ('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required').should('be.visible');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'User name is required').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required').should('be.visible');
    cy.contains('ap-vmessage', 'Full name is required').should('be.visible');
})

it('verifica mensagem de email invalido', () => {
    cy.contains ('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type('jacqueline');
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    
})

it('verifica mensagem de senha com menos de 8 caracteres', () => {
    cy.contains ('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="password"]').type('123');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');


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

it.only('fazer login de usuario valido', () => {
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').click();
        cy.get('img[alt="Visão pela janela"]').click();
        cy.get('textarea[class="form-control ng-untouched ng-pristine ng-valid"')
        .click()
        .type('teste123');
        cy.get('button[class="btn btn-primary pull-left"').click();
        
    })
        
    })
