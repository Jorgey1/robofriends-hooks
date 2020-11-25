import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ border: '3px solid lightblue', height: '100%', width: '95%', marginLeft: '2.5%'}}>
            {props.children}
        </div>
    );
};

export default Scroll;