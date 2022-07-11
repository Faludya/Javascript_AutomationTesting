Feature: I want to verify which users can login and what they see

  Scenario: I verify users can login
    Given I am on homepage
    When I login with standard_user and secret_sauce
    Then I should verify users arrived on website

  Scenario Outline: I verify users can login
    Given I am on homepage
    When I login with <username> and <password>
    Then I should verify users arrived on website

    Examples:
      |username                | password      |
      |problem_user            | secret_sauce  |
      |standard_user           | secret_sauce  |
      |performance_glitch_user | secret_sauce  |


  Scenario: I verify locked user login results in error
    Given I am on homepage
    When I login with locked_out_user and secret_sauce
    Then I should verify error message

  Scenario Outline: I verify locked user login results in error
    Given I am on homepage
    When I login with <username> and <password>
    Then I should verify error message

    Examples:
      |username                   | password      |
      |locked_out_user            | secret_sauce  |
