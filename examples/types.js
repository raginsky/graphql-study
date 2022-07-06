/**
 * Supported types
 * Every type definition in a GraphQL schema belongs to one of the following categories:
 * Scalar
 * Object
 * This includes the three special root operation types: Query, Mutation, and Subscription.
 * Input
 * Enum
 * Union
 * Interface
 * https://www.apollographql.com/docs/apollo-server/schema/schema/#supported-types
 */

const Directive = `
{
  books{ # Book / Object type
    title # String / Scalar type
    reviews{ # List of Review / Object types
      rating # Int / Scalar type
      user{ # Person / Object type
        firstName # String / Scalar type
        lastName # String / Scalar type
      }
    }
  }
}
`;