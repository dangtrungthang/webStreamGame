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
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1,DATA_CA_NHAN,DATA_GIAI_DAU } from '../constrant';
import Search from '../components/Search/Search';
import ItemMatchDetail from '../components/CardTeam/ItemMatchDetail';
import GridList from "react-gridlist";
import { List } from '@material-ui/core';

export default function PageTournament() {

    const [isIndex, setIndex] = useState(0);
    const [data,setData]=useState(DATA_GIAI_DAU);
    

   

    const getGridGap = (elementWidth, windowHeight) => (elementWidth > 720 && windowHeight > 480) ? 25: 25;

    const getColumnCount = (elementWidth) => Math.floor(elementWidth / 418);

    const getWindowMargin = (windowHeight) => Math.round(windowHeight * 1.5);

    const getItemData = (image, columnWidth) => {
        let imageRatio = image.height / image.width
        let adjustedHeight = Math.round(columnWidth * imageRatio)
        return {
            key: image.url,
            height: adjustedHeight,
        }
    }
  
    const LoadList=()=>{
        if(isIndex==2){
            return(
            <GridList
                    items={data}
                    getGridGap={getGridGap}
                    getColumnCount={getColumnCount}
                    getWindowMargin={getWindowMargin}
                    getItemData={getItemData}
                    renderItem={(item) => {
                        if(isIndex==2){
                            return (
                                <CardTeam/>
                            )
                        }
                        
                    }}
                />)
        }else if(isIndex==0){
           return(
              <div>
                   <ItemMatchDetail/>
               <ItemMatchDetail/>
               <ItemMatchDetail/>
               <ItemMatchDetail/>
                  </div>
           )
        }
    }
    return (
        <div className='wrapPageGame' style={{ background: COLOR_BACKGROUND }}>
            <div1 className="containerPG1">
                <div2 className="wrap">
                    <a className="textTitle" style={{ color: COLOR_COLOR_TEXT1 }}> LEAGUE OF LENGENDS</a>
                    <div style={{ marginTop: '20px' }}>
                        <TagGame2 name="MOBA" />
                        <TagGame2 name="Hành động" />
                        <TagGame2 name="Chiến thuật" />
                    </div>
                    <div style={{
                        marginTop: "30px", display: 'flex',
                        color: COLOR_COLOR_TEXT1,
                        flexDirection: 'column'
                    }}>
                        <a style={{fontSize:"24px"}}>Liên Minh Huyền Thoại là một trò chơi video đấu trường trận chiến trực tuyến nhiều người chơi được Riot Games phát triển và phát hành trên nền tảng Windows và MacOS, lấy cảm hứng từ bản mod Defense of the Ancients cho trò chơi video Warcraft III: Frozen Throne.</a>
                    </div>

                    <div style={{  position:"absolute", bottom:"50px" }}>
                        <button className="button">
                            <AiFillHeart style={{  }}
                                size={35} color="red" />
                            <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", fontWeight: 'bold' }}>Theo dõi</a>
                        </button>
                        <button className="button">
                            <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", fontWeight: 'bold' }}>Xem bảng đấu</a>
                        </button>
                    </div>

                </div2>


            </div1>
            <div style={{
                justifyContent: 'space-between', display: 'flex',
                width: "1000px", marginTop: "20px",
                marginLeft: '50px'
            }}>
                <a style={isIndex == 0 ? { fontSize: "48px", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color: COLOR_COLOR_TEXT1, fontSize: "48px" }} onClick={() => {
                    setIndex(0)
                    setData(DATA_CA_NHAN)
                }}>Lịch đấu</a>

                <a style={isIndex == 1 ? { fontSize: "48px", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color: COLOR_COLOR_TEXT1, fontSize: "48px" }} onClick={() => {
                    setIndex(1)
                    setData(DATA_GIAI_DAU)
                }}>Bảng đấu</a>
                <a style={isIndex == 2 ? { fontSize: "48px", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color: COLOR_COLOR_TEXT1, fontSize: "48px" }} onClick={() => {
                    setIndex(2)
                }}>Các đội tham dự </a>
            </div>
            <div style={{
                marginTop: '20px',
                marginBottom: '5px',
                marginLeft: "50px",
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
                <div style={{ marginLeft: "-50px" }}>
                    <Search />
                </div>
                <div style={{
                    height: "30px", display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Dropdown  placeholder="Bộ lọc" />
                    <Dropdown placeholder="Sắp xếp" />
                </div>
            </div>
           
                <div style={{marginLeft:"50px"}}>
                    {LoadList()}
                
                </div>
        </div>

    )
}