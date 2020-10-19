import {DETAILS,DELETE,EDIT,EDITID} from './actionCreator'
let nextTodoId = 0
export const details = (value) =>{
    
      
    return{type: DETAILS, payload:value,id:nextTodoId++}
}


export const remove = (id) =>{
   
  return{type: DELETE, payload:id}
}

export const edit = (data) =>{
   
  return{type: EDIT, payload:data}
}
export const getEditId = (editId) =>{
    
  return{type: EDITID, payload:editId}
}

