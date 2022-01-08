import React from 'react'

const Template3 = ({text}) => {
    return (
        <div style={{height:"100%",border:"0.5px solid #4C4E73",
        boxSizing:"border-box",fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "50%",
        // lineHeight: 13,
        textAlign:"center",
        color: "#4C4E73",
        paddingTop:'.5%',
        paddingLeft:'1.5%',
        paddingRight:'1.5%',
        paddingBottom:'1.2%',
        borderRadius: 23}}>
            {text}
        </div>
    )
}

export default Template3
