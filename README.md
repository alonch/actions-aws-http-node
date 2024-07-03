<!-- action-docs-header source="action.yml" -->

<!-- action-docs-header source="action.yml" -->
![Demo Status](https://github.com/alonch/actions-aws-http-node/actions/workflows/on-push.yml/badge.svg)
<!-- action-docs-description source="action.yml" -->
## Description

Provision a AWS function with http routing and extras 
* API docs with [Swagger](https://swagger.io/)
* Request and Response Schema validation with [malli](https://github.com/metosin/malli)
<!-- action-docs-description source="action.yml" --> 

<!-- action-docs-inputs source="action.yml" -->
## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `routes` | <p>HTTP routes and validations, <a href="#routing">docs</a></p> | `true` | `""` |
| `action` | <p>Desire outcome: apply, plan or destroy</p> | `false` | `apply` |
| `name` | <p>Function name</p> | `true` | `""` |
| `arm` | <p>Run in ARM compute</p> | `false` | `true` |
| `node-version` | <p>NodeJS version, Supported versions: 16, 18 and 20</p> | `false` | `20` |
| `memory` | <p>128 (in MB) to 10,240 (in MB)</p> | `false` | `128` |
| `env` | <p>List of environment variables in YML format</p> | `false` | `CREATE_BY: alonch/actions-aws-http-node ` |
| `permissions` | <p>List of permissions following Github standard of service: read or write. In YML format</p> | `false` | `""` |
| `artifacts` | <p>This folder will be zip and deploy to Lambda</p> | `false` | `""` |
| `timeout` | <p>Maximum time in seconds before aborting the execution</p> | `false` | `3` |
| `allow-public-access` | <p>Generate a public URL. WARNING: ANYONE ON THE INTERNET CAN RUN THIS FUNCTION</p> | `false` | `""` |
<!-- action-docs-inputs source="action.yml" -->

<!-- action-docs-outputs source="action.yml" -->

<!-- action-docs-outputs source="action.yml" -->
# Sample Usage
```
jobs:
  deploy:
    permissions: 
      id-token: write
    runs-on: ubuntu-latest
    steps:
      - name: Check out repo
        uses: actions/checkout@v4
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-region: us-east-1
          role-to-assume: ${{ secrets.ROLE_ARN }}
          role-session-name: ${{ github.actor }}
      - uses: alonch/actions-aws-backend-setup@main
        with: 
          instance: sample
      - uses: alonch/actions-aws-http-node@main
        with:
          name: actions-aws-http-node
          artifacts: src
          allow-public-access: true
          routes: |
            - entrypoint-file: index
              entrypoint-function: handler
              path: "/"
              method: get
```

# Routing

## Schema

```
routes: Array
- entrypoint-file: String
  entrypoint-function: String
  path: String
  method: String
  parameters: Object
    path: Array
    - name: String
      type: String
    query: Array
    - name: String
      type: String
    body: Object
    - name: String
      type: String
  responses: 
  - status-code: Number
    body: Array
    - name: String
      type: String
```


## routes
The `routes` input is a YAML formated array of routes

```
routes: |
- entrypoint-file: index
  entrypoint-function: handler
  path: "/"
  method: get
- entrypoint-file: hello
  entrypoint-function: handler
  path: "/hello"
  method: get
```

### routes.entrypoint-file

Handler file for this specific route, path is relative to the artifact folder

### routes.entrypoint-function

Function within the `routes.entrypoint-file` that will handler the request

Example `entrypoint-file` with `entrypoint-function: handler` 
```
exports.handler = async function () {
  return {
    status: 200,
    body: "<h1>hello world</h1>",
    headers: { 
      "content-type": "text/html" 
    },
  };
};
```

### routes.path

URL path that triggers this function, you can capture path parameters by using `{ }`, for example `user/{user-id}`

### routes.method

Any HTTP method:
* DELETE
* GET 
* HEAD
* OPTIONS
* PATCH
* POST
* PUT

### routes.parameters

Schema for the request, it supports: 
* path
* query
* body 

These parameters will be passed to `routes.entrypoint-function`, for example, the following route:
```
- entrypoint-file: plus
  entrypoint-function: handler
  path: "/plus/{z}"
  method: post
  parameters:
    path:
    - name: z
      type: number
    query:
    - name: x
      type: number
    body: 
    - name: y
      type: number
```
It will call the handler with the following parameters
```
exports.handler = async function (parameters) {
  const {
    path: { z },
    query: { x },
    body: { y }
  } = parameters
  return {
    status: 200,
    body: {
      total: z+x+y
    }
  };
};
```

Parameters are validated and when requests parameters are invalid, reponse with statusCode 400 will be generated
For example, when sending body y as string, this would be the response
```
{
  "statusCode":400,
  "body": {
    "in": [
      "request",
      "body-params"
    ],
    "coercion": "malli",
    "type": "request-coercion",
    "value": {
      "y": "4"
    },
    "humanized": {
      "y": [
        "should be an integer"
      ]
    }
  }
}
```

### routes.parameters.path

Array of parameters included as part of [routes.path](#routespath), 

for example: 

```
- entrypoint-file: echo
  entrypoint-function: handler
  path: echo/{x}
  method: post
  parameters: 
    path: 
    - name: x
      type: number
```

This route will pass the following parameters

```
exports.handler = async function (parameters) {
  const {
    path: { x }
  } = parameters
  return {
    status: 200,
    body: {
      echo: x
    }
  };
};
```

### routes.parameters.query

Array of parameters included as part of `routes.query`, for example: 

```
- entrypoint-file: echo
  entrypoint-function: handler
  path: /
  method: get
  parameters: 
    query: 
    - name: x
      type: number
```

Executing the URL `/?x=123`, will trigger the following event

```
exports.handler = async function (parameters) {
  const {
    query: { x }
  } = parameters
  return {
    status: 200,
    body: {
      echo: x
    }
  };
};
```

### routes.parameters.query

Array of parameters included as part of `routes.body`, for example: 

```
- entrypoint-file: greet
  entrypoint-function: handler
  path: /greet
  method: post
  parameters: 
    query: 
    - name: user
      type: string
```

When passing the json string body `{"user":"alonso"}`

```
exports.handler = async function (parameters) {
  const {
    body: { user }
  } = parameters
  return {
    status: 200,
    body: {
      echo: `hello ${user}`
    }
  };
};
```

### routes.responses

Array of valid handler responses, the reponses are not exclusive, which means it will only validate reponses by `status-code`, but the function can respond any undocumented `status-code` 

for example: 

```
- entrypoint-file: user
  entrypoint-function: handler
  path: /user
  method: get
  responses: 
  - status-code: 200
    body:
    - name: firstName
      type: string
```
with the following handler

```
exports.handler = async function () {
  return {
    status: 200,
    body: {
      firstName: "Alonso"
    }
  };
};
```

Response is validated by `status-code`, this means that if `firstName` field is not present in the response body, the following response will be generated instead

```
{
  "statusCode": 500,
  "body": {
    "in": [
      "response",
      "body"
    ],
    "coercion": "malli",
    "type": "response-coercion",
    "value": {
    },
    "humanized": {
      "firstName": [
        "missing required key"
      ]
    }
  }
}
```

# Special Thanks

* The folks at [Metosin Oy](http://www.metosin.fi) for [reitit](https://github.com/metosin/reitit) and [malli](https://github.com/metosin/malli) ❤️