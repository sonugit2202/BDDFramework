Feature: Ecommerce page shopping end to end

    @Regression
    Scenario: End to End Product purchasing and placing order
    Given  user is on login page and do login with "sonuratish22@gmail.com" and "Sonu@2202"
    When  Add "ZARA COAT 3" to the Cart
    Then  Verify "ZARA COAT 3" is added successfully into Cart
    When  Enter all the purchase details and select "India" and click on place order
    Then  Verify order is present inside order history page

    # @Validation
    # Scenario Outline: LoginPageError check

    # Given user to be on the loginpage and enter "<username>" and "<password>"
    # Then Verify error message is displaying properly

    # Examples:
    #     | username                | password  |
    #     | sonuratish22@gmail.com  | Sonu@2202 |
    #     | sonugit2202@gmail.com   | Sonu@2202 |
