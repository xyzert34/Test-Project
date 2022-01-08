import { Paper, Typography } from "@mui/material";
import { borderRadius, boxSizing, fontFamily } from "@mui/system";
import Rectangle20 from "../images/Rectangle 20.png";
import React from "react";
import Upcoming from "../images/Discover Lifelong 1 (1).png";
import Storytime from "../images/Story Time (1).png";
import Template1 from "./Template1";
import Rectangle24 from "../images/Rectangle 24.png";
import useViewport from "../viewport";
const Card2 = () => {
  const {width,height,isMobile,isTablet} =useViewport();
  return (
    <div>
      <Paper
        elevation={3}
        style={{
          width: isMobile? "100%": isTablet?"100%":"92%",
          height: isMobile?"100%": isTablet?"30%":"98%",
          marginTop: 19,
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.06)",
          // display: "flex",
          // flexDirection:"column",
        }}
      >
        <img
          style={{ height: "2%", width: "4%", marginTop: "2%", marginLeft: "1%" }}
          src={Upcoming}
          alt="Upcoming"
        />

        <Typography
          variant="h4"
          style={{
            fontWeight: 600,
            marginLeft: "6%",
            marginTop: "-5.5%",
            marginBottom: "3%",
            fontSize: "200%",
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
          Today
          <div
          style={{
            width: "1190%",
            // height: 0,
            opacity: 0.4,
            border: "1px solid #000000",
            marginLeft:50,
            marginTop:-6,
          }}
        ></div>
        </Typography>
        <Paper
          style={{
            display: "flex",
            justifyContent: "row",
            // position: "absolute",
            width: "95%",
            height: "12%",
            background: " #FFFFFF",
            border: "1.5px solid #FAFAFA",
            boxSizing: "border-box",
            borderRadius: 21,
            marginBottom:"4%",
            marginLeft:"1%"
          }}
        >
          <img
            src={Rectangle20}
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
              marginLeft: "17%",}}>4:00-6:00 PM</div>
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
              background:'rgba(41, 165, 255, 1)',
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* <Template1 Img={Rectangle20} Time="4:00-6:00 PM" Colur={1} /> */}
          <Template1 Img={Rectangle24} Time="8:00-9:00 PM" />
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
            width: '900%',
            // height: 0,
            opacity: 0.4,
            border: "1px solid rgba(0, 0, 0, 1)",
            marginLeft:60,
            boxSizing:"border-box",
            marginTop:-6,
          }}
        ></div>
        </Typography>
          <Template1 Img={Rectangle20} Time="4:00-6:00 PM" />
          <Template1 Img={Rectangle24} Time="8:00-9:00 PM" />
          <Template1 Img={Rectangle20} Time="4:00-6:00 PM" />
          <Template1 Img={Rectangle24} Time="8:00-9:00 PM" />
        </div>
      </Paper>
    </div>
  );
};

export default Card2;
