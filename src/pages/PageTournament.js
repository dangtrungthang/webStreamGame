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
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1, DATA_CA_NHAN, DATA_GIAI_DAU, DATA_TEAM } from '../constrant';
import Search from '../components/Search/Search';
import ItemMatchDetail from '../components/CardTeam/ItemMatchDetail';
import GridList from "react-gridlist";
import { List } from '@material-ui/core';

export default function PageTournament() {

    const [isIndex, setIndex] = useState(0);
    const [data, setData] = useState(DATA_GIAI_DAU);




    const getGridGap = (elementWidth, windowHeight) => (elementWidth > 720 && windowHeight > 480) ? 25 : 25;

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

    const [dataLichThiDau, setDataLichThiDau] = useState([{
        fontColor: "#708D81",
        time: "22:30",
        date: "19/02/2021",
        arrayStart: [{}, {}, {}, {}],
        teamName1: "Astrila",
        logo1: require("../images/teamCS1.png"),
        tiSo1: "1",
        teamName2: "Complex",
        logo2: require("../images/teamCS2.png"),
        tiSo2: "2",
        logoTheLe:require("../images/Vector-daxem.png"),
        thele:"BO3"
    },
    {
        fontColor: "red",
        time: "2:10",
        date: "22/02/2021",
        arrayStart: [ {}, {}, {}],
        teamName1: "G2",
        logo1: require("../images/teamG2.png"),
        tiSo1: "1",
        teamName2: "FURIA",
        logo2: require("../images/teamFur.png"),
        tiSo2: "1",
        logoTheLe:require("../images/Vector-dangdau.png"),
        thele:"BO3"
    },
    {
        fontColor: COLOR_COLOR_TEXT1,
        time: "11:25",
        date: "10/03/2021",
        arrayStart: [{}, {}, {}, {}],
        teamName1: "Vitality",
        logo1: require("../images/teamVar.png"),
        tiSo1: "1",
        teamName2: "Evil Geniuses",
        logo2: require("../images/teamVar2.png"),
        tiSo2: "2",
        logoTheLe:require("../images/Vector-chuadanh.png"),
        thele:"BO3"
    }])
    const LoadList = () => {
        if (isIndex == 2) {
            return (
                <GridList
                    items={data}
                    getGridGap={getGridGap}
                    getColumnCount={getColumnCount}
                    getWindowMargin={getWindowMargin}
                    getItemData={getItemData}
                    renderItem={(item) => {
                        if (isIndex == 2) {
                            return (
                                <CardTeam ImageVideo={item.ImageVideo}
                                    TeamName={item.TeamName} />
                            )
                        }

                    }}
                />)
        } else if (isIndex == 0) {
            return (
                <div style={{ background: 'white' }}>
                    {dataLichThiDau.map((item) => {
                        return (
                            <div>
                                <ItemMatchDetail 
                                fontColor={item.fontColor}
                                time={item.time}
                                date={item.date}
                                arrayStart={item.arrayStart}
                                teamName1={item.teamName1}
                                logo1={item.logo1}
                                tiSo1={item.tiSo1}
                                teamName2={item.teamName2}
                                logo2={item.logo2}
                                tiSo2={item.tiSo2} 
                                logoTheLe={item.logoTheLe}
                                thele={item.thele} />
                                <div style={{ background: 'red', height: '2px', width: '103%', marginLeft: "-50px" }}></div>

                            </div>
                        )
                    })}
                </div>
            )
        } else if (isIndex == 1) {
            return (
                <img src={require("../images/giaidau.png")} />
            )
        }
    }
    return (
        <div className='wrapPageGame' style={{ background: 'white' }}>
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
                        <a style={{ fontSize: "24px", fontFamily: "Roboto" }}>Liên Minh Huyền Thoại là một trò chơi video đấu trường trận chiến trực tuyến nhiều người chơi được Riot Games phát triển và phát hành trên nền tảng Windows và MacOS, lấy cảm hứng từ bản mod Defense of the Ancients cho trò chơi video Warcraft III: Frozen Throne.</a>
                    </div>

                    <div style={{ position: "absolute", bottom: "50px" }}>
                        <button className="button">
                            <AiFillHeart style={{}}
                                size={35} color="red" />
                            <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", fontWeight: 'bold', fontFamily: "Roboto" }}>Theo dõi</a>
                        </button>
                        <button className="button">
                            <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", fontWeight: 'bold', fontFamily: "Roboto" }}>Xem bảng đấu</a>
                        </button>
                    </div>

                </div2>


            </div1>
            <div style={{
                background: COLOR_BACKGROUND, width: '100%', height: '90px',
                alignItems: 'center', display: 'flex',
                marginTop: '-20px'
            }}>
                <div style={{
                    justifyContent: 'space-between', display: 'flex',
                    width: "1000px", marginTop: "20px",
                    marginLeft: '50px', background: COLOR_BACKGROUND
                }}>
                    <a style={isIndex == 0 ? { fontSize: "48px", fontFamily: "Roboto", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color: COLOR_COLOR_TEXT1, fontSize: "48px", fontFamily: "Roboto" }} onClick={() => {
                        setIndex(0)
                        setData(DATA_CA_NHAN)
                    }}>Lịch đấu</a>

                    <a style={isIndex == 1 ? { fontSize: "48px", fontFamily: "Roboto", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color: COLOR_COLOR_TEXT1, fontSize: "48px", fontFamily: "Roboto" }} onClick={() => {
                        setIndex(1)
                        setData(DATA_TEAM)
                    }}>Bảng đấu</a>
                    <a style={isIndex == 2 ? { fontSize: "48px", fontFamily: "Roboto", color: COLOR_COLOR_TEXT1, textDecorationLine: 'underline' } : { color: COLOR_COLOR_TEXT1, fontSize: "48px", fontFamily: "Roboto" }} onClick={() => {
                        setIndex(2)
                        setData(DATA_TEAM)
                    }}>Các đội tham dự </a>
                </div>
            </div>


            <div style={{ marginLeft: "50px" }}>
                {LoadList()}

            </div>
        </div>

    )
}