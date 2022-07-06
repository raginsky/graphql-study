/** *
 * A directive decorates part of a GraphQL schema or operation with additional configuration.
 * List of existing directives: @skip(if: Boolean!) | @include(if: Boolean!)
 * https://graphql.org/learn/queries/#directives
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
