import React, { useState } from 'react';
import { withRouter } from 'react-router'
import { useHistory } from "react-router-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";


function Example(props) {
    
  // Declare a new state variable, which we'll call "count"
  const [username, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const history = useHistory();
    
    const submitValue = (e) => {
        e.preventDefault()
        const frmdetails = {
            'username' : username,
            'password' : password,
            
        }
       if(frmdetails.username==='testUser' && frmdetails.password==='Password1'){
           localStorage.setItem('Name',frmdetails.username)
           history.push('/details');
       }
    }
  return (
   
    <center>
    <form >
    
    <div className='container' style={{marginTop:250,border: '1px solid black',width:500,height:300,paddingTop:80}}>
    <header>LOGIN</header>
    <div className='form-group'>
      <input type='text' placeholder='ENTER USERNAME' name='username' class="form-control"  onChange={e => setuserName(e.target.value)} style={{width:400}}/>
    </div>
     <div className='form-group'>
     <input type='text' name='password' placeholder='ENTER PASSWORD' class="form-control"  onChange={e => setpassword(e.target.value)} style={{width:400}}/>
   </div>
   <div className='form-group'>
   <button onClick={submitValue}>Submit</button>
   </div>
   </div>
  
   </form>
</center>
  
  );
}
export default withRouter(Example);