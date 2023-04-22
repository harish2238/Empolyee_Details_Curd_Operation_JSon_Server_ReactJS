import React from "react";
import Style from "./home.module.css"
import { Link } from "react-router-dom";
const HomeCrud=()=>{
    return(
        <div id={Style.nav}>
            <Link to="/create">Create-User</Link>
            <Link to="/users">User</Link>
        </div>
    )
}
export default HomeCrud