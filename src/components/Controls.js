import React, { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeMute from "@material-ui/icons/VolumeOff";
import FullScreen from "@material-ui/icons/Fullscreen";
import Popover from "@material-ui/core/Popover";
import { COLOR_COLOR_TEXT1, COLOR_BACKGROUND } from '../constrant'
import PanelLeft from "./PanelChat";
import PanelInfo from '../components/PanelInfo';
const useStyles = makeStyles((theme) => ({
    controlsWrapper: {
        visibility: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
        backgroundColor: "#fff",
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
        backgroundColor: 'white',
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

const Controls = forwardRef(
    (
        {
            onSeek,
            onSeekMouseDown,
            onSeekMouseUp,
            onDuration,
            onRewind,
            onPlayPause,
            onFastForward,
            playing,
            played,
            elapsedTime,
            totalDuration,
            onMute,
            muted,
            onVolumeSeekDown,
            onChangeDispayFormat,
            playbackRate,
            onPlaybackRateChange,
            onToggleFullScreen,
            volume,
            onVolumeChange,
            onBookmark,
        },
        ref, props
    ) => {
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState(null);
        const [isOpenLefl, setIsOpenLeft] = useState(false)
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
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
        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? "simple-popover" : undefined;
        const { x, y } = useMousePosition();
        useEffect(() => {
            if (x > 1800) {
                setIsOpenLeft(!isOpenLefl)
            }
        }, [x])
        return (
            <div ref={ref} className={classes.controlsWrapper}>

                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    style={{ flexGrow: 1 }}
                >
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                        style
                        style={{ padding: 16 }}
                    >
                        

                    </Grid>

                    {/* bottom controls */}
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        style={{ padding: 16 }}
                    >
                        <Grid item xs={12}>
                            <PrettoSlider
                                style={{
                                    color: 'red', marginTop: '20px'

                                }}
                                min={0}
                                max={100}
                                ValueLabelComponent={(props) => (
                                    <ValueLabelComponent {...props} value={elapsedTime} />
                                )}
                                aria-label="custom thumb label"
                                value={played * 100}
                                onChange={onSeek}
                                onMouseDown={onSeekMouseDown}
                                onChangeCommitted={onSeekMouseUp}
                                onDuration={onDuration}
                                marks={[{ value: 10 }]}

                            />
                        </Grid>

                        <Grid item>
                            <Grid container alignItems="center">
                                <IconButton
                                    onClick={onPlayPause}
                                    className={classes.bottomIcons}
                                >
                                    {playing ? (
                                        <PauseIcon fontSize="large" />
                                    ) : (
                                            <PlayArrowIcon fontSize="large" />
                                        )}
                                </IconButton>

                                <IconButton
                                    // onClick={() => setState({ ...state, muted: !state.muted })}
                                    onClick={onMute}
                                    className={`${classes.bottomIcons} ${classes.volumeButton}`}
                                >
                                    {muted ? (
                                        <VolumeMute fontSize="large" />
                                    ) : volume > 0.5 ? (
                                        <VolumeUp fontSize="large" />
                                    ) : (
                                                <VolumeDown fontSize="large" />
                                            )}
                                </IconButton>

                                <Slider
                                    min={0}
                                    max={100}
                                    value={muted ? 0 : volume * 100}
                                    onChange={onVolumeChange}
                                    aria-labelledby="input-slider"
                                    className={classes.volumeSlider}
                                    onMouseDown={onSeekMouseDown}
                                    onChangeCommitted={onVolumeSeekDown}
                                    style={{ color: 'red' }}
                                />
                                <Button
                                    variant="text"
                                    onClick={
                                        onChangeDispayFormat
                                        //     () =>
                                        //   setTimeDisplayFormat(
                                        //     timeDisplayFormat == "normal" ? "remaining" : "normal"
                                        //   )
                                    }
                                >
                                    <Typography
                                        variant="body1"
                                        style={{ color: "#fff", marginLeft: 16 }}
                                    >
                                        {elapsedTime}/{totalDuration}
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid item>

                            <IconButton
                                onClick={onToggleFullScreen}
                                className={classes.bottomIcons}

                            >
                                <FullScreen fontSize="large" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>



            </div>
        );
    }
);

Controls.propTypes = {
    onSeek: PropTypes.func,
    onSeekMouseDown: PropTypes.func,
    onSeekMouseUp: PropTypes.func,
    onDuration: PropTypes.func,
    onRewind: PropTypes.func,
    onPlayPause: PropTypes.func,
    onFastForward: PropTypes.func,
    onVolumeSeekDown: PropTypes.func,
    onChangeDispayFormat: PropTypes.func,
    onPlaybackRateChange: PropTypes.func,
    onToggleFullScreen: PropTypes.func,
    onMute: PropTypes.func,
    playing: PropTypes.bool,
    played: PropTypes.number,
    elapsedTime: PropTypes.string,
    totalDuration: PropTypes.string,
    muted: PropTypes.bool,
    playbackRate: PropTypes.number,
};
export default Controls;