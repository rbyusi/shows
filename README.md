
## Links

- [Repo](https://github.com/rbyusi/<project-name> "<project-name> Repo")

- [Live](<Homepage url> "Live View")

- [Bugs](https://github.com/rbyusi/<project-name>/issues "Issues Page")

- [API](<API Link> "API")


### `npm start"`

Reserved this for the project's production environment to use. Nothing special, just start the node app.

### `"npm run test"`,

Launches the test runner in the interactive watch mode.

### `"npm run dev"`

I am using 'cross-env' to run 'nodemon' and start the server. Part of the script is to explicitly set process.env to 'develoopment'.

## Loging During development

Morgan is used to log the calls being made with the api. The app checks the process.env to make sure to only run the loggin in development.

## Schema Validation using ajv

Made it simple by making sure that the needed properties ('drm','episodeCount') are the right types. 

sample error when the 'episodeCount' was sent a string instead of an integer

```json
[
    {
        "instancePath": "/payload/0/episodeCount",
        "schemaPath": "#/properties/payload/items/properties/episodeCount/type",
        "keyword": "type",
        "params": {
            "type": "integer"
        },
        "message": "must be integer"
    }
]
```

## Built With

- JavaScript
- Node
- NPM
- Express