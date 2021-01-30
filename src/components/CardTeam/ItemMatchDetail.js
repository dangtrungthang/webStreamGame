import React from 'react';
import { Link } from 'react-router-dom';



export default function ItemMatchDetail(props){


    return(
        <div style={{height:"200px",marginRight:"45px",marginBottom:"10px",
        flexDirection:"row",display:'flex',position:'relative',
        }}>
            <div style={{width:"480px",height:"100%",
            flexDirection:'column',display:'flex', justifyContent:'space-evenly', alignItems:'center',
            }}>
                <a style={{fontSize:"48px",fontFamily:"Roboto",color:props.fontColor}}>{props.time}</a>
                <a style={{fontSize:"48px",fontFamily:"Roboto",color:props.fontColor}}>{props.date}</a>
                <div>
                    {props.arrayStart.map((itme)=>{
                        return(
                            <img style={{width:'41.67px',height:"39.58px"}} src={require("../../images/Vector-2.png")}/>
                        )
                    })}
                </div>
            </div>
            <div style={{width:"480px",height:"100%",
            flexDirection:'row',display:'flex',  alignItems:'center',position:'relative'
            }}>
                <a style={{fontSize:"48px",fontFamily:"Roboto",position:'absolute',right:'205px',color:props.fontColor}}>{props.teamName1}</a>
                <img src={props.logo1} style={{width:'75px',height:'75px',position:'absolute',right:'110px'}}/>
                <a style={{fontSize:"48px",position:'absolute',right:'60px',fontFamily:"Roboto",color:props.fontColor}}>{props.tiSo1}</a>
            </div>
            <div style={{width:"480px",height:"100%",
            flexDirection:'row',display:'flex', justifyContent:'space-evenly', alignItems:'center',
            }}>
                  <a style={{fontSize:"48px",fontFamily:"Roboto",color:props.fontColor,position:'absolute',left:'960px'}}>{props.tiSo2}</a>
                  <img src={props.logo2} style={{width:'75px',height:'75px',position:'absolute',left:'1010px'}}/>
                <a style={{fontSize:"48px",fontFamily:"Roboto",color:props.fontColor,position:'absolute',left:'1100px'}}>{props.teamName2}</a>
            </div>
            <div style={{width:"480px",height:"100%",
            flexDirection:'column',display:'flex', justifyContent:'space-evenly', alignItems:'center',
            }}>
                <a style={{fontSize:"48px",fontFamily:"Roboto",color:props.fontColor}}>{props.thele}</a>
               <Link to="/player"> <img src={props.logoTheLe} style={{width:'41.67px',height:'33.33px'}}/></Link>
            </div>
            <a style={{position:'absolute',
            fontSize:"48px",fontFamily:"Roboto",color:props.fontColor,display:'flex',left:"900px",top:"70px"}}>-</a>
        </div>
        
    )
}