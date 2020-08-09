import {Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import todoPage from "./todoPage";
const TODO_LIST = ["Buy some eggs!", "Tidy the kitchen", "Mow the grass"]

Given('I am on the todo app', () => {
    cy.viewport('iphone-x')
    todoPage.visitTodo()
})

When('I add a new task', () => {
    todoPage.addTask()

})

Then('the new task should be on the list', () => {
    cy.get('.view').contains('Buy some eggs!')
})

Then('I add multiple new tasks', () => {
    todoPage.addTasks(TODO_LIST)
})
