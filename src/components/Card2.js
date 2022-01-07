import { Paper, Typography } from "@mui/material";
import { borderRadius, boxSizing, fontFamily } from "@mui/system";
import Rectangle20 from "../images/Rectangle 20.png";
import React from "react";
import Upcoming from "../images/Discover Lifelong 1 (1).png";
import Template1 from "./Template1";
import Rectangle24 from "../images/Rectangle 24.png";
const Card2 = () => {
  return (
    <div>
      <Paper
        elevation={3}
        style={{
          width: 655,
          height: 1032,
          marginTop: 19,
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.06)",
          // display: "flex",
          // flexDirection:"column",
        }}
      >
        <img
          style={{ height: 32, width: 32, marginTop: 18, marginLeft: 8 }}
          src={Upcoming}
          alt="Upcoming"
        />

        <Typography
          variant="h3"
          style={{
            fontWeight: 600,
            marginLeft: 46,
            marginTop: -42,
            marginBottom: 14,
            fontSize: 35,
          }}
        >
          Upcoming Classes
        </Typography>
        <Typography
          style={{
            width: 41,
            height: 20,
            fontFamily: "Poppins",
            fontWeight: "normal",
            fontSize: 13,
            color: "#000000",
            opacity: 0.4,
            marginLeft:16,
            marginBottom:13,
          }}
        >
          Today<div
          style={{
            width: 579,
            // height: 0,
            opacity: 0.4,
            border: "1px solid #000000",
            marginLeft:50,
            marginTop:-6,
          }}
        ></div>
        </Typography>
        
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Template1 Img={Rectangle20} Time="4:00-6:00 PM" Colur={100} />
          <Template1 Img={Rectangle24} Time="8:00-9:00 PM" Colur={"#29A5FF"} />
          <Typography
          style={{
            width: 53,
            height: 20,
            fontFamily: "Poppins",
            fontWeight: "normal",
            fontSize: 13,
            color: "#000000",
            opacity: 0.4,
            marginLeft:16,
            marginBottom:13,
            marginTop:29,
          }}
        >
          16/09/21<div
          style={{
            width: 569,
            // height: 0,
            opacity: 0.4,
            border: "1px solid rgba(0, 0, 0, 1)",
            marginLeft:60,
            boxSizing:"border-box",
            marginTop:-6,
          }}
        ></div>
        </Typography>
          <Template1 Img={Rectangle20} Time="4:00-6:00 PM" Colur="1" />
          <Template1 Img={Rectangle24} Time="8:00-9:00 PM" Colur={2} />
          <Template1 Img={Rectangle20} Time="4:00-6:00 PM" Colur={2} />
          <Template1 Img={Rectangle24} Time="8:00-9:00 PM" Colur={2} />
        </div>
      </Paper>
    </div>
  );
};

export default Card2;
