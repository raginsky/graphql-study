/** *
 * A directive decorates part of a GraphQL schema or operation with additional configuration.
 * Tools like Apollo Server (and Apollo Client) can read a GraphQL document's directives
 * and perform custom logic as appropriate.
 * List of existing directives: @deprecated(reason: String) | @skip(if: Boolean!) | @include(if: Boolean!)
 * https://www.apollographql.com/docs/apollo-server/schema/directives/
 */

const Directive = `
query Books($skipReview: Boolean!, $includeUser: Boolean!) {
  books {
    title
    subtitle
    id
    reviews @skip(if: $skipReview) {
      comment
      rating
    }
  }
  users @include(if: $includeUser) {
    firstName
    lastName
  }
}
`;

const QueryVariables = `
{
  "skipReview": false,
  "includeUser": true
}
`;
