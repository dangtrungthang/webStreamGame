import React from 'react'
import { COLOR_BORDER_GAME, COLOR_COLOR_TEXT1 } from '../../constrant'
import { AiOutlineMore } from "react-icons/ai";
export default function CardTou(props) {

    return (
        <div style={{
            width: "344px", height: "270px", position: 'relative',
            borderStyle: 'solid', borderWidth: "1px", borderColor: COLOR_COLOR_TEXT1
        }}>
            <img style={{
                height: "193.5px", borderBottomColor: COLOR_COLOR_TEXT1, borderBottomWidth: "1px",
                borderBottomStyle: 'solid'
            }}
                src={props.ImageVideo}>
            </img>
            <div style={{
                position: 'absolute', top: 10, background: 'red',
                marginLeft: "5px", borderRadius: "6px", padding: '5px', color: 'white'
                , fontSize: '10px'
            }}>
                <a>{props.Date}</a>
            </div>
            <div style={{position:'absolute',bottom:80,color:'white',
        fontSize:'12px',marginLeft:"5px"}}>
                <a>{props.Viewer}</a>
            </div>

            <div>
            <div style={{display:'flex',flexDirection:'row',color:COLOR_COLOR_TEXT1,
        marginLeft:'10px',marginRight:'10px',justifyContent:'space-between',
        }}>
                <a>{props.Title}</a>
                <AiOutlineMore/>
            </div>
            <div style={{display:'flex',flexDirection:'row',color:COLOR_COLOR_TEXT1,
        marginLeft:'10px',marginRight:'10px',justifyContent:'space-between',marginTop:'10px'}}>
                <a>{props.NumberTeams}</a>
                <a>{props.Area}</a>
            </div>
            </div>
        </div>
    )
}