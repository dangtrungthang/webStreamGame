import React, { useState } from 'react'
import "./styles.css"
import { AiFillHeart } from "react-icons/ai";
import CardTeam from '../components/CardTeam/CardTeam';
import ListGridCardTeam from '../components/CardTeam/ListGridCardTeam';
import { TagGame } from '../components/Tag/TagGame';
import { TagGame2 } from '../components/Tag/TagGame2';
import Dropdown from '../components/Dropdown/Dropdown';
import ListCardVideo1 from '../components/CardVideo/ListCardVideo1';
import { Link } from 'react-router-dom';
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1 } from '../constrant';
import Search from '../components/Search/Search';
import ListGridCardTou from '../components/CardVideo/ListGridCardTou';

export default function PageGame() {

    const [isIndex, setIndex] = useState(0)

    const _renderList=()=>{
        if(isIndex==0){
            return(
                <ListCardVideo1/>
            )
        }else if(isIndex==1){
            return(
                <ListGridCardTou/>
            )
        }
    }
    return (
        <div className='wrapPageGame' style={{background:COLOR_BACKGROUND}}>
            <div1 className="containerPG1">
                <div2 className="wrap">
                    <a className="textTitle" style={{color:COLOR_COLOR_TEXT1}}> LEAGUE OF LENGENDS</a>
                    <div style={{ marginTop: '20px' }}>
                        <TagGame2 name="MOBA" />
                        <TagGame2 name="MOBA" />
                        <TagGame2 name="MOBA" />
                    </div>
                    <div style={{ marginTop: "30px", display: 'flex', 
                    color:COLOR_COLOR_TEXT1,
                    flexDirection: 'column' }}>
                        <a>Liên Minh Huyền Thoại là một trò chơi video đấu trường trận chiến trực tuyến nhiều người chơi được Riot Games phát triển và phát hành trên nền tảng Windows và MacOS, lấy cảm hứng từ bản mod Defense of the Ancients cho trò chơi video Warcraft III: Frozen Throne.</a>
                    </div>

                    <div style={{ marginTop: "30px" }}>
                        <button className="button">
                            <AiFillHeart style={{ marginRight: "10px" }}
                                size={32} color="red" />
                            <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "20px",fontWeight:'bold' }}>Theo dõi</a>
                        </button>
                        <button className="button">
                            <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "20px",fontWeight:'bold' }}>Xem bảng đấu</a>
                        </button>
                    </div>

                </div2>


            </div1>
            <div style={{
                justifyContent: 'space-between', display: 'flex',
                width: "500px", marginTop: "20px",
                marginLeft: '50px'
            }}>
                <a style={isIndex == 0 ? { fontSize: "25px", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color:COLOR_COLOR_TEXT1,fontSize: "25px" }} onClick={() => {
                    setIndex(0)
                }}>Cá nhân</a>
              
               <a style={isIndex == 1 ? { fontSize: "25px", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color:COLOR_COLOR_TEXT1,fontSize: "25px" }} onClick={() => {
                    setIndex(1)
                }}>Giải đấu</a>
                <a style={isIndex == 2 ? { fontSize: "25px", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color:COLOR_COLOR_TEXT1,fontSize: "25px" }} onClick={() => {
                    setIndex(2)
                }}>Hướng dẫn</a>
            </div>
            <div style={{
                marginTop: '20px',
                marginBottom: '5px',
                marginLeft: "50px",
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
               <div style={{marginLeft:"-50px"}}>
               <Search/>
                   </div>
                <div style={{
                    height: "30px", display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Dropdown placeholder="Bộ lọc" />
                    <Dropdown placeholder="Sắp xếp" />
                </div>
            </div>
            {_renderList()}
              


        </div>

    )
}