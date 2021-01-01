import React from 'react'
import {COLOR_BACKGROUND,COLOR_BORDER_GAME,COLOR_COLOR_TEXT1, COLOR_NAVLINK} from '../../constrant'
export function TagGame(props){
    return(
        <button style={{borderRadius:"10px",borderWidth:"2px",
        borderColor:COLOR_BORDER_GAME,borderStyle:'solid',
        backgroundColor:COLOR_BORDER_GAME,
        marginLeft:"20px",
        padding:"5px",
        
        color:"white"}} 
        >
            <a >{props.name}</a>
          </button>
    )
}