import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import add from './images/add.jpg'
import './allStyle/create.css'

class Create extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            startDate:new Date(),
            gender:'',
            salary:'',
            users:[],
            error:'',
            salaryError:'',
            nameError:'',
            genderError:''
        }
        this.userName=this.userName.bind(this)
        this.employeeDate=this.employeeDate.bind(this)
        this.userGender=this.userGender.bind(this)
        this.userSalary=this.userSalary.bind(this)
    }
    userName(event){
          this.setState({name:event.target.value})
    }

   employeeDate(date){
       this.setState({startDate:date})
   }
   
   userGender(event){
       this.setState({gender:event.target.value})
   }

   userSalary(event){
      this.setState({salary:event.target.value})
   }

   render(){
       return(<div className='create'>
           <div className='createOne'>
               <img src={add}/>
               <h3>ADD EMPLOYEE</h3>
           </div>

           <div className='createTwo'>
               <div style={{color:'red'}}>{this.state.error}</div>
               <br/>
               <input value={this.state.name}
                      onChange={this.userName}
                      placeholder='Employee Name'/><br/>
                      <div style={{color:'red'}}>{this.state.nameError}</div>
                      <br/>

               <DatePicker selected={this.state.startDate} 
                           onChange={this.employeeDate}
                           name='Date of Birth'
                           placeholderText='Employee Date of Birth'
                           dateFormat="m/d/yyyy"/>
               <input value={this.state.gender}
                      onChange={this.userGender}
                      placeholder='Employee Gender'/>
                   <div style={{color:'red'}}>{this.state.genderError}</div>   
               <input value={this.state.salary}
                      onChange={this.userSalary}  
                      placeholder='Employee Salary'/><br/>
                     <div style={{color:'red'}}>{this.state.salaryError}</div>  
                      <br/>
               <button onClick={()=>{
                   const getValue={
                       uname:this.state.name,
                       udate:this.state.startDate,
                       ugender:this.state.gender,
                       usalary:this.state.salary
                   }

           if(this.state.name==='' || this.state.startDate==='' || this.state.gender==='' || this.state.salary===''){
               this.setState({error:'All Input is required'})
           } else{
              //validate employee name
              console.log(typeof(this.state.name))
               const userNameRegex=/^[a-z A-Z]+$/
               //const vall=typeof(this.state.name)
               //const validateName=new RegExp('/^[a-zA-Z]+$/')
               if(!userNameRegex.test(this.state.name)){
                   this.setState({nameError:'Employee Name must be valid String'})
                      }
                else{      
                  
                 const genderRegex=/^[fmFM]+$/
                 if(!genderRegex.test(this.state.gender)){
                     this.setState({genderError:'M or F is only allowed'})
                 }   
                 else{
                if((this.state.salary*2)%2===0){
                   alert(getValue.uname+getValue.udate+getValue.ugender+getValue.usalary+'\n is going to be added to the data base')
                   axios.post('http://localhost:7000/employee/api/creat/employeeInfo',getValue)
                   .then((response)=>{
                       alert('employee has been created sucessfully...')
                       console.log(response.data)
                       window.location.reload()
                   }).catch((e)=>{
                       alert('unable to send the requiest due to '+e)
                   })
                                       }
                                   else{
                                       this.setState({salaryError:'Salary Must be valid number'})
                                   }    

                                }
                            }  
              }
                   
               }}>ADD EMPLOYEE</button>
           </div>
       </div>)
   }
}
export default Create