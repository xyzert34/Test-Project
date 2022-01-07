import { Paper, Typography } from "@mui/material";
import { borderRadius, boxSizing, fontFamily } from "@mui/system";
import React from 'react'

import Storytime from "../images/Story Time (1).png";
// import Rectangle20 from "../images/Rectangle 20.png";
// import Storytime from "../images/Story Time (1).png";
const Template1 = ({Img,Time,Colur}) => {
    return (
        <Paper
          style={{
            display: "flex",
            justifyContent: "row",
            // position: "absolute",
            width: 635,
            height: 128,
            background: " #FFFFFF",
            border: "1.5px solid #FAFAFA",
            boxSizing: "border-box",
            borderRadius: 21,
            marginBottom:16,
            marginLeft:8
          }}
        >
          <img
            src={Img}
            alt="Rectangle20"
            style={{
              height: 111,
              width: 111,
              borderRadius: 13,
              marginTop: 8,
              marginLeft: 8,
            }}
          />
          <Typography
            style={{
              position: "absolute",
              width: 278,
              height: 38,
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 19.8,
              color: "#333333",
              marginLeft: 133,
              marginTop: 8,
            }}
          >
            Lorem ipsum sit amet
          </Typography>
          <div
            style={{
              position: "absolute",
              width: 116,
              height: 20,
              background:
                "linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.14)",
              borderRadius: 10,
              marginLeft: 506,
              marginTop: 13,
            }}
          >
            <img
              src={Storytime}
              alt="clock"
              style={{ width: 18, height: 18, marginLeft: 1, marginTop: 1 }}
            />
            <div style={{position: "absolute",
              width: 95,
              height: 20,
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: 12.9,
              color: "white",
              marginTop: -22,
              marginLeft: 19,}}>{Time}</div>
          </div>
          <div
            style={{
              position: "absolute",
              width: 502,
              height: 53,
              fontFamily: "Poppins",
              fontWeight: "normal",
              fontSize: 10.9,
              color: "#666666",
              marginTop: 43,
              marginLeft: 133,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi
            vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris
            hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla
            pharetra hash.
          </div>
          <button
            style={{
              position: "absolute",
              width: 82,
              height: 25,
              background: {Colur}==100 ? '#000000':'#29A5FF',
              borderRadius: 5,
              marginLeft: 537,
              marginTop: 87,
              textAlign: "center",
              color: "white",
              fontWeight: 600,
              fontFamily:"Poppins",
              fontSize: 14,
              border:"none",
              cursor:"pointer"
            }}
          >
            Join Now
          </button>
        </Paper>
    )
}

export default Template1
