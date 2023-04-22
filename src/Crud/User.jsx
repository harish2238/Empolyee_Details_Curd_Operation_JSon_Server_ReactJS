import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Style from "./home.module.css"
const User = () => {
  let [data,setDate]=useState([])
  useEffect(()=>{
         axios.get("http://localhost:3000/user")
         .then((response)=>{
            console.log(response.data);
            setDate(response.data)
         })
         .catch((error)=>{
             console.log(error);
         })
       },[])
      
let deleterecord=(id)=>{
  axios.delete(`http://localhost:3000/user/${id}`)
  window.location.assign("/users")
  Navigate("/users")
}
  return (
    <div id={Style.yeshu} >
        {data.map((x)=>{
          return (
            <section key={x.id} id={Style.section}   >
             <p>Id:<span>{x.id}</span></p> 
            <p>Name:<span>{x.name}</span></p>
            <p>Salary:<span>{x.salary}</span></p>
            <p>Comapany:<span>{x.company}</span></p>
             <Link to={`/edituser1/${x.id}`} ><button id={Style.btn}   >Edit</button></Link> 
             <button onClick={()=>{deleterecord(`${x.id}`)}} id={Style.btn}   >Delete</button>
            </section>

          )
        })}
    </div>
  )
}   

export default User