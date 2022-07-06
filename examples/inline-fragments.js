/**
 * GraphQL schemas include the ability to define interfaces and union types.
 * Inline fragments are used to access data on the underlying concrete type.
 * Named fragments can also be used in the same way, since a named fragment always has a type attached.
 * https://graphql.org/learn/queries/#inline-fragments
 */

const Directive = `
query SearchQuery {
  search(term: "Dan") {
    __typename
    ... on Book {
      title
      subtitle
      authors {
        firstName
        lastName
      }
    }
    ... on Author {
      firstName
      lastName
      books {
        title
      }
    }
    ... on User {
      firstName
      lastName
      reviews {
        book {
          title
        }
      }
    }
    ... on Review {
      rating
      comment
      book {
        title
      }
    }
  }
}
`;