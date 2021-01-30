import React from 'react';
import GridList from "react-gridlist";
import CardGame from './CardGame';
import {DATA_EXAMPLE} from '../../constrant'
import { Link } from 'react-router-dom';




export default function ListGridCard() {

    
    const getGridGap = (elementWidth, windowHeight) => (elementWidth > 720 && windowHeight > 480) ? 70 : 5;

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
        <div style={{marginRight:"20px",marginLeft:"5px",marginTop:'0px',
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
                        
                        
                        <CardGame
                            src={image.url}
                            
                            NameGame={image.nameGame}
                            Viewer={image.view}
                            width={300}
                            height={300}
                        />
                        </Link>
                        
                    )
                }}
            />
        </div>

    );
}