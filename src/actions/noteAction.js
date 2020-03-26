import * as actionTypes from './actionTypes';

export const addNote = (content) => {
  return {
    type: actionTypes.ADD_NOTE,
    //content:content,
    content,
  };
};
export const removeNote = (content) =>{
  return {
    type: actionTypes.REMOVE_NOTE,
    content,
  };
};
