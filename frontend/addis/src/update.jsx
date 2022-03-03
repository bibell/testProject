import React from 'react'
import './allStyle/update.css'
import update from './images/update.png'
import edit from './images/edit.jpg'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
class Update extends React.Component{
    constructor(){
        super();
        this.state={
            id:'',
            name:'',
            birth:new Date(),
            gender:'',
            salary:'',
            newName:'',
            newBirth:new Date(),
            newGender:'',
            newSalary:'',
            allusers:[],
            users:[],
            newNameError:'',
            newGenderError:'',
            newSalaryError:'',
            newRequired:''
        }
//now bind the enrite onchange event landlings
     this.oldName=this.oldName.bind(this)
     this.oldBirth=this.oldBirth.bind(this)
     this.oldGender=this.oldGender.bind(this)
     this.oldSalary=this.oldSalary.bind(this)

//now bing the new value that must be updates
this.userNewName=this.userNewName.bind(this)
this.userNewBirth=this.userNewBirth.bind(this)
this.userNewGender=this.userNewGender.bind(this)
this.userNewSalary=this.userNewSalary.bind(this)     


    }

 //maneg old inputs states   
oldName(e){
    this.setState({name:e.target.value})
}
oldBirth(date){
    this.setState({birth:date})
}
oldGender(e){
    this.setState({gender:e.target.value})
}
oldSalary(e){
    this.setState({salary:e.target.value})
}

//manege new input that updates to the database
userNewName(e){
   this.setState({newName:e.target.value})
}

userNewBirth(date){
    this.setState({newBirth:date})
}

userNewGender(e){
    this.setState({newGender:e.target.value})
}

userNewSalary(e){
    this.setState({newSalary:e.target.value})
}

updateInfo(id,one,two,three,four){
   // alert(value)
  document.querySelector('.edit').style.display='block'
     
}

    render(){
        return(<div className='update'>
            <div className='updateOne'>
                <img src={update}/>
                <h3>UPDATE EMPLOYEE INFO</h3>
                 <button onClick={()=>{
                     axios.get('http://localhost:7000/employee/api/read/employeeInfo')
                     .then((response)=>{
                         this.setState({allusers:response.data})
                     }).catch((e)=>{
                         alert('unable to update employee lists due to '+e)
                     })
                 }}>SEE EMPLOYEES</button>
                 {
                     this.state.allusers.map((val)=>{
                         return(<div className='response'>
                             <table>

                                 <tr>
                                     <th>Employee Name</th>
                                     <th>Date of Birth</th>
                                     <th>Gender</th>
                                     <th>salary</th>
                                 </tr>
                                 <tr>
                                     <td>{val.employeeName}</td>
                                     <td>{val.employeeBirth}</td>
                                     <td>{val.employeeGender}</td>
                                     <td>{val.employeeSalary} <img src={edit} onClick={()=>{
                                         this.updateInfo(val._id,val.employeeName,val.employeeBirth,val.employeeGender,val.employeeSalary)
                                         alert("employee "+val.employeeName+" is going to be updating") 
                                         this.setState({
                                                      id:val._id,
                                                      name:val.employeeName,
                                                      birth:val.employeeBirth,
                                                      gender:val.employeeGender,
                                                      salary:val.employeeSalary})                          
                                     }}/></td>
                                     
                                 </tr>
                             </table>
                                  

                                  
                             <div className='edit'>
                  

                  <div className='editTwo'>
                      <h3>UPDATE EMPLOYEE INFO</h3>
                       <div style={{color:'red'}}>{this.state.newRequired}</div><br/>                
                      <input value={this.state.newName}
                             onChange={this.userNewName}
                             placeholder={this.state.name}/><br/>
                             <div style={{color:'red'}}>{this.state.newNameError}</div>
                      <DatePicker selected={this.state.newBirth} 
                                  onChange={this.userNewBirth}
                                  name='Date of Birth'
                                  placeholderText={this.state.birth}
                                  dateFormat="m/d/yyyy"/>
                      <input value={this.state.newGender}
                             onChange={this.userNewGender}
                             placeholder={this.state.gender}/><br/>
                             <div style={{color:'red'}}>{this.state.newGenderError}</div>
                      <input value={this.state.newSalary}
                             onChange={this.userNewSalary}
                             placeholder={this.state.salary}/><br/>
                            <div style={{color:'red'}}>{this.state.newSalaryError}</div> 
                      <button onClick={()=>{
                          const allValues={
                              newEmployeeName:this.state.newName,
                              newEmployeeBirth:this.state.newBirth,
                              newEmployeeGender:this.state.newGender,
                              newEmployeeSalary:this.state.newSalary
                          }
                          
     
  if(this.state.newName==='' || this.state.newBirth==='' || this.state.newGender==='' || this.state.newSalary===''){
      this.setState({newRequired:'All input fileds are required'})
  }                     
  else{   
                        const cheakNameValue=/^[a-z A-Z]+$/
                        if(!cheakNameValue.test(this.state.newName)){
                            this.setState({newNameError:'only proper name is allowed'})
                        }  
                        else{
                            const genExp=/^[mfMF]+$/
                            if(!genExp.test(this.state.newGender)){
                                this.setState({newGenderError:'M or F is only allowed'})
                            }

                         else{
                             if(!((this.state.newSalary*2)%2===0)){
                                 this.setState({newSalaryError:'only numbers with out decimal is allowed'})
                             }
                              else{
                             //send the employee info to the database for updating purpose
                         axios.put('http://localhost:7000/employee/api/update/employeeInfo/'+this.state.id,allValues)
                         .then((response)=>{
                             console.log(response.data)
                             alert('Employee '+this.state.name+' updated succesfully')
                             document.querySelector('.edit').style.display='none'
                             window.location.reload()
                         }).catch((e)=>{
                             alert("updating problems "+e)
                         }) 
                                   }

                             }

                             }
        }                       

                      }}>UPDATE</button>
                      <button onClick={()=>{
                          document.querySelector('.edit').style.display='none'
                      }}>CANCEL</button>
                  </div>
              </div>



                         </div>)
                     })
                 }
             
               

            </div>
          
             <div>
                
                  
             </div>



        </div>)
    }
}

export default Update