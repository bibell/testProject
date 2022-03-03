import React from 'react'
import './allStyle/header.css'
import glassOne from './images/glassOne.jpg'
import home from './images/home.jpg'


class Header extends React.Component{
      constructor(){
          super()
          this.state={
              store:'login'
          }
      }
     
   

    render(){
        
        return(<div className='header'>
             <div className='headerOne'>
                 <h3>Addis EMPLOYEE</h3>
              
                <img src={glassOne} onClick={()=>{
            
                    if(!sessionStorage.getItem('userNameKey')){
                        document.querySelector('.register').style.display='block'  
                                 
                    }
                    else{
                        alert('You already Registerd')
                        return this.setState({store:sessionStorage.getItem('userNameKey')})
                    }
                    
                }}/> <p id='spage' onClick={()=>{
            
                    if(!sessionStorage.getItem('userNameKey')){
                        document.querySelector('.register').style.display='block'  
                                 
                    }
                    else{
                        alert('You already Registerd')
                        return this.setState({store:sessionStorage.getItem('userNameKey')})
                    }
                    
                }}>{this.state.store}</p>
             </div>
            <div className='headerTwo'> 
                <a onClick={()=>{
                    document.querySelector('.read').style.display='none'
                    document.querySelector('.create').style.display='none'
                    document.querySelector('.update').style.display='none'
                    document.querySelector('.delete').style.display='none'

                    document.querySelector('.addEmployee').style.marginLeft='450px'

                }}><img src={home} width='100px' height='100px'/></a>
                <a onClick={()=>{
                    //window.location='/create'
                    //remove other components
                    document.querySelector('.addEmployee').style.marginLeft='-550px'
                    document.querySelector('.read').style.display='none'
                   // document.querySelector('.rone').style.display='none'
                    document.querySelector('.delete').style.display='none'
                    document.querySelector('.update').style.display='none'
                    //display the create element
                    document.querySelector('.create').style.display='block'
                }}>CREATE EMPLOYEE</a>
                <a className='rone' onClick={()=>{
                    //window.location='/read'
                    document.querySelector('.read').style.display='block'
                    //document.querySelector('.rone').style.color='red'
                    //hide the other pages
                    document.querySelector('.addEmployee').style.marginLeft='-550px'
                    document.querySelector('.create').style.display='none'
                    document.querySelector('.update').style.display='none'
                    document.querySelector('.delete').style.display='none'
                }}>READ EMPLOYEE </a>
                <a onClick={()=>{
                    //window.location='/update'
                    document.querySelector('.addEmployee').style.marginLeft='-550px'
                    document.querySelector('.read').style.display='none'
                    document.querySelector('.create').style.display='none'
                    document.querySelector('.delete').style.display='none'

                    document.querySelector('.update').style.display='block'
                   
                }}>UPDATE EMPLOYEE</a>
                <a onClick={()=>{
                    //window.location='/delete'
                    //remove the other pages
                    document.querySelector('.addEmployee').style.marginLeft='-550px'
                    document.querySelector('.update').style.display='none'
                    document.querySelector('.read').style.display='none'
                    document.querySelector('.create').style.display='none'

                    //display the required pages
                    document.querySelector('.delete').style.display='block'
                }

                }>DELETE EMPLOYEE</a>
            </div> 

        </div>)
    }
}

export default Header