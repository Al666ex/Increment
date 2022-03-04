//import React from 'react';
const reducer = (state = 0, action) => {
    switch(action.type){
      case 'INC' : {
        return state = state + 1;
      }
      case 'DEC' : {
        return state = state -1;
      }
      case 'RND' : {
        return state = state + action.value;
      }
  
      default : return state;
    }
  }

export default reducer;