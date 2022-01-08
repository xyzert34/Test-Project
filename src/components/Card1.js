import React from "react";
import Typography from "@mui/material/Typography";
import Rectangle35 from "../images/Rectangle 35.png";
import Group55 from "../images/Group 55 (1).png";
import Twitter from "../images/Twitter Squared.png";
import Insta from "../images/Instagram logo.png";
import Facebook from "../images/Facebook logo.png";
import { Button, Paper } from "@mui/material";
import { borderColor, width } from "@mui/system";
import Template3 from "./Template3";
import useViewport from "../viewport";
const Card1 = () => {
  const {width,height,isMobile,isTablet} =useViewport();
  return (
    // <div>
    <Paper
      elevation={3}
      style={{
        width: isMobile? "200%": isTablet?"100%":"92%",
        height: isMobile?"20%": isTablet?"30%":"40%",
        marginTop: -322.32,
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.06)",
        display: "flex",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <img
              src={Group55}
              style={{
                height: "80.5%",
                width: "9.5rem",
                marginLeft: "2rem",
                marginTop: "2rem",
              }}
              alt="Group"
            />
            <img
              src={Rectangle35}
              style={{
                height: "8.5rem",
                width: "8.5rem",
                marginLeft: -142,
                marginBottom: 6,
              }}
              alt="imageperson"
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 23,
            }}
          >
            <img
              src={Twitter}
              style={{ width: 16, height: 16, marginLeft: 60 }}
              alt="Twitter logo"
            />
            <img
              src={Facebook}
              style={{ width: 16, height: 16, marginLeft: 17 }}
              alt="Facebook logo"
            />
            <img
              src={Insta}
              style={{ width: 16, height: 16, marginLeft: 18 }}
              alt="Insta logo"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "4rem",
            marginTop: "1rem",
          }}
        >
          <div style={{ fontWeight: 600, fontFamily: "Poppins", fontSize: "2rem" }}>
            Remus Lupin
          </div>
          <button
            style={{
              backgroundColor: "transparent",
              height: "10%",
              color: "black",
              opacity: 0.7,
              border: "1px solid #000000",
              borderRadius: 4,
              fontFamily: "Poppins",
              marginLeft: "70%",
              marginTop: "-8%",
              marginRight:'3%',
              cursor: "pointer",
            }}
          >
            Edit Profile
          </button>
          <Typography
            style={{
              color: "#4C4E73",
              fontFamily: "Poppins",
              fontSize: "0.8rem",
              marginTop: 9,
            }}
          >
            JEE Aspirant
          </Typography>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"80%",marginBottom:5,marginTop:15}}>
            <Template3 text="JEE"/>
            <Template3 text="Calculus"/>
            <Template3 text="Mechanics"/>
            <Template3 text="Organic"/>
            <Template3 text="Btech"/>
            <Template3 text="Thermodynamics"/>
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"65%",marginBottom:5}}>
            <Template3 text="Calculus"/>
            <Template3 text="Mechanics"/>
            <Template3 text="CSE"/>
            <Template3 text="Organic"/>
            <Template3 text="Jee"/>
            <Template3 text="Btech"/>
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"58%",marginBottom:20}}>
            <Template3 text="Thermodynamics"/>
            <Template3 text="Btech"/>
            <Template3 text="Calculus"/>
            <Template3 text="Organic"/>
          </div>
          <div style={{width:"95%",heigth:0,border:"1px solid black",}}></div>
          <div
            style={{
              width: "95%",
              height: "100%",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "0.7rem",
              color: "#000000",
              opacity: 0.65,
              marginTop:"0.9rem",
              marginBottom:"2%"
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, turpis
            cras in pellentesque at blandit velit. Magna at lobortis lacus,
            ultricies in vel morbi adipiscing. Nibh purus a sollicitudin
            scelerisque. Integer eget dui orci, dis tellus.
          </div>
        </div>
      </div>
    </Paper>
    // </div>
  );
};

export default Card1;
