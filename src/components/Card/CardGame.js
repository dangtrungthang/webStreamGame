import React from 'react'
import { COLOR_BORDER_GAME, COLOR_COLOR_TEXT1, COLOR_NAME_GAME } from '../../constrant'
import { AiOutlineMore } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import "./style.css"
export default function CardGame(props) {

    return (
        <div className="_column" style={{ width: "200px", borderColor: COLOR_BORDER_GAME, borderWidth: "1px", borderStyle: 'solid' }}>
            <img src={props.src}
                style={{ width: "198px", height: "266px" }} />
            <div style={{
                height: "124px", display: 'flex', flexDirection: 'column',
                padding: '5px'
            }}>
                <div className="_row" style={{
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    ,display:'flex',
                    marginBottom:'0px'
                }}>
                    <a style={{ color: COLOR_COLOR_TEXT1 }}>{props.NameGame}</a>
                    <AiOutlineMore />
                </div>
                <div>
                    <a style={{ color: COLOR_NAME_GAME, fontSize: "12px", color: "gray" }}>{props.Viewer}</a>
                </div>
                <div className="_row">
                    <div className="_borderTag" style={{
                        borderColor: COLOR_BORDER_GAME,
                        background: COLOR_BORDER_GAME, color: 'white',
                        fontSize: "10px", justifyContent: 'center', alignItems: 'center', display: 'flex'
                    }}>
                        <a>FPS</a>
                    </div>
                    <div className="_borderTag"
                        style={{
                            borderColor: COLOR_BORDER_GAME,
                            background: COLOR_BORDER_GAME, color: 'white',
                            fontSize: "10px", justifyContent: 'center', alignItems: 'center', display: 'flex'
                        }}>
                        <a>Hành động</a>
                    </div>
                </div>
                <button className="_button">
                    <AiFillHeart color="red" />
                    <a1 className="nameButton" style={{ color: COLOR_NAME_GAME }}>Theo dõi</a1>
                </button>
            </div>
        </div>
    )
}