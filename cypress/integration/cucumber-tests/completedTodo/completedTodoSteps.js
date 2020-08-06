import {Given, Then, When} from "cypress-cucumber-preprocessor/steps"

Given('I have a task to do', () => {
    cy.visit('http://127.0.0.1:8888/#/')
    cy.get('.new-todo').clear()
    cy.get('.new-todo').type("Buy some eggs! {enter}")
})

When('I complete the task', () => {
    cy.get('.toggle').first().click()
})

When('I clear all completed task', () => {
    cy.get('.clear-completed').should('be.visible').click()
})

Then('I shouldn\'t have the task on the todo list', () => {
    cy.get('.clear_completed').should('not.be.visible')
})
