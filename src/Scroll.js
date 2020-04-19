import React from 'react'
import './index.css'

const Scroll=(props)=>{
    return (
        <div className='Scrollbar' style={{overflowY:'scroll',height:'520px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;