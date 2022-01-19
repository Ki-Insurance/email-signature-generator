# Users should have a warm welcome when loading the website

We think that it makes sense for the user to see a very big, warm welcome when they load up the website.

```gherkin
GIVEN I am an employee at KI
WHEN I load the site
THEN I see a large, warm welcome - putting me at ease
```

_Hint:_ You can have a look at `App.test.tsx` for a clue on what a test that checks for the presence of some text might look like.
