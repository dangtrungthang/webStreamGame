import React from 'react'
import "./styles.css"
import { AiFillHeart } from "react-icons/ai";
import CardTeam from '../components/CardTeam/CardTeam';
import ListGridCardTeam from '../components/CardTeam/ListGridCardTeam';
import { COLOR_BACKGROUND, COLOR_BORDER_GAME, COLOR_COLOR_TEXT1 } from '../constrant';
import { slide as Menu } from 'react-burger-menu'

export default function PageSelectTou() {

    return (
        <div style={{display:'flex',flexDirection:'column',background:COLOR_BACKGROUND}}> 
            <div1 className="containerPG">
            <div2 className="wrap">
                <a className="textTitle" style={{color:COLOR_COLOR_TEXT1}}>LEAGUE OFs LENGENDS</a>
                <a className="textDate" style={{color:'white',
                borderColor:COLOR_BORDER_GAME,
                background:COLOR_BORDER_GAME}}>18/01 - 24/01/2020</a>
                <div style={{ marginTop: "30px", display: 'flex', flexDirection: 'column',color:COLOR_COLOR_TEXT1 }}>
                    <a >Địa điểm: Chờ thông báo</a>
                    <a>Giải thưởng: 1.000.000 $</a>
                </div>

                <div style={{ marginTop: "30px" }}>
                    <button className="button">
                        <AiFillHeart style={{ marginRight: "10px" }}
                            size={32} color="red" />
                        <a style={{ color: 'white', fontSize: "15px" }}>sTheo dõi</a>
                    </button>
                    <button className="button">
                        <a style={{ color: 'white', fontSize: "15px" }}>Xem bảng đấu</a>
                    </button>
                </div>
               
            </div2>
          
            
        </div1>
        <a style={{marginLeft:"50px",fontSize:"20px",
        marginTop:"20px",
        marginBottom:"20px",color:COLOR_COLOR_TEXT1}}>Các đội tham dự (8)</a>
            
          <ListGridCardTeam/> 
          <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
       
      </Menu>
          
        </div>
        
    )
}