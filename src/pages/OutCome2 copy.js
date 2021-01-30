
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1 } from '../constrant';
import {TagGame} from '../components/Tag/TagGame'
import {TagGame2 } from '../components/Tag/TagGame2'
import screenfull from 'screenfull'
import PanelLeft from '../components/PanelChat';
import PanelInfo from '../components/PanelInfo';
import { Slider } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 8,
        padding: '15px 0',
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 5,
    },
    rail: {
        height: 5,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: 'red',
        height: 15,
        width: 3,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

export default function OutCome2() {
    const [isFullScreen, setFullScreen] = useState(false)
    const [widthVideo, setWidthVideo] = useState("1529px")
    const [heightVideo, setHeightVideo] = useState("861px")
    const [bottomBar, setBottomBar] = useState("10px")
    const [widthSlider, setWidthSlider] = useState("1286px")
    const [isOpenRight, setIsOpenRight] = useState(false)
    const [isOpenLeft, setIsOpenLeft] = useState(false)
    const [firt, setFrist] = useState(false)
    const [progressVideo, setProgressVideo] = useState(0)
    const [data, setData] = useState([
        {
            name: "traubo007",
            msg: "Solo Ys",
        },
        {
            name: "Sora132",
            msg: "Hi hello",
        },
        {
            name: "ys0150",
            msg: "donate donate ",
        },
        {
            name: "traubo007",
            msg: "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        },
        {
            name: "traubo007",
            msg: "Solo Ys",
        },
        {
            name: "traubo007",
            msg: "Solo Ys",
        }
    ]);

    useEffect(() => {
        if (isFullScreen) {
            setWidthVideo("1920px");
            setHeightVideo("1080px")
            setBottomBar("50px")
            setWidthSlider("1680px")
        } else {
            setWidthVideo("1529px");
            setHeightVideo("861px")
            setBottomBar("180px")
            setWidthSlider("1286px")
        }
    }, [isFullScreen])

    const { x, y } = useMousePosition();
    useEffect(() => {
        if (!firt) { setFrist(true) } else {
            if (x > 1600 && y < 800 && y > 200) {
                setIsOpenRight(!isOpenRight);
            } else if (x < 500 && y < 800 && y > 200) {
                setIsOpenLeft(!isOpenLeft)
            } else {
                setIsOpenLeft(false)
                setIsOpenRight(false)
            }
        }

    }, [x])
    const hasMovedCursor = typeof x === "number" && typeof y === "number";

    const player = useRef(null);


    return (
        <div style={{ display: 'flex', background: COLOR_BACKGROUND, position: 'relative' }}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <div style={{ position: 'absolute', bottom: bottomBar, justifyItems: 'center', display: 'flex' }}>
                        <img style={{ width: "32px", height: "32px", marginLeft: "19px" }} src={require('../images/pause.png')} />
                        <IOSSlider marks={[
                            {
                                value: 0,
                            },
                            {
                                value: 20,
                            },
                            {
                                value: 37,
                            },
                            {
                                value: 100,
                            },
                        ]}
                            //value={progressVideo}
                            style={{
                                height: "10px", width: widthSlider, color: 'red',
                                marginLeft: "20px",
                            }} />
                        <img style={{ width: "32px", height: "32px", marginLeft: "19px" }} src={require('../images/volume-1.png')} />
                        <img style={{ width: "32px", height: "32px", marginLeft: "19px" }} src={require('../images/settings.png')} />
                        <img style={{ width: "32px", height: "32px", marginLeft: "19px" }} src={require('../images/maximize.png')}
                            onClick={() => setFullScreen(!isFullScreen)} />
                    </div>
                    <PanelLeft isOpen={isOpenRight} />
                    <PanelInfo isOpen={isOpenLeft} />
                </div>

                <ReactPlayer
                    loop={true}
                    onSeek={(second) => { setProgressVideo((second)) }}
                    ref={player}
                    playing={true}
                    config={{
                        youtube: {
                            playerVars: { modestbranding: 0 }
                        }
                    }}
                    width={widthVideo} height={heightVideo} url='https://youtu.be/M98OFTWXj_I' />

                <div style={{marginLeft:"51px",marginTop:"31px",display:'flex',flexDirection:'row',
            color:COLOR_COLOR_TEXT1,fontFamily:'Roboto'}}>
                    <img style={{ width: "94px", height: "94px",marginRight:"16px", borderRadius: "50px" }} src="https://th.bing.com/th/id/OIP.RXnQj8fTisD5HbRiQ3DaiAHaHa?w=173&h=180&c=7&o=5&pid=1.7" />
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <a style={{fontSize:"30px",marginBottom:'10px'}}>LCK Spring 2019:  Jin Air GreenWings vs SK telecom T1</a>
                        <a style={{fontSize:"20px"}}>Vietnam Esports TV</a>
                        <div style={{marginTop:'10px',marginLeft:"-20px",display:'flex'}}>
                            <TagGame name="MOBA"/>
                            <TagGame name="Action"/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "391px", background: COLOR_BACKGROUND }}>
                <div style={{
                    height: "159px", display: 'flex', alignItems: 'center',
                    borderBottom: 1, borderStyle: 'solid', flexDirection: 'column'
                }}>
                    <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "12px", marginBottom: "27px",fontFamily:'Roboto' }}>BẢNG XẾP HẠNG</a>
                    <div style={{ justifyContent: 'space-between', display: 'flex', width: "80%", marginLeft: "38px", marginRight: "38px", marginBottom: "10px" }}>
                        <img style={{ borderRadius: 50, width: "61px", height: "61px" }} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/9541e9e6-9982-4233-8796-2191ff148db0-profile_image-50x50.png"} />
                        <img style={{ borderRadius: 50, width: "61px", height: "61px" }} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/799841cd-8c2d-4f63-9440-6e198e5e583b-profile_image-70x70.png"} />
                        <img style={{ borderRadius: 50, width: "61px", height: "61px" }} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/73e04321-1116-4b09-8a89-2ce801bf3e16-profile_image-70x70.png"} />
                        <img style={{ borderRadius: 50, width: "61px", height: "61px" }} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/a785eaed-43ce-46e3-9138-d9f50c4a1af5-profile_image-70x70.png"} />
                    </div>
                </div>
                <div style={{
                    height: "866px", alignSelf: 'center',
                    borderBottom: 1, borderStyle: 'solid', display: 'flex', flexDirection: 'column',
                    position: 'relative'
                }}>
                    <a style={{
                        color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "20px", marginBottom: "30px",
                        alignSelf: 'center', textAlign: 'center',fontFamily:'Roboto'
                    }}>TRÒ CHUYỆN </a>
                    <div style={{ flexDirection: 'column', display: 'flex' }}>
                        {data.map((item) => {
                            return (
                                <div style={{ padding: 5 }}>
                                    <a style={{ color: "#" + Math.floor(Math.random() * 16777215).toString(16), fontSize: "15px", marginTop: "10px", marginLeft: "10px",fontFamily:'Roboto' }}>{item.name} : </a>
                                    <a style={{ color: "#" + Math.floor(Math.random() * 16777215).toString(16), fontSize: "15px", marginTop: "10px", marginLeft: "10px" ,fontFamily:'Roboto' }}>{item.msg}</a>
                                </div>
                            )
                        })}
                    </div>
                    <div style={{
                        height: '50px', width: '100%',
                        flexDirection: 'row', display: 'flex', alignItems: 'center',
                        alignSelf: 'center', position: 'absolute', bottom: '11px',
                    }}>
                        <div style={{
                            height: '100%', width: '80%', background: '#708D81', marginLeft: '10px',
                            borderRadius: '10px', borderStyle: 'solid', borderWidth: "1px", borderColor: 'black'
                        }}>
                        </div>
                        <img style={{ width: '40px', height: '40px', marginLeft: '5px' }} src={require('../images/Vector.png')} />
                    </div>
                </div>
            </div>
        </div>
    )
}