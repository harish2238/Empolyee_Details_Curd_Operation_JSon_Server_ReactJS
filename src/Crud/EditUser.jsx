import axios from 'axios';
import {React,useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Style  from './home.module.css';

const EditUser = () => {
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let{index}=useParams()
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${index}`)
        .then((response)=>{
          console.log(response.data.id);
          setName(response.data.name)
          setCompany(response.data.company)
          setSalary(response.data.salary)
        })
    },[index])
    let formhandle=()=>{
         let payload={name,salary,company}
         axios.put(`http://localhost:3000/user/${index}`,payload)
         .then((e)=>{
          e.preventDefault()
                  console.log("Data Has Been Updated");
         })
         navigate("/create")
    }
  return (
    <div id={Style.div} >
       
         <form action=""  onSubmit={formhandle} >
           <center> <label htmlFor="">EMP-NAME:</label><br /><br /></center>
            <input type="text" placeholder='EMP-NAME' id={Style.cssin}  value={name}
             onChange={e=>{setName(e.target.value)}} />
          <br /><br />
           <center> <label htmlFor="">EMP-SAL:</label><br /><br /></center>
            <input type="text" placeholder='EMP-SAL' id={Style.cssin}  value={salary} 
            onChange={e=>{setSalary(e.target.value)}} />
           <br /><br />
            <center>  <label htmlFor="">EMP-COMPANY:</label><br /><br /></center>
            <input type="text" placeholder='EMP-COMPANY' id={Style.cssin}   value={company}
            onChange={e=>{setCompany(e.target.value)}}  />
          <br /><br />
            <center><button id={Style.btn} >Update</button></center>
        </form>
    </div>
  )
}

export default EditUser