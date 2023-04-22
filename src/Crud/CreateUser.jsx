import axios from 'axios';
import React, { useState } from 'react'
import Style  from './home.module.css';
import { useNavigate } from 'react-router-dom';
const CreateUser = () => {
  let[name,setName]=useState("")
  let[salary,setSalary]=useState("")
  let[company,setCompany]=useState("")
  let navigate=useNavigate()
  let formhandle=(e)=>{
    e.preventDefault()
    console.log(name,salary,company);
    let payload={name,salary,company}
    axios.post("http://localhost:3000/user",payload)
    .then(()=>{
      console.log("DATA HAS BEEN ADDED");
    })
    .catch(()=>{
             console.log("Something went wrong");
    }
    )
    navigate("/users")
  }
  return (
    <div  id={Style.div} >
       <form action="#" onSubmit={formhandle} >
           <center> <label htmlFor="">EMP-NAME:</label><br /><br /></center>
            <input type="text" placeholder='EMP-NAME' id={Style.cssin} required value={name}
             onChange={e=>{setName(e.target.value)}} />
          <br /><br />
           <center> <label htmlFor="">EMP-SAL:</label><br /><br /></center>
            <input type="text" placeholder='EMP-SAL'  id={Style.cssin} required value={salary} 
            onChange={e=>{setSalary(e.target.value)}} />
           <br /><br />
            <center>  <label htmlFor="">EMP-COMPANY:</label><br /><br /></center>
            <input type="text" placeholder='EMP-COMPANY' id={Style.cssin} required  value={company}
               onChange={e=>{setCompany(e.target.value)}}  />
          <br /><br />
            <center><button id={Style.btn} >SUBMIT</button></center>
        </form>
    </div>
  )
}
export default CreateUser