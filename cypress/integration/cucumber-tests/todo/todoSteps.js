import {Given, Then, When} from "cypress-cucumber-preprocessor/steps"

Given('I am on the todo app', () => {
    cy.visit('http://127.0.0.1:8888/#/')
})

When('I add a new task', () => {
    cy.get('.new-todo').clear()
    cy.get('.new-todo').type("Buy some eggs! {enter}")

})

Then('the new task should be on the list', () => {
    cy.get('.view').contains('Buy some eggs!')
})
