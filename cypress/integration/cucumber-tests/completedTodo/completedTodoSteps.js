import {Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import todoPage from "../todo/todoPage";

Given('I have a task to do', () => {
    todoPage.visitTodo()
    cy.get('.new-todo').clear()
    cy.get('.new-todo').type("Buy some eggs! {enter}")
})

When('I complete the task', () => {
    cy.get('.toggle').first().click()
})

When('I clear all completed task', () => {
    cy.get('.clear-completed').should('be.visible').click()
})

Then('I shouldnt have the task on the todo list', () => {
    cy.get('.clear_completed').should('not.be.visible')
})
