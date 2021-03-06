
import React, { useEffect, useRef, useState, useS } from 'react';
import ReactPlayer from 'react-player'
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1 } from '../constrant';
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TagGame } from '../components/Tag/TagGame'
import { TagGame2 } from '../components/Tag/TagGame2'
import screenfull from 'screenfull'
import PanelLeft from '../components/PanelChat';
import PanelInfo from '../components/PanelInfo';
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import screenful from "screenfull";
import Controls from "../components/Controls";
import YouTubePlayer from 'react-player/lib/players/YouTube'

const useStyles = makeStyles((theme) => ({
    playerWrapper: {
        width: "100%",

        position: "relative",
        // "&:hover": {
        //   "& $controlsWrapper": {
        //     visibility: "visible",
        //   },
        // },
    },

    controlsWrapper: {
        visibility: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    topControls: {
        display: "flex",
        justifyContent: "flex-end",
        padding: theme.spacing(2),
    },
    middleControls: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    bottomWrapper: {
        display: "flex",
        flexDirection: "column",

        // background: "rgba(0,0,0,0.6)",
        // height: 60,
        padding: theme.spacing(2),
    },

    bottomControls: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // height:40,
    },

    button: {
        margin: theme.spacing(1),
    },
    controlIcons: {
        color: "#777",

        fontSize: 50,
        transform: "scale(0.9)",
        "&:hover": {
            color: "#fff",
            transform: "scale(1)",
        },
    },

    bottomIcons: {
        color: "#999",
        "&:hover": {
            color: "#fff",
        },
    },

    volumeSlider: {
        width: 100,
    },
}));
const format = (seconds) => {
    if (isNaN(seconds)) {
        return `00:00`;
    }
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    if (hh) {
        return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    }
    return `${mm}:${ss}`;
};
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
let count = 0;

export default function OutCome2Canhan() {
    const [isFullScreen, setFullScreen] = useState(false)
    const [widthVideo, setWidthVideo] = useState("1529px")
    const [heightVideo, setHeightVideo] = useState("861px")
    const [bottomBar, setBottomBar] = useState("10px")
    const [widthSlider, setWidthSlider] = useState("1286px")


    const [progressVideo, setProgressVideo] = useState(0)
    const classes = useStyles();
    const [showControls, setShowControls] = useState(false);
    // const [count, setCount] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
    const [bookmarks, setBookmarks] = useState([]);
    const [state, setState] = useState({
        pip: false,
        playing: true,
        controls: false,
        light: false,

        muted: true,
        played: 0,
        duration: 0,
        playbackRate: 1.0,
        volume: 1,
        loop: false,
        seeking: false,
    });

    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const controlsRef = useRef(null);
    const [isFullScreem, setIsFullScreen] = useState(false)
    const canvasRef = useRef(null);
    const {
        playing,
        controls,
        light,

        muted,
        loop,
        playbackRate,
        pip,
        played,
        seeking,
        volume,
    } = state;

    const handlePlayPause = () => {
        setState({ ...state, playing: !state.playing });
    };

    const handleRewind = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
    };

    const handleFastForward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
    };

    const handleProgress = (changeState) => {
        if (count > 3) {
            controlsRef.current.style.visibility = "hidden";
            count = 0;
        }
        if (controlsRef.current.style.visibility == "visible") {
            count += 1;
        }
        if (!state.seeking) {
            setState({ ...state, ...changeState });
        }
    };

    const handleSeekChange = (e, newValue) => {
        console.log({ newValue });
        setState({ ...state, played: parseFloat(newValue / 100) });
    };

    const handleSeekMouseDown = (e) => {
        setState({ ...state, seeking: true });
    };

    const handleSeekMouseUp = (e, newValue) => {
        console.log({ value: e.target });
        setState({ ...state, seeking: false });
        // console.log(sliderRef.current.value)
        playerRef.current.seekTo(newValue / 100, "fraction");
    };

    const handleDuration = (duration) => {
        setState({ ...state, duration });
    };

    const handleVolumeSeekDown = (e, newValue) => {
        setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
    };
    const handleVolumeChange = (e, newValue) => {
        // console.log(newValue);
        setState({
            ...state,
            volume: parseFloat(newValue / 100),
            muted: newValue === 0 ? true : false,
        });
    };

    const toggleFullScreen = () => {
        screenful.toggle(playerContainerRef.current);
        setIsFullScreen(!isFullScreem);
    };

    const handleMouseMove = () => {
        console.log("mousemove");
        controlsRef.current.style.visibility = "visible";
        count = 0;
    };

    const hanldeMouseLeave = () => {
        controlsRef.current.style.visibility = "hidden";
        count = 0;
    };

    const handleDisplayFormat = () => {
        setTimeDisplayFormat(
            timeDisplayFormat == "normal" ? "remaining" : "normal"
        );
    };

    const handlePlaybackRate = (rate) => {
        setState({ ...state, playbackRate: rate });
    };

    const hanldeMute = () => {
        setState({ ...state, muted: !state.muted });
    };

    const addBookmark = () => {
        const canvas = canvasRef.current;
        canvas.width = 160;
        canvas.height = 90;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            playerRef.current.getInternalPlayer(),
            0,
            0,
            canvas.width,
            canvas.height
        );
        const dataUri = canvas.toDataURL();
        canvas.width = 0;
        canvas.height = 0;
        const bookmarksCopy = [...bookmarks];
        bookmarksCopy.push({
            time: playerRef.current.getCurrentTime(),
            display: format(playerRef.current.getCurrentTime()),
            image: dataUri,
        });
        setBookmarks(bookmarksCopy);
    };

    const currentTime =
        playerRef && playerRef.current
            ? playerRef.current.getCurrentTime()
            : "00:00";

    const duration =
        playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
    const elapsedTime =
        timeDisplayFormat == "normal"
            ? format(currentTime)
            : `-${format(duration - currentTime)}`;

    const totalDuration = format(duration);

    const { x, y } = useMousePosition();
    const [isOpenRight, setIsOpenRight] = useState(false)
    const [isOpenLeft, setIsOpenLeft] = useState(false)
    const [firt, setFrist] = useState(false)
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

    const render11 = () => {
        if (isOpenLeft && isFullScreem) {
            return (
                <div style={{ background: COLOR_BACKGROUND, opacity: 0.98, width: '500px', height: "100%", position: 'absolute' }}>
                    <div style={{ width: "500px", background: "transparent", }}>
                        <img
                            style={{ width: "500px", height: "333px" }}
                            src={"https://toptwitchstreamers.com/wp-content/uploads/2020/01/PinkWardlol-compressor.jpg"} />

                        <div style={{
                            flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', marginTop: "35px",
                            width: "500px", marginBottom: '54px'
                        }}>
                            <img style={{ width: "94px", height: "94px", borderRadius: "50px" }} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/728b6989-ba75-438a-9b7f-f4073d97a479-profile_image-150x150.png"} />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <a style={{ fontSize: "30px", color: COLOR_COLOR_TEXT1 }}>PinkWordlol</a>
                                <a style={{ fontSize: "30px", color: COLOR_COLOR_TEXT1 }}>Master Player</a>
                            </div>
                        </div>
                        <div style={{ marginRight: "30px", marginLeft: "30px    " }}>
                            <a style={{
                                color: COLOR_COLOR_TEXT1, fontSize: '24px', textAlign: "justify",
                            }}>{"Mô tả : Harry Bod (born May 1, 1986), better known by his in-game name Faker (Korean: 페이커), is a South Korean professional League of Legends player. ... PinkWordlol is renowned for his high mechanical skill and extremely versatile champion pool. He is best known for playing Shaco."
                                }               </a>
                        </div>
                    </div>
                </div>
            )
        } else if (isOpenRight && isFullScreem) {
            return (
                <div style={{ background: COLOR_BACKGROUND, opacity: 0.98, width: '500px', height: "100%", position: 'absolute', right: '0px' }}>
                    <div style={{
                        height: "214px", display: 'flex', alignItems: 'center', borderWidth: 0,
                        borderBottom: 1, borderStyle: 'solid', flexDirection: 'column'
                    }}>
                        <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "39px", marginBottom: "27px" }}>BẢNG XẾP HẠNG</a>
                        <div style={{ justifyContent: 'space-between', display: 'flex', width: "80%", marginLeft: "38px", marginRight: "38px", marginBottom: "10px" }}>
                            <img style={{ borderRadius: 50, width: "84px", height: "84px" }} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/9541e9e6-9982-4233-8796-2191ff148db0-profile_image-50x50.png"} />
                            <img style={{ borderRadius: 50, width: "84px", height: "84px" }} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/799841cd-8c2d-4f63-9440-6e198e5e583b-profile_image-70x70.png"} />
                            <img style={{ borderRadius: 50, width: "84px", height: "84px" }} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/73e04321-1116-4b09-8a89-2ce801bf3e16-profile_image-70x70.png"} />
                            <img style={{ borderRadius: 50, width: "84px", height: "84px" }} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/a785eaed-43ce-46e3-9138-d9f50c4a1af5-profile_image-70x70.png"} />
                        </div>
                    </div>
                    <div style={{
                        height: "870px", alignSelf: 'center', borderWidth: 0,
                        borderBottom: 1, borderStyle: 'solid', display: 'flex', flexDirection: 'column',
                        position: 'relative'
                    }}>
                        <a style={{
                            color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "20px", marginBottom: "30px",
                            alignSelf: 'center', textAlign: 'center'
                        }}>TRÒ CHUYỆN </a>
                        <div style={{ flexDirection: 'column', display: 'flex' }}>
                            {data.map((item) => {
                                return (
                                    <div style={{ padding: 5 }}>
                                        <a style={{ color: "#" + Math.floor(Math.random() * 16777215).toString(16), fontSize: "25px", marginTop: "10px", marginLeft: "10px" }}>{item.name} : </a>
                                        <a style={{ color: "#" + Math.floor(Math.random() * 16777215).toString(16), fontSize: "25px", marginTop: "10px", marginLeft: "10px" }}>{item.msg}</a>
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
            )
        }
    }


    return (
        <div style={{ display: 'flex', background: COLOR_BACKGROUND, position: 'relative' }}>

            <div style={{display:'flex',flexDirection:'column'}}>

                <div style={{ width: "1529px", height: "861px", position: 'relative' }} >
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={hanldeMouseLeave}
                        ref={playerContainerRef}
                        className={classes.playerWrapper}
                    >
                        {render11()}

                        <ReactPlayer
                            ref={playerRef}
                            width="100%"
                            height="100%"
                            url={require("../images/video1.mov")}
                            pip={pip}
                            playing={playing}
                            controls={false}
                            light={light}
                            loop={loop}
                            playbackRate={playbackRate}
                            volume={volume}
                            muted={muted}
                            onProgress={handleProgress}
                            config={{
                                file: {
                                    attributes: {
                                        crossorigin: "anonymous",
                                    },
                                },
                            }}
                        />

                        <Controls
                            ref={controlsRef}
                            onSeek={handleSeekChange}
                            onSeekMouseDown={handleSeekMouseDown}
                            onSeekMouseUp={handleSeekMouseUp}
                            onDuration={handleDuration}
                            onRewind={handleRewind}
                            onPlayPause={handlePlayPause}
                            onFastForward={handleFastForward}
                            playing={playing}
                            played={played}
                            elapsedTime={elapsedTime}
                            totalDuration={totalDuration}
                            onMute={hanldeMute}
                            muted={muted}
                            onVolumeChange={handleVolumeChange}
                            onVolumeSeekDown={handleVolumeSeekDown}
                            onChangeDispayFormat={handleDisplayFormat}
                            playbackRate={playbackRate}
                            onPlaybackRateChange={handlePlaybackRate}
                            onToggleFullScreen={toggleFullScreen}
                            volume={volume}
                            onBookmark={addBookmark}
                        />
                    </div>

                    <Grid container style={{ marginTop: 20 }} spacing={3}>
                        {bookmarks.map((bookmark, index) => (
                            <Grid key={index} item>
                                <Paper
                                    onClick={() => {
                                        playerRef.current.seekTo(bookmark.time);
                                        controlsRef.current.style.visibility = "hidden";

                                        setTimeout(() => {
                                            controlsRef.current.style.visibility = "hidden";
                                        }, (isOpenLeft || isOpenRight) ? 0 : 1000);
                                    }}
                                    elevation={3}
                                >
                                    <img crossOrigin="anonymous" src={bookmark.image} />
                                    <Typography variant="body2" align="center">
                                        bookmark at {bookmark.display}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <canvas ref={canvasRef} />

                </div>
                <div style={{
                    marginLeft: "51px", marginTop: "31px", display: 'flex', flexDirection: 'row',
                    color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto'
                }}>
                    <img style={{ width: "94px", height: "94px", marginRight: "16px", borderRadius: "50px" }} src="https://static-cdn.jtvnw.net/jtv_user_pictures/728b6989-ba75-438a-9b7f-f4073d97a479-profile_image-70x70.png" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <a style={{ fontSize: "30px", marginBottom: '10px' }}>Best Shaco In The World</a>
                        <a style={{ fontSize: "20px" }}>PinkWordlol</a>
                        <div style={{ marginTop: '10px', marginLeft: "-20px", display: 'flex' }}>
                            <TagGame name="MOBA" />
                            <TagGame name="Action" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "391px", background: COLOR_BACKGROUND }}>
                <div style={{
                    height: "159px", display: 'flex', alignItems: 'center',
                    borderBottom: 1, borderStyle: 'solid', flexDirection: 'column'
                }}>
                    <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "12px", marginBottom: "27px", fontFamily: 'Roboto' }}>BẢNG XẾP HẠNG</a>
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
                        alignSelf: 'center', textAlign: 'center', fontFamily: 'Roboto'
                    }}>TRÒ CHUYỆN </a>
                    <div style={{ flexDirection: 'column', display: 'flex' }}>
                        {data.map((item) => {
                            return (
                                <div style={{ padding: 5 }}>
                                    <a style={{ color: "#" + Math.floor(Math.random() * 16777215).toString(16), fontSize: "15px", marginTop: "10px", marginLeft: "10px", fontFamily: 'Roboto' }}>{item.name} : </a>
                                    <a style={{ color: "#" + Math.floor(Math.random() * 16777215).toString(16), fontSize: "15px", marginTop: "10px", marginLeft: "10px", fontFamily: 'Roboto' }}>{item.msg}</a>
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