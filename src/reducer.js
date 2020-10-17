import {DETAILS} from './actionCreator'

const rootReducer = (state = [{name:'mahesh'}], action) => {
console.log('ddd')
    switch (action.type) {
      case DETAILS:
       return{
           ...state,
            data:action.payload
       }
       default:
      return state
    }
    
    
  };
  export default rootReducer;
  