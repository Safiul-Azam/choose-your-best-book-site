import React from 'react';

const Random = (props) => {
    return (
        <div>
            <img src={props?.random?.img} alt="" />
            <h2>{props?.random?.name}</h2>
        </div>
    );
};

export default Random;