import React from 'react';

const Random = (props) => {
    // console.log(props)
    return (
        <div>
            <h2>{props?.random?.name}</h2>
        </div>
    );
};

export default Random;