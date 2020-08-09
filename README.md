# Cypress Demo

This is a quick demo built against the todo app found here: http://todomvc.com/examples/react/#/

If you are testing a local instance of the app then: 

* To start the webserver

```npm run start  ```

* To see the tests:

```npm run cy:open```

* To run from the command line 

```npm run cy:tests```

To run the docker version:

* Build and run the tests

```docker build -t cypress .```

Note the docker version runs against a live server
