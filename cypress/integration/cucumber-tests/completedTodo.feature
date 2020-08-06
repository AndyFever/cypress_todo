Feature: Complete task

  As a organised person
  I want to complete a task I have completed
  So I don't have to worry about it

  Scenario: Complete a task

    Given I have a task to do
    When I complete the task
    And I clear all completed task
    Then I shouldn't have the task on the todo list
