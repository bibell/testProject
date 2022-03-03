import React from 'react'
import axios from 'axios'
import remove from './images/remove.png'
import './allStyle/delete.css'
import rem from './images/rem.png'

class Delete extends React.Component{
     constructor(){
         super();
         this.state={
            users:[]
         }
     }

   identify(value){
       alert("you going to remove these employee....")
          axios.delete('http://localhost:7000/employee/api/delete/employeeInfo/'+value)
          .then((response)=>{
              console.log(response.data)
              alert(response.data)
             // window.location.reload()
          }).catch((e)=>{
              console.log(e)
              alert('delete problem due to '+e)
          })       
   }  
    render(){
        return(<div className='delete'>
            <div className='deleteOne'>
                <img src={remove}/>
                <h3>REMOVE EMPLOYEE</h3>
                <button onClick={()=>{
                    axios.get('http://localhost:7000/employee/api/read/employeeInfo')
                    .then((response)=>{
                        this.setState({users:response.data})
                    }).catch((e)=>{
                        alert('unable to send the request due to '+e)
                    })
                }}>USER LISTS</button>
            </div>
              {
               this.state.users.map((valueResponse)=>{
                   return(<div className='remove'>
                       <table border='1'>
                           <tr>
                               <th>Employee Name</th>
                               <th>Employee Birth</th>
                               <th>Employee Gender</th>
                               <th>Employee Salary</th>
                           </tr>
                           <tr>
                               <td>{valueResponse.employeeName}  </td>
                               <td>{valueResponse.employeeBirth}  </td>
                               <td>{valueResponse.employeeGender}  </td>
                               <td>{valueResponse.employeeSalary}  <img src={rem} onClick={()=>{
                                   this.identify(valueResponse._id)
                               }}/></td>
                              
                           </tr>
                       </table>
                   </div>)
               })
              }
        </div>)
    }
}

export default Delete;