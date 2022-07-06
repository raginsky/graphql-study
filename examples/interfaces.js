/**
 * GraphQL supports interfaces. An Interface is an abstract type that includes a certain set of fields
 * that a type must include to implement the interface.
 * https://graphql.org/learn/schema/#interfaces
 */

const Directive = `
query SchemaTypes {
  __schema{
    types{
      kind
      name
      interfaces {
        name
        description
      }
    }
  }
}
`;