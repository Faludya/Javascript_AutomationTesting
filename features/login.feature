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
