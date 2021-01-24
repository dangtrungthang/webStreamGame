import React from 'react';



export default function ItemMatchDetail(){


    return(
        <div style={{height:"200px", background:'red',marginRight:"45px",marginBottom:"50px",
        flexDirection:"row",display:'flex',position:'relative'}}>
            <div style={{width:"480px",background:'blue',height:"100%",
            flexDirection:'column',display:'flex', justifyContent:'space-evenly', alignItems:'center',
            }}>
                <a style={{fontSize:"30px"}}>Thời gian</a>
                <a style={{fontSize:"30px"}}>Đánh giá</a>
            </div>
            <div style={{width:"480px",background:'blue',height:"100%",
            flexDirection:'column',display:'flex', justifyContent:'space-evenly', alignItems:'center',
            }}>
                <a style={{fontSize:"30px"}}>Tỉ số</a>
                <a style={{fontSize:"30px"}}>Logo</a>
                <a style={{fontSize:"30px"}}>Tên đội</a>
            </div>
            <div style={{width:"480px",background:'blue',height:"100%",
            flexDirection:'column',display:'flex', justifyContent:'space-evenly', alignItems:'center',
            }}>
                  <a style={{fontSize:"30px"}}>Tỉ số</a>
                <a style={{fontSize:"30px"}}>Logo</a>
                <a style={{fontSize:"30px"}}>Tên đội</a>
            </div>
            <div style={{width:"480px",background:'blue',height:"100%",
            flexDirection:'column',display:'flex', justifyContent:'space-evenly', alignItems:'center',
            }}>
                <a style={{fontSize:"30px"}}>Thể thức thi đấu</a>
                <a style={{fontSize:"30px"}}>Xem</a>
            </div>
            <a style={{position:'absolute',
            fontSize:"30px",display:'flex',left:"900px",top:"100px"}}>vs</a>
        </div>
        
    )
}