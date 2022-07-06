/**
 * In GraphQL, every field and nested object can get its own set of arguments
 * https://graphql.org/learn/queries/#arguments
 */

const Directive = `
query {
  reviews(status: [FLAGGED]){
    rating
    comment
    status
    user{
      firstName
      lastName
    }
  }
}
`;