import {DETAILS,DELETE,EDIT,EDITID} from './actionCreator'
const initialstate = {    
  employees: [ ]    
};    

const rootReducer = (state = initialstate, action) => {
    switch (action.type) {
      case DETAILS:
       
        return {    
          ...state,    
          employees: state.employees.concat(action.payload)    
      };

      case EDIT:   
      
      return {    
          ...state,    
          employees: state.employees.map(    
              (content, index) => index == state.getId ? {...content, firstname : action.payload.firstname ,  lastname : action.payload.lastname, mobilenumber : action.payload.mobilenumber,email : action.payload.email }    
                                      : content) }; 
     
      case DELETE:
        return {    
          ...state,    
          employees: state.employees.filter((item,index) => index !== action.payload)    
      };

      case EDITID:
        return {
          ...state,
          getId:action.payload
        }

       default:
      return state
    }
    
    
  };
  export default rootReducer;
  