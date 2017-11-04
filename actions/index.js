// export function selectBooktest(book){
//     console.log('binding action,  ', book);
// }

export function selectBooktest(book) {
  // selectBook is an ActionCreateor, it needs to return an
  // action, an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}