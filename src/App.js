import React from 'react';
import './App.css';

import EMP from './emp'
import {Route,Switch,Link} from 'react-router-dom';

class App extends React.Component{

   constructor(props){
     super(props)
     this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    
   }
    
  render(){
    const {path} = this.props.match
    console.log(this.props.match)
    return(
      <div>
      <div className="links"> 
        <Link to={`${path}/firstTab`} className='link'>Movies List</Link>
        <Link to={`${path}/secondTab`} className='link'>Movie Poster</Link>
      </div>
      <div className="tabs">
      <Switch>
         
        <Route path={`${path}/secondTab`} component={EMP} />
      </Switch>
    </div>
    </div>
    
   )
  }
}

export default App;


