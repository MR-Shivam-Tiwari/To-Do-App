import React from "react";
import "./sidebar.css"
 const Sidebar=()=>{
    return(
        <>
        <div id="side-container">
        <h1 id="logo">T0_DO List</h1>
      
 
        
            
            
            
        
        <a id="logout" href="./" >
            <button id="sb-btn" onClick={()=>{window.localStorage.removeItem("token")}}>
            <i class="fa fa-sign-in" aria-hidden="true"></i>
        <p id="logout-text">Log out</p>
            </button>
        </a>
        </div>
        </>
    )
 }
 export default Sidebar