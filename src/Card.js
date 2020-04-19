import React from 'react'

const Card=({name,email,id})=>{
    return(
        <div className='bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5' style={{width:'20%',height:'auto'}}>
            <img alt='Robots' src={`https://robohash.org/${id}?200*200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;