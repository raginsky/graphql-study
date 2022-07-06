/**
 * The Query type is a special object type that defines all of the top-level entry points for
 * queries that clients execute against your server.
 * https://www.apollographql.com/docs/apollo-server/schema/schema/#the-query-type
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