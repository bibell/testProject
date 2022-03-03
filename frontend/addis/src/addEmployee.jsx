import React,{useState,useEffect} from 'react'
import axios from 'axios'
import glass from './images/glass.jpg'


function Employee(){
    const [uname,setName]=useState()
    const [ubirth,setBirth]=useState()
    const [ugender,setGender]=useState()
    const [usalary,setSalary]=useState()  
    const [employeeList,setEmployeeList]=useState()

   useEffect(()=>{
       /*
        axios.get('http://localhost:7000/employee/api/read/employeeInfo')
        .then((response)=>{
            console.log(response.data)
            setEmployeeList(response.data)
        }).catch((e)=>{
            console.log('unable to read the database due to '+e)
        },[5])
                  
       */
       

    })
    return(<div className='addEmployee'>
        <h1>MERN STACK CRUD APP TEST PROJECT</h1>
         <p>I did not spend more time on the 
            user interface, hince these is
            test project i didn't also warry about
            responsivness of the web app, i really
            know it is the bigg issue, remarkablly
            it has every thing which comman crud app contain.
            <br/><br/> 
            <img src={glass}/><br/><br/>
            
            And the last thing that i want to add is just
            that, i really love warring glass,don't
            ask me i dont know way........
         </p>
        
    </div>)
}

export default Employee