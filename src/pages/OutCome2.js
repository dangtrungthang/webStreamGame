
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1 } from '../constrant';

export default function OutCome2() {
    const [data, setData] = useState([{}, {}]);

    useEffect(() => {

    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <ReactPlayer width="1529px" height="861px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            <div style={{ width: "391px", background: COLOR_BACKGROUND }}>
                <div style={{ height: "214px", display: 'flex', justifyContent: 'center', borderBottom: 1, borderStyle: 'solid' }}>
                    <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "39px" }}>BẢNG XẾP HẠNG</a>
                </div>
                <div style={{
                    height: "866px", alignSelf: 'center',
                    borderBottom: 1, borderStyle: 'solid'
                }}>
                    <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "39px", alignSelf: 'center', textAlign: 'center' }}>TRÒ CHUYỆN</a>
                    <div style={{ flexDirection: 'column', display: 'flex' }}>
                        {data.map((item) => {
                            return (
                                <div style={{padding:5,borderRadius:'10px', marginBottom:"10px",width:"166px",
                                background:COLOR_COLOR_TEXT1,
                                 borderColor:'transparent',borderWidth:1}}>
                                    <a style={{ color:"blue", fontSize: "15px", marginTop: "10px" }}>traubo007: Hello</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}