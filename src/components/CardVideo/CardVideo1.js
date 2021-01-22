import React, { useState,useEffect } from 'react'
import { COLOR_COLOR_TEXT1 } from '../../constrant'

export default function CardVideo1(props){

    return(
        <div style={{width:"344px",height:"270px",borderStyle:'solid',
        borderColor:'yellow',display:'grid',borderWidth:"1px",position:'relative'}}>
             <div style={{background:'red',justifyContent:'center',position:'absolute',left:'5px',top:"5px",display:'flex'}}>
                <a style={{fontSize:"14px",color:'white'}}>{props.type?"LIVE":"LIVE"}</a>
            </div>
            <div style={{background:"rgba(0,0,0,0.3)",justifyContent:'center',position:'absolute',left:'5px',bottom:"80px",display:'flex'}}>
                <a style={{fontSize:"14px",color:'white'}}>{props.Viewer+"K Viewer"}</a>
            </div>
            <img   
            src={props.ImgVideo}
            style={{width:"344",height:"193.5px"}}/>
            <div style={{alignItems:'center',marginLeft:'10px',
        display:'flex',flexDirection:'row'}}>
                <img 
                style={{width:"40px",height:"40px",borderRadius:"40px"}}
                src={props.ImgLogo}/>
               <div style={{display:'flex',flexDirection:'column',color:COLOR_COLOR_TEXT1,marginLeft:"10px"}}>
               <a>{props.Title}</a>
               <a>{props.Chanel}</a>
               </div>
            </div>
           
        </div>
    )
}