import React from 'react'
import "./styles.css"
import { AiFillHeart } from "react-icons/ai";
import CardTeam from '../components/CardTeam/CardTeam';
import ListGridCardTeam from '../components/CardTeam/ListGridCardTeam';
export default function PageSelectTou() {

    return (
        <div style={{display:'flex',flexDirection:'column'}}> 
            <div1 className="containerPG">
            <div2 className="wrap">
                <a className="textTitle">LEAGUE OF LENGENDS</a>
                <a className="textDate">18/01 - 24/01/2020</a>
                <div style={{ marginTop: "30px", display: 'flex', flexDirection: 'column' }}>
                    <a >Địa điểm: Chờ thông báo</a>
                    <a>Giải thưởng: 1.000.000 $</a>
                </div>

                <div style={{ marginTop: "30px" }}>
                    <button className="button">
                        <AiFillHeart style={{ marginRight: "10px" }}
                            size={32} color="red" />
                        <a style={{ color: 'white', fontSize: "15px" }}>Theo dõi</a>
                    </button>
                    <button className="button">
                        <a style={{ color: 'white', fontSize: "15px" }}>Xem bảng đấu</a>
                    </button>
                </div>
               
            </div2>
          
            
        </div1>
        <a style={{marginLeft:"50px",fontSize:"20px",
        marginTop:"20px",
        marginBottom:"20px"}}>Các đội tham dự (8)</a>
            
          <ListGridCardTeam/> 
          
        </div>
        
    )
}