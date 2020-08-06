Feature: I create a new todo task

  As a forgetful person
  I want to add a task to my todo list
  So I do it when I get time

  Scenario: Add a task to my todo list
    Given I am on the todo app
    When I add a new task
    Then the new task should be on the list
