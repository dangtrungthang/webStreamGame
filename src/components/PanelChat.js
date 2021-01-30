import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1 } from '../constrant';
import "./styleschat.css"
export default function PanelLeft (props)  {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const [data, setData] = useState([
    {
        name:"traubo007",
        msg:"Solo Ys",
    },
    {
        name:"Sora132",
        msg:"Hi hello",
    },
    {
        name:"ys0150",
        msg:"donate donate ",
    },
    {
        name:"traubo007",
        msg:"hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
    },
    {
        name:"traubo007",
        msg:"Solo Ys",
    },
    {
        name:"traubo007",
        msg:"Solo Ys",
    }
]);

  return (
    
     
      <SlidingPane 
        closeIcon={<div>Some div containing custom close icon.</div>}
        isOpen={props.isOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        from='right'
        width="860px"
        hideHeader={true}
        className="containChatChat"
        overlayClassName="containChatChat"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
         <div style={{ width: "500px", background:"#001427",marginTop:"-30px" }}>
                <div style={{ height: "214px", display: 'flex', alignItems:'center',borderWidth:0,
                borderBottom: 1, borderStyle: 'solid',flexDirection:'column' }}>
                    <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "39px",marginBottom:"27px" }}>BẢNG XẾP HẠNG</a>
                    <div style={{justifyContent:'space-between',display:'flex', width:"80%",marginLeft:"38px",marginRight:"38px",marginBottom:"10px"}}>
                        <img style={{borderRadius:50,width:"84px",height:"84px"}} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/9541e9e6-9982-4233-8796-2191ff148db0-profile_image-50x50.png"}/>
                        <img style={{borderRadius:50,width:"84px",height:"84px"}} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/799841cd-8c2d-4f63-9440-6e198e5e583b-profile_image-70x70.png"}/>
                        <img style={{borderRadius:50,width:"84px",height:"84px"}} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/73e04321-1116-4b09-8a89-2ce801bf3e16-profile_image-70x70.png"}/>
                        <img style={{borderRadius:50,width:"84px",height:"84px"}} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/a785eaed-43ce-46e3-9138-d9f50c4a1af5-profile_image-70x70.png"}/>
                    </div>
                </div>
                <div style={{
                    height: "870px", alignSelf: 'center',borderWidth:0,
                    borderBottom: 1, borderStyle: 'solid',display:'flex',flexDirection:'column',
                    position:'relative'
                }}>
                    <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "20px", marginBottom:"30px",
                    alignSelf: 'center', textAlign: 'center' }}>TRÒ CHUYỆN </a>
                    <div style={{ flexDirection: 'column', display: 'flex' }}>
                        {data.map((item) => {
                            return (
                                <div style={{padding:5}}>
                                    <a style={{ color:"#"+Math.floor(Math.random()*16777215).toString(16), fontSize: "25px", marginTop: "10px",marginLeft:"10px" }}>{item.name} : </a>
                                    <a style={{ color:"#"+Math.floor(Math.random()*16777215).toString(16), fontSize: "25px", marginTop: "10px",marginLeft:"10px" }}>{item.msg}</a>
                                </div>
                            )
                        })}
                    </div>
                    <div style={{ height:'50px',width:'100%',
                   flexDirection:'row',display:'flex', alignItems:'center', 
                    alignSelf:'center',position:'absolute',bottom:'11px',
                }}>
                        <div style={{height:'100%',width:'80%',background:'#708D81',marginLeft:'10px',
                    borderRadius:'10px',borderStyle:'solid',borderWidth:"1px",borderColor:'black'}}>
                        </div>
                        <img style={{width:'40px',height:'40px',marginLeft:'5px'}} src={require('../images/Vector.png')}/>
                    </div>
                </div>
            </div>
      </SlidingPane>
    
  );
};
