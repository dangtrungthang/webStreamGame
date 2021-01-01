import React from 'react'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Dropdown(props) {
    const techCompanies = [
        { label: "Xem nhiều", value: 1 },
        { label: "A-Z", value: 2 },
        { label: "Ngày ra mắt", value: 3 },
       
    ];
    return (
     <div className="container" style={{marginRight:"40px"}}>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-12">
                    <Select    options={techCompanies}  placeholder={props.placeholder}/>
                </div>
                <div className="col-md-4"></div>
            </div>
            </div>
       
    )
}