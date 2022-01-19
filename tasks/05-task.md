# Users should be able to add their telephone numbers to their email signature

We think that it makes sense for the user to be able to add their telephone numbers to their email signature.

We need to be able to add multiple numbers:
    - Work
    - Mobile
    - Teams

Please validate that the values the user is putting in is a valid telephone number, and ensure you show the appropriate keyboard on mobile.

```gherkin
GIVEN I am an employee at KI
WHEN I put my work phone number into the application
THEN I should see my work phone number in my email signature
```
