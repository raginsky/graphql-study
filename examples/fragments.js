/**
 * GraphQL includes reusable units called fragments. Fragments let you construct sets of fields,
 * and then include them in queries where you need to.
 * https://graphql.org/learn/queries/#fragments
 */

const Directive = `
fragment UserFragment on User {
  firstName
  lastName
}

query TwoUserQuery {
  user1: user(id: "1") {
    ...UserFragment
  }
  user2: user(id: "2") {
    ...UserFragment
  }
}
`;