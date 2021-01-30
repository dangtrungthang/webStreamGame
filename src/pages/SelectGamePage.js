import React from 'react';
import CardGame from '../components/Card/CardGame';
import ListGridCard from '../components/Card/ListGridCard';
import Dropdown from '../components/Dropdown/Dropdown';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import { TagGame } from '../components/Tag/TagGame';
import { COLOR_BACKGROUND, COLOR_COLOR_TEXT1, COLOR_NAVLINK } from '../constrant'

const InnerBgImg="https://i.pinimg.com/originals/bc/62/88/bc628866ae1b63375f72c5d23e76d836.jpg";
const SelectGamePage = () => {
  return (
    <div style={{flex:1,display:'flex',flexDirection:'column'}}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: COLOR_BACKGROUND
      }}
    >
      <a style={{
        marginTop: "51px",
        marginLeft: "50px",
        fontSize: "48px",
        color: COLOR_COLOR_TEXT1,
        marginBottom: '0px'
      }}>Game</a>
      <div style={{
        marginTop: "59px",
        marginBottom: "30px",
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }} >
        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', }} >
         <Search/>
          <TagGame name="FPS" />
          <TagGame name="Hành động" />
          <TagGame name="Giải đố" />
          
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <a style={{ width: "200px",color:COLOR_COLOR_TEXT1 }}>Sắp xếp theo</a>
          <Dropdown placeholder="Xem gần đây" />
        </div>
      </div>
     <div>
     <ListGridCard style={{marginLeft:'-20px'}} />
     </div>
      <Footer />
    </div>
    </div>
  );
};

export default SelectGamePage;
