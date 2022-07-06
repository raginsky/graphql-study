# Graphql-Study

[GraphQL for beginners with JavaScript](https://www.udemy.com/course/graphql-for-beginners-with-javascript/)

## Project Structure
```shell
graphql-study                    # → Root Dir
├── examples/                    # → Set of code pieces with Query Language
├── package.json                 # → npm dependencies
└── index.js                     # → GraphQL Server example
```

## How to run node server
```shell
npm i
node index.js "query {$variable}"
```
Where `$variable` is part GraphQL schema

### Important notice
The `package.json` MUST use those specific dependencies of npm packages for successfull build
```shell
   "graphql": "^0.13.2",
   "graphql-tools": "^3.0.2"
```