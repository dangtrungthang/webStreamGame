import React, { useState, useRef, useEffect } from "react";
import { findDOMNode } from "react-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ReactPlayer from "react-player";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PanelLeft from '../components/PanelChat';
import PanelInfo from '../components/PanelInfo';
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeMute from "@material-ui/icons/VolumeOff";
import FullScreen from "@material-ui/icons/Fullscreen";
import Popover from "@material-ui/core/Popover";
import screenful from "screenfull";
import Controls from "../components/Controls";
import { TagGame } from '../components/Tag/TagGame'

import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1 } from "../constrant";

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

const PrettoSlider = withStyles({
    root: {
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: "red",
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    }, mark: {
        backgroundColor: 'red',
        height: 15,
        width: 3,
        marginTop: -3,
    }, markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    }
})(Slider);

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

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

let count = 0;

function OutCome3() {
    const classes = useStyles();
    const [onClickKH, setClickKH] = useState(0)
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






    return (

        <div style={{ display: 'flex', background: COLOR_BACKGROUND }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: "1529px", height: "861px", }} >
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={hanldeMouseLeave}
                        ref={playerContainerRef}
                        className={classes.playerWrapper}
                    >


                        <ReactPlayer
                            ref={playerRef}
                            width="100%"
                            height="100%"
                            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
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
                                        controlsRef.current.style.visibility = "visible";

                                        setTimeout(() => {
                                            controlsRef.current.style.visibility = "hidden";
                                        }, (1000))
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
                    <img style={{ width: "94px", height: "94px", marginRight: "16px", borderRadius: "50px" }} src="https://yt3.ggpht.com/ytc/AAUvwngKfgg-9gav3nrkzNf4gB6rfCPaIp1GikSn7rF8=s88-c-k-c0x00ffffff-no-rj" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <a style={{ fontSize: "30px", marginBottom: '10px' }}>Thầy Giáo 3</a>
                        <a style={{ fontSize: "20px", marginBottom: '10px' }}>LOL</a>
                        <a style={{ fontSize: "20px" }}>Đồng đoàn I</a>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{ marginLeft: '50px', margrinTop: '28px', display: 'flex' }}>
                        <a style={{ marginBottom:"20px",marginTop: "50px", color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto', fontSize: "24px", }}>Danh khoá học</a>

                    </div>

                    <div style={{ display: 'flex', marginLeft: '50px  ', marginBottom: "30px" }}>
                        <img style={{ width: "162px", height: "111px" }} src="https://static-cdn.jtvnw.net/previews-ttv/live_user_flamekr-440x248.jpg" />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: '50px' }}>
                            <a style={{ color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto', fontSize: "35px" }}>Hướng dẫn trở thành master</a>
                            <a style={{ color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto', fontSize: "24px" }}>Master</a>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginLeft: '50px  ', marginBottom: "30px" }}>
                        <img style={{ width: "162px", height: "111px" }} src="https://static-cdn.jtvnw.net/previews-ttv/live_user_flamekr-440x248.jpg" />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: '50px' }}>
                            <a style={{ color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto', fontSize: "35px" }}>Hướng dẫn trở thành master</a>
                            <a style={{ color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto', fontSize: "24px" }}>Master</a>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginLeft: '50px  ', marginBottom: "30px" }}>
                        <img style={{ width: "162px", height: "111px" }} src="https://static-cdn.jtvnw.net/previews-ttv/live_user_flamekr-440x248.jpg" />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: '50px' }}>
                            <a style={{ color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto', fontSize: "35px" }}>Hướng dẫn trở thành master</a>
                            <a style={{ color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto', fontSize: "24px" }}>Master</a>
                        </div>
                    </div>

                </div>

            </div>
            <div style={{
                margrinTop: "21px", background: COLOR_BACKGROUND, width: '400px', height: '1080px',
                display: 'flex', flexDirection: 'column'
            }}>
                <div style={{ justifyContent: 'center', display: 'flex', marginTop: "21px", width: '100%', marginBottom: '21px' }}>
                    <a style={{ color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto', fontSize: "36px", }}>Danh Sách Bài Học</a>
                </div>
                <div style={{ background: COLOR_BACKGROUND, height: "10px", width: '300px' }}></div>

                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
                    <a style={{ marginBottom: '25px', color: 'red', fontFamily: 'Roboto', fontSize: "25px", }}>1. Hướng dẫn chơi Susan007</a>
                    <a style={{ marginBottom: '25px', color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto', fontSize: "25px", }}>2. Hướng dẫn feed </a>
                    <a style={{ marginBottom: '25px', color: COLOR_COLOR_TEXT1, fontFamily: 'Roboto', fontSize: "25px", }}>3. Hướng dẫn cắm mắt hiệu quả</a>

                </div>

            </div>
        </div>
    );
}

export default OutCome3;