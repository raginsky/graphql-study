/** *
 * It is possible for fragments to access variables declared in the query or mutation.
 * https://graphql.org/learn/queries/#using-variables-inside-fragments
 */

const Directive = `
query BooksQuery ($page: Int, $first: Int){
  books(page: $page, first: $first){
    id
    title
    pageCount
    rating
  }
}

`;

const QueryVariables = `
{
  "page": 3,
  "first": 4
}
`;
