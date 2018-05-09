## Things we need to install

* `brew install watchman`
* Setup `.env.local`, check template for config.
* * we're using relative paths set from `src/` so **your local paths may not work without this**

## What does this APP do?

* provides an authenticated frontend to a nodejs server that will create authentication tokens for a user on:
* * signin (retrieving an existing account)
* * signup (creating a single use token for immediate login)
* then just to prove everything works as expected the user has access to a protected route for listing some sort of campaigns. It's nothing fancy.
