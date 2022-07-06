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
`;