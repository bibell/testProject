import React from 'react'
import glassOne from './images/glassOne.jpg'
import './allStyle/register.css'

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            userName:'',
            userPhone:'',
            userEmail:'',
            userPassword:'',
            userCPassword:''
        }
        //now we have to bind the entire method that use set state
        this.name=this.name.bind(this)
        this.phone=this.phone.bind(this)
        this.email=this.email.bind(this)
        this.password=this.password.bind(this)
        this.cpassword=this.cpassword.bind(this)
    }

    name(event){
        this.setState({userName:event.target.value})
    }

    phone(event){
        this.setState({userPhone:event.target.value})
    }
    
    email(event){
        this.setState({userEmail:event.target.value})
    }
    password(event){
        this.setState({userPassword:event.target.value})
    }

    cpassword(event){
        this.setState({userCPassword:event.target.value})
    }

    render(){
        return(<div className='register'>
            <h3 onClick={()=>{
                document.querySelector('.register').style.display='none'
            }}>x</h3>
             <div className='registerOne'>
                  <img src={glassOne}/>
                 <h2>Register</h2>
             </div>
             <div className='valid'>
                 <p>All Input Field required</p>
             </div>
             <div className='registerTwo'>
                 <input value={this.state.userName} 
                        onChange={this.name} 
                        placeholder='user name'
                        required/>

                 <input value={this.state.userPhone} 
                        onChange={this.phone} 
                        placeholder='phone'
                        required/>

                 <input value={this.state.userEmail}
                        onChange={this.email}
                        placeholder='Email'
                        required/>
                  
                 <input value={this.state.userPassword}
                        type='password'
                        onChange={this.password} 
                        placeholder='password'
                        required/>
        <p className='passR'>password and confirm password is not matched</p>
                 <input value={this.state.userCPassword}
                        type='password'
                        onChange={this.cpassword}
                        placeholder='confirm password'
                        required/>
                        
                        <button onClick={()=>{
                           
                           
                            //cheak the user input and display respective components
    if(this.state.userName==='' || this.state.userPhone==='' || this.state.userEmail==='' || this.state.userPassword==='' || this.state.userCPassword===''){
        //display the requirment 
        document.querySelector('.valid').style.display='block'
    }else{
        //cheak the password and confirm password is being matched
        if(this.state.userPassword===this.state.userCPassword){
            //now stor the user information in to the browser storage
                            sessionStorage.setItem('userNameKey',this.state.userName)
                            sessionStorage.setItem('userPhoneKey',this.state.userPhone)
                            sessionStorage.setItem('userEmailKey',this.state.userEmail)
                            sessionStorage.setItem('userPasswordKey',this.state.userPassword)
                            sessionStorage.setItem('userCPasswrodKey',this.state.userCPasswrod)
                            alert('Thanks for registeration')
                            window.location.reload()
        }
        else{
           document.querySelector('.passR').style.display='block'
        }

    }                        

                        }}>sign up</button>
             </div>
        </div>)
    }
}

export default Register