# Users should be able to add their name to their email signature

We think that it makes sense for the user to be able to add their name to their email signature.

```gherkin
GIVEN I am an employee at KI
WHEN I put my name into the application
THEN I should see my name on screen 
```

_Hint:_ Please use [user-event](https://testing-library.com/docs/ecosystem-user-event) for typing into the form in the tests.
