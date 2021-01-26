import React from 'react'
import { COLOR_BACKGROUND, COLOR_BORDER_GAME } from '../../constrant'
import './styles.css'

export default function CardTeam(props){

    return(
        <div className="containerss" style={{background:'white',borderColor:COLOR_BORDER_GAME,
        display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',
        borderWidth:'1px'}}>
            <img  style={{width:"350px",height:"350px"}} src={props.ImageVideo}/>
            <div style={{display:'flex',alignSelf:'center',marginTop:'10px'}}>
            <a  style={{color:'black',display:'flex',fontSize:"48px"}}>{props.TeamName}</a>
            </div>
        </div>
    )
}