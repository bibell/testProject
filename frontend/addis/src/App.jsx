import logo from './logo.svg';
import './App.css';
import './allStyle/employee.css'
import Employee from './addEmployee';
import Header from './header';
import React from 'react';
import Register from './register';
import Read from './read';
import {BrowserRouter as Router, Switchs, Route} from 'react-router-dom'
import Update from './update';
import Delete from './delete';
import Create from './create'
class App extends React.Component{
  render(){
    return(<div className='App'>   
         <Header/>
       
          <Employee/>
          <Register/>
          <Read />
          <Update/>
          <Delete/> 
          <Create/>

    </div>)
  }
}

export default App;
