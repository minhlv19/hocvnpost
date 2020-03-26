import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contents: [''],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      console.log('dvfbgh', action);
      return {...state, contents: [...state.contents, action.content]};
    case  actionTypes.REMOVE_NOTE:
      const removeData = state.contents.filter(e => e !== action.content);
      return {...state,contents: removeData};
    default:
      return state;
  }
};

