import React from 'react';

import './Backdrop.css';

const backdrop = (props) => (
    props.show ? 
    <div className={props.Transparent?"Backdrop Transparent":props.White?"Backdrop White":props.Dark?"Backdrop Dark":"Backdrop"} 
    onClick={props.clicked}>
   
    </div> : null
);

export default backdrop;