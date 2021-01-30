import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1 } from '../constrant';
import "./styleschat.css"
export default function PanelInfo(props) {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });


    return (


        <SlidingPane

            isOpen={props.isOpen}

            from='left'
            width="500px"
            hideHeader={true}
            className="containChatLeft"
            overlayClassName="containChatLeft"
            onRequestClose={() => setState({ isPaneOpenLeft: false })}
        >
            <div style={{ width: "500px", background: "transparent", marginTop: "-30px",marginLeft:"-30px" }}>
                <img 
                style={{width:"500px",height:"333px"}}
                src={props.ImageBackground}/>
                
                <div style={{flexDirection:'row',display:'flex',justifyContent:'space-evenly',marginTop:"35px",
                width:"500px",marginBottom:'54px'}}>
                    <img style={{width:"94px",height:"94px",borderRadius:"50px"}} src={props.ImageIcon}/>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <a style={{fontSize:"30px",color:COLOR_COLOR_TEXT1}}>{props.Name}</a>
                        <a style={{fontSize:"30px",color:COLOR_COLOR_TEXT1}}>{props.Title}</a>
                    </div>
                </div>
                <div style={{marginRight:"30px",marginLeft:"30px    "}}>
                <a style={{color:COLOR_COLOR_TEXT1,fontSize:'24px', textAlign:"justify",
               }}>{props.Des} </a>
                </div>
            </div>
        </SlidingPane>

    );
};
