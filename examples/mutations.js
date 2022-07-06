/**
 * Mutations - a way to modify server-side data.
 * Any operations that cause writes should be sent explicitly via a mutation
 * https://graphql.org/learn/queries/#mutations
 */

const Directive = `
mutation{
  addUser(user:{firstName: "test", lastName: "test"}) {
    id
  }
}

mutation addUser($userData: userInput){
   addUser(user: $userData) {
    id
  }
}
`;

const QueryVariables = `
{
  "userData": {
    "firstName": "test2",
    "lastName": "test2"
  }
}
`;