const url = 'http://127.0.0.1:8888/#/'
const TODO_BOX = '.new-todo'
const TODO_VIEW = '.view'
const CLEAR_TASK = '.clear-completed'

class todoPage {

    static visitTodo() {
        cy.visit('http://127.0.0.1:8888/#/')
    }

    static addTask() {
        cy.get(TODO_BOX).clear()
        cy.get(TODO_BOX).type("Buy some eggs! {enter}")
    }

    static addTasks(tasks) {
        for (const task of tasks) {
            cy.get(TODO_BOX).type(task)
            cy.get(TODO_BOX).type('{enter}')
        }
    }

    static completeTask(){
        cy.get(TODO_VIEW).should('be.visible').click()
    }
}


export default todoPage
