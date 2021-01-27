
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1 } from '../constrant';
import screenfull from 'screenfull'

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
    const [isFullScreen,setFullScreen]=useState(true)
    const [widthVideo,setWidthVideo]=useState("1529px")
    const [heightVideo,setHeightVideo]=useState("861px")
    const [data, setData] = useState([
        {
            name:"traubo007",
            msg:"Solo Ys",
        },
        {
            name:"Sora132",
            msg:"Hi hello",
        },
        {
            name:"ys0150",
            msg:"donate donate ",
        },
        {
            name:"traubo007",
            msg:"hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        },
        {
            name:"traubo007",
            msg:"Solo Ys",
        },
        {
            name:"traubo007",
            msg:"Solo Ys",
        }
    ]);

    useEffect(() => {
        if(isFullScreen){
            setWidthVideo("1920px");
            setHeightVideo("1080px")
        }else{
            setWidthVideo("1529px");
            setHeightVideo("861px")
        }
    }, [isFullScreen])

    const { x, y } = useMousePosition();
    useEffect(()=>{
        

        console.log(x);
    },[x])
  const hasMovedCursor = typeof x === "number" && typeof y === "number";

  const player = useRef(null);

  
    return (
        <div style={{ display: 'flex',background:COLOR_BACKGROUND ,position:'relative'}}>
           <div style={{position:'relative',display:'flex'}} 
          
           >
               <div style={{position:'absolute',width:'100%',height:'20%'}}>

               </div>
              
            <ReactPlayer
            ref={player}
            playing={true}
            config={{
                youtube: {
                     playerVars: { modestbranding: 0 }
                }
            }}
            width={widthVideo} height={heightVideo} url='https://youtu.be/bywS_4rQsxg' />
           </div>
            <div style={{ width: "391px", background: COLOR_BACKGROUND }}>
                <div style={{ height: "159px", display: 'flex', alignItems:'center',
                borderBottom: 1, borderStyle: 'solid',flexDirection:'column' }}>
                    <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "12px",marginBottom:"27px" }}>BẢNG XẾP HẠNG</a>
                    <div style={{justifyContent:'space-between',display:'flex', width:"80%",marginLeft:"38px",marginRight:"38px",marginBottom:"10px"}}>
                        <img style={{borderRadius:50,width:"61px",height:"61px"}} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/9541e9e6-9982-4233-8796-2191ff148db0-profile_image-50x50.png"}/>
                        <img style={{borderRadius:50,width:"61px",height:"61px"}} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/799841cd-8c2d-4f63-9440-6e198e5e583b-profile_image-70x70.png"}/>
                        <img style={{borderRadius:50,width:"61px",height:"61px"}} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/73e04321-1116-4b09-8a89-2ce801bf3e16-profile_image-70x70.png"}/>
                        <img style={{borderRadius:50,width:"61px",height:"61px"}} src={"https://static-cdn.jtvnw.net/jtv_user_pictures/a785eaed-43ce-46e3-9138-d9f50c4a1af5-profile_image-70x70.png"}/>
                    </div>
                </div>
                <div style={{
                    height: "866px", alignSelf: 'center',
                    borderBottom: 1, borderStyle: 'solid',display:'flex',flexDirection:'column',
                    position:'relative'
                }}>
                    <a style={{ color: COLOR_COLOR_TEXT1, fontSize: "30px", marginTop: "20px", marginBottom:"30px",
                    alignSelf: 'center', textAlign: 'center' }}>TRÒ CHUYỆN </a>
                    <div style={{ flexDirection: 'column', display: 'flex' }}>
                        {data.map((item) => {
                            return (
                                <div style={{padding:5}}>
                                    <a style={{ color:"#"+Math.floor(Math.random()*16777215).toString(16), fontSize: "15px", marginTop: "10px",marginLeft:"10px" }}>{item.name} : </a>
                                    <a style={{ color:"#"+Math.floor(Math.random()*16777215).toString(16), fontSize: "15px", marginTop: "10px",marginLeft:"10px" }}>{item.msg}</a>
                                </div>
                            )
                        })}
                    </div>
                    <div style={{ height:'50px',width:'100%',
                   flexDirection:'row',display:'flex', alignItems:'center', 
                    alignSelf:'center',position:'absolute',bottom:'11px',
                }}>
                        <div style={{height:'100%',width:'80%',background:'#708D81',marginLeft:'10px',
                    borderRadius:'10px',borderStyle:'solid',borderWidth:"1px",borderColor:'black'}}>
                        </div>
                        <img style={{width:'40px',height:'40px',marginLeft:'5px'}} src={require('../images/Vector.png')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}