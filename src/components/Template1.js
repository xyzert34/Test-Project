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
            width: "95%",
            height: "100%",
            background: " #FFFFFF",
            border: "1.5px solid #FAFAFA",
            boxSizing: "border-box",
            borderRadius: 21,
            marginBottom:"4%",
            marginLeft:"1%"
          }}
        >
          <img
            src={Img}
            alt="Rectangle20"
            style={{
              height: "7rem",
              width: "8rem",
              borderRadius: 13,
              marginTop: "1%",
              marginLeft: "1%",
              paddingBottom:"1%"
            }}
          />
          <Typography
            style={{
              position: "absolute",
              width: "30%",
              height: "20%",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: 19.8,
              color: "#333333",
              marginLeft: "13%",
              marginTop: 8,
            }}
          >
            Lorem ipsum sit amet
          </Typography>
          <div
            style={{
              position: "absolute",
              width: "9%",
              height: "3%",
              background:
                "linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.14)",
              borderRadius: 10,
              marginLeft: "35%",
              marginTop: "1%",
            }}
          >
            <img
              src={Storytime}
              alt="clock"
              style={{ width: 18, height: 18, marginLeft: 1, marginTop: 1 }}
            />
            <div style={{position: "absolute",
              width: "80%",
              height: "3%",
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: 12.9,
              color: "white",
              marginTop: "-20%",
              marginLeft: "17%",}}>{Time}</div>
          </div>
          <div
            style={{
              position: "absolute",
              width: "27%",
              height: "20%",
              fontFamily: "Poppins",
              fontWeight: "normal",
              fontSize: 10.9,
              color: "#666666",
              marginTop: "3%",
              marginLeft: "13%",
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
              width: "7%",
              height: "4%",
              background: {Colur}==="Nancy" ? '#000000':'#29A5FF',
              borderRadius: 5,
              marginLeft: "36%",
              marginTop: "7.5%",
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
