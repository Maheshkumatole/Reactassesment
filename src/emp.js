import React from 'react';
import './App.css';
import Edit from './edit';
import {details} from './cakeActions';
import { connect } from 'react-redux'

import axios from 'axios';



class EMP extends React.Component{

    constructor(props){
        super(props)
        this.state = {
         error: null,
         isLoaded: false,
         items: [],
         moreInfo:[],
         firstname:'',
          lastname:'',
          number:'',
          email:'',
          records:[],
          personEdit:[],
          name:localStorage.getItem('Name')
       }
       
    }
   onChange = (e) =>{
       this.setState({[e.target.name]:e.target.value})
     }

   onSubmit = (e) => {
   
      e.preventDefault();
      
      const arr = []
      const {firstname,lastname,number,email} = this.state
      const details = {
        'firstname':firstname,
        'lastname':lastname,
        'mobilenumber':number,
        'email':email
      }

      var joined = this.state.records.concat(details);
      this.setState({
        records:joined
      })
      this.props.details(this.state.records)
   
   }
   
   moreInfo(list){
     console.log(list.firstname)
    this.setState({
         firstname:list.firstname,
          lastname:list.lastname,
          number:list.number,
          email:list.email,
    })
   } 
 render(){
    
const {records}=this.state

    return(
     <div>
       <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">EMP TABLE</a>
      </div>
      <ul class="nav navbar-nav">
       
      </ul>
      <ul class="nav navbar-nav navbar-right">
    <li><a href="#"> Login as {this.state.name}</a></li>
      </ul>
    </div>
  </nav>
        <center>
        <form onSubmit={this.onSubmit}>
            <div className="container">
            <div class="form-group">
                <label for="email">username:</label>
                   <input type="text" class="form-control"  name="firstname" value={this.state.firstname} onChange={this.onChange} style={{width:400}} />
              </div>
              <div class="form-group">
                <label for="lastname">lastname:</label>
                   <input type="text" class="form-control"   name="lastname" value={this.state.lastname} onChange={this.onChange} style={{width:400}} />
              </div>
              <div class="form-group">
                <label for="lastname">Mobile Number:</label>
                   <input type="text" class="form-control"   name="number" value={this.state.number} onChange={this.onChange} style={{width:400}} />
              </div>
              <div class="form-group">
                <label for="lastname">Email:</label>
                   <input type="text" class="form-control"   name="email" value={this.state.email} onChange={this.onChange} style={{width:400}} />
              </div>
              <div class="form-group">
              <button type="submit">Store</button>
              </div>
          
            </div>
        </form>
        </center>
        { 
     <table  className="container">
     <thead>
     <tr> 
        <th>firstname</th>
        <th>lastname</th>
        <th>mobile</th>
        <th>Email</th>
        <th></th>
     </tr>
    </thead>
        {this.props.data && this.props.data.map(function(list,index){
          
           return (
        
           
           <tbody  key={index}>
           <tr>
            <td>{list.firstname}</td>
           <td>{list.lastname}</td>
           <td>{list.mobilenumber}</td>
           <td>{list.email}</td>
           <td><button data-toggle="modal" data-target="#myModal" onClick={() => this.moreInfo(list)}>Edit</button></td>
           </tr>
           </tbody>
          )
         }.bind(this))}
     </table>
      }
  
 
   
    </div>
    )
   }
  }

  const mapStateToProps = (state) => {
    return{
      data:state.data
    }
   
  }

  const mapDispatchToProps = (dispatch) => {
    return {
    // You can now say this.props.createBook
         details: value => dispatch(details(value))
    }
  };


 export default connect(mapStateToProps,mapDispatchToProps)(EMP);

