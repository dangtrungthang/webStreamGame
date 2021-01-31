import React from 'react'
import Select from 'react-select';

export default function Dropdown(props) {
    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "black",width:"200px",marginRight:"40px",
          placeholder:"Xem gần đây",
          opacity:1,color:'white',
          // match with the menu
          borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
          // Overwrittes the different states of border
          borderColor: state.isFocused ? "red" : "white",
          // Removes weird border around container
          boxShadow: state.isFocused ? null : null,
          "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "red" : "white"
          }
        }),
        menu: base => ({
          ...base,
          // override border radius to match the box
          borderRadius: 0,
          // kill the gap
          marginTop: 0
        }),
        menuList: base => ({
          ...base,
          // kill the white space on first and last option
          padding: 0
        })
      };
    
      const options = [
        {
          label: "Xem gần đây",
          value: 1
        },
        {
          label: "Xem nhiều nhất",
          value: 2
        },
        {
          label: "Mới nhất",
          value: 3
        },
       
      ];
    
      return (
        <div className="App">
          <Select styles={customStyles} options={options} 
          placeholder={props.placeholder}
          
           />
        </div>
      );
}