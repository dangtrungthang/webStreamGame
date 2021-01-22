import React from 'react'
import {BsSearch} from 'react-icons/bs'
export default function Search(){


    return(
        <div  style={{
            width: "300px",
            height: "40px",
            marginLeft: '50px',
            marginBottom: '5px',
            borderColor: 'white',
            borderWidth: "1px",
            borderStyle:"solid",
            background:'black',
            opacity:0.2,
            color:'white',
            display:'flex',
            alignItems:'center'
          }}>
            
            <BsSearch size={18} style={{margin:"10px"}}/>
             <input type="text" placeholder="   Tìm kiếm thể loại " 
             style={{flex:1,background:'transparent',borderWidth:"0px",color:'white',fontSize:"15px"}}>
            </input>
        </div>
    )
}