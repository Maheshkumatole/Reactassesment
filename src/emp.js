import React from 'react';
import './App.css';
import Edit from './edit';
import {details,remove,edit,getEditId} from './cakeActions';
import { connect } from 'react-redux'
import Nav from './nav'
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
          data:[],
          id:0,
          
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

      
      this.setState({
         records: details
      },() => {  this.props.details(this.state.records) })
             this.props.edit(details)
       }


moreInfo(id){
    this.props.remove(id)
   } 

   edit(data,index) {
    this.setState({
       firstname:data.firstname,
       lastname:data.lastname,
       number:data.mobilenumber,
       email:data.email
    })
    this.props.getEditId(index)
   }

  
 render(){
   
  const unique = [];

  this.props.data.map(x => unique.filter(a => a.firstname == x.firstname && a.lastname == x.lastname).length > 0 ? null : unique.push(x));
  
 
    return(
     <div>
       <Nav ></Nav>
        <center>
        <form onSubmit={this.onSubmit}>
            <div className="container">
            <div class="form-group">
                <label for="email">username:</label>
                   <input type="text" class="form-control"  name="firstname" value={this.state.firstname} onChange={this.onChange} style={{width:400}} required/>
              </div>
              <div class="form-group">
                <label for="lastname">lastname:</label>
                   <input type="text" class="form-control"   name="lastname" value={this.state.lastname} onChange={this.onChange} style={{width:400}} required />
              </div>
              <div class="form-group">
                <label for="lastname">Mobile Number:</label>
                   <input type="tel" pattern=".{10}" class="form-control"   name="number" value={this.state.number} onChange={this.onChange} style={{width:400}} oninput="check(this)" required />
              </div>
              <div class="form-group">
                <label for="lastname">Email:</label>
                   <input type="email" class="form-control"   name="email" value={this.state.email} onChange={this.onChange} style={{width:400}}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
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
        <th>Delete</th>
        <th>Edit</th>
     </tr>
    </thead>
        {unique && unique.map(function(list,index){
          
           return (
         <tbody  key={index}>
           <tr>
            <td>{list.firstname}</td>
           <td>{list.lastname}</td>
           <td>{list.mobilenumber}</td>
           <td>{list.email}</td>
           <td><button data-toggle="modal" data-target="#myModal" onClick={() => this.moreInfo(index)}>DELETE</button></td>
           <td><button data-toggle="modal" data-target="#myModal" onClick={() => this.edit(list,index)}>EDIT</button></td>

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
      data:state.employees
    }
   
  }

  const mapDispatchToProps = (dispatch) => {
    return {
    // You can now say this.props.createBook
         details: value => dispatch(details(value)),
         remove : id => dispatch(remove(id)),
         edit : data => dispatch(edit(data)),
         getEditId:index => dispatch(getEditId(index))
    }
  };


 export default connect(mapStateToProps,mapDispatchToProps)(EMP);

