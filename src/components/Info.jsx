import React from 'react';

const INFO = (props) =>{

    return(
    <section className="personal-info">
            <h2>About</h2>
            <img src={props.data}></img>
            <h2>{props.dataN}</h2>
            <p>{props.dataB}</p>
    </section>
    )
}

export default INFO;