import { combineReducers } from 'redux';
//import { BooksReducer  } from './reducer_books';
import BooksReducertest from './reducer_books';
import ActiveBook from './reducer_activebook';
const rootReducer = combineReducers({

  //state: (state = {}) => state
  booksreturnasreducer: BooksReducertest,
  activeBook : ActiveBook

});

export default rootReducer;
