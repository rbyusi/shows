
## Description

From the list of shows in the request payload, return the ones with DRM enabled (drm: true) and at least one episode (episodeCount > 0).

The returned JSON should have a response key with an array of shows. Each element should have the following fields from the request:

```code
image - corresponding to image/showImage from the request payload
slug
title
```
## Links

- [Deployed in Heroku](https://code-challenge-for-nine.herokuapp.com/ "Live View")

## Pre-requisites

You should have node install in order to run the commands below. Check out [Nodejs](https://nodejs.org/en/).

## Commands


```bash
npm install
```

After cloning this project from [github](https://github.com/rbyusi/shows.git), use 'install' in order to install the projects dependencies in your machine.

```bash
npm start
```

Reserved this for the project's production environment to use. Nothing special, just start the node app.

```bash
npm run dev
```

I am using 'cross-env' to run 'nodemon' and start the server. Part of the script is to explicitly set process.env to 'develoopment'.


```bash
npm test
```

The project using using MOCHA, Chai and Chai-http to test the end point. Running the command will run Nodemon to execute mocha.

## Logging

Morgan is used to log the calls being made with the api. The app checks the process.env to make sure to only run the loggin in development.

## Hitting the endpoint 

Use your tool api tool of choice i.e. [Postman](https://www.postman.com/downloads/). 

Create a POST request with a Body using a schema like the sample below:

```json
{
    "payload": [
        {
            "country": "UK",
            "description": "What's life like when you have enough children to field your own football team?",
            "drm": true,
            "episodeCount": 1,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#ff7800",
            "seasons": [
                {
                    "slug": "show/16kidsandcounting/season/1"
                }
            ],
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting",
            "tvChannel": "GEM"
        }
    ]
}
```

### Sample Response

```json
{
    "response": [
        {
            "image": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting"
        }
    ]
}
```


## Schema Validation using ajv

Made it simple by making sure that the needed properties ('drm','episodeCount') are the right types. 

sample response when the 'episodeCount' was sent a string instead of an integer

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

sample error when 'drm' is not a boolean

```json
[
    {
        "instancePath": "/payload/0/drm",
        "schemaPath": "#/properties/payload/items/properties/drm/type",
        "keyword": "type",
        "params": {
            "type": "boolean"
        },
        "message": "must be boolean"
    }
]
```


## Invalid Payload Error

If a post request was made using faulty json schema, the following error will be the app's response.

```json
{
    "error": "Could not decode request: JSON parsing failed"
}
```


## Built With

- JavaScript
- Node
- NPM
- Express