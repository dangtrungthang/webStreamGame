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
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1,DATA_CA_NHAN } from '../constrant';
import Search from '../components/Search/Search';
import ListGridCardTou from '../components/CardVideo/ListGridCardTou';
import GridList from "react-gridlist";
import CardVideo1 from '../components/CardVideo/CardVideo1';
import CardTou from '../components/CardVideo/CardTou';

export default function PageGame() {

    const [isIndex, setIndex] = useState(0);
    const [data,setData]=useState(DATA_CA_NHAN)

    const images = Array.from({ length: 20 }, (_, i) => {
        let width = 344;
       
        let height = 270;
        return {
            url: `https://cdn.shopify.com/s/files/1/0747/3829/products/mL3925_1024x1024.jpg?v=1574110214`,
            width,
            height,
        }
    })

    const getGridGap = (elementWidth, windowHeight) => (elementWidth > 720 && windowHeight > 480) ? 25: 25;

    const getColumnCount = (elementWidth) => Math.floor(elementWidth / 344);

    const getWindowMargin = (windowHeight) => Math.round(windowHeight * 1.5);

    const getItemData = (image, columnWidth) => {
        let imageRatio = image.height / image.width
        let adjustedHeight = Math.round(columnWidth * imageRatio)
        return {
            key: image.url,
            height: adjustedHeight,
        }
    }
    const selectDataExamole=()=>{
        if(isIndex==0){
            return DATA_CA_NHAN;
        }
        return null;
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
                width: "800px", marginTop: "20px",
                marginLeft: '50px'
            }}>
                <a style={isIndex == 0 ? { fontSize: "48px", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color: COLOR_COLOR_TEXT1, fontSize: "48px" }} onClick={() => {
                    setIndex(0)
                    setData(DATA_CA_NHAN)
                }}>Cá nhân</a>

                <a style={isIndex == 1 ? { fontSize: "48px", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color: COLOR_COLOR_TEXT1, fontSize: "48px" }} onClick={() => {
                    setIndex(1)
                }}>Giải đấu</a>
                <a style={isIndex == 2 ? { fontSize: "48px", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color: COLOR_COLOR_TEXT1, fontSize: "48px" }} onClick={() => {
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
                <GridList
                    items={data}
                    getGridGap={getGridGap}
                    getColumnCount={getColumnCount}
                    getWindowMargin={getWindowMargin}
                    getItemData={getItemData}
                    renderItem={(item) => {
                        if(isIndex==0){
                            return (
                                <CardVideo1 ImgVideo={item.ImageVideo}  
                                ImgLogo={item.Logo}
                                Title={item.Title}
                                Chanel={item.Chanel}
                                Viewer={item.Viewer}
                                />
                            )
                        }else if(isIndex==1){
                            return (
                                <CardTou/>
                            )
                        }
                        
                    }}
                />
                </div>
        </div>

    )
}