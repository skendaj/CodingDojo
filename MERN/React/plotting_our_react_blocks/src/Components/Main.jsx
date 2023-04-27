import React from 'react';

const Main = (props) => {
    const mainStyle = {
        width: '100%',
        height: '95%',
        background: "red",
        flex: 3,
        display: "flex",
        margin: '15px 0px 15px 15px',
    };
    return (
        <div style={mainStyle}>
        <div> {props.children}</div>
        </div>
    );
}
    
export default Main;
