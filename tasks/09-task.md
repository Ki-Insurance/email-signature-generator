# Loading states

We think that it makes sense to move this logic to a backend service.

There is already a mock API running, and you can find an endpoint `/api/generate-signature` setup in `<rootDir>/mocks/handlers.ts`.

Once the user is done filling in the fields, we'd like to see it work in this way:
- User hits submit
- Frontend sends a request to the mock API with the form details
- Frontend handles the loading state whilst it waits for the response
- Backend crunches the logic and sends back a standardised signature
- Frontend receives the response and renders out the signature

_Hint:_ You can use any tools / dependencies you wish to acheive this!