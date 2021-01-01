import React from 'react';
import GridList from "react-gridlist";
import { Link } from 'react-router-dom';

import {DATA_EXAMPLE} from '../../constrant'
import CardTeam from './CardTeam';




export default function ListGridCardTeam() {

    const images = Array.from({ length: 20 }, (_, i) => {
        let width = 200
        let height = 360;
        return {
          url: `https://cdn.shopify.com/s/files/1/0747/3829/products/mL3925_1024x1024.jpg?v=1574110214`,
          width,
          height,
        }
      })
      
    const getGridGap = (elementWidth, windowHeight) => (elementWidth > 720 && windowHeight > 480) ? 10 : 5;

    const getColumnCount = (elementWidth) => Math.floor(elementWidth / 200);

    const getWindowMargin = (windowHeight) => Math.round(windowHeight * 1.5);

    const getItemData = (image, columnWidth) => {
        let imageRatio = image.height / image.width
        let adjustedHeight = Math.round(columnWidth * imageRatio)
        return {
            key: image.url,
            height: adjustedHeight,
        }
    }


    return (
        <div style={{marginRight:"20px",marginLeft:"50px",marginTop:'0px',
        }}>
            <GridList
                
                items={DATA_EXAMPLE}
                getGridGap={getGridGap}
                getColumnCount={getColumnCount}
                getWindowMargin={getWindowMargin}
                getItemData={getItemData}
                renderItem={(image) => {
                    return (
                        <Link to="/pagegame">
                        <CardTeam/>
                        </Link>
                        
                    )
                }}
            />
        </div>

    );
}