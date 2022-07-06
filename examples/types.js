/**
 * GraphQL comes with a set of default scalar types out of the box:
 * Int: A signed 32‐bit integer.
 * Float: A signed double-precision floating-point value.
 * String: A UTF‐8 character sequence.
 * Boolean: true or false.
 * ID: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache.
 * The ID type is serialized in the same way as a String; however, defining it as an ID signifies
 * that it is not intended to be human‐readable.
 * https://graphql.org/learn/schema/#scalar-types
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