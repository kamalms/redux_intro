import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBooktest } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    // constructor(props){
    //     super(props);
    // }

    renderList() {
    return this.props.booksgoasproperty.map((book) => {
      return (
          <li
            key={book.title}
            onClick={() => this.props.getaspropertyinbooklist(book)}
            className="list-group-item">
            {book.title}
          </li>
        );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up in props
  // inside book list
  return {
    booksgoasproperty: state.booksreturnasreducer,
  };
}

// function mapDispatchToProps(dispatch){
// return bindActionCreators({ getaspropertyinbooklist : selectedBook }, dispatch);
// }

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({getaspropertyinbooklist: selectBooktest}, dispatch);
}
    
// Promote BookList from a component to a container - it needs to
// know about this new disptch method, selectBook. Make it
// availible as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);



