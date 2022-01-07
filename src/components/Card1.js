import React from "react";
import Typography from "@mui/material/Typography";
import Rectangle35 from "../images/Rectangle 35.png";
import Group55 from "../images/Group 55 (1).png";
import Twitter from "../images/Twitter Squared.png";
import Insta from "../images/Instagram logo.png";
import Facebook from "../images/Facebook logo.png";
import { Button, Paper } from "@mui/material";
import { borderColor } from "@mui/system";
const Card1 = () => {
  return (
    // <div>
      <Paper
        elevation={3}
        style={{
          width: 655,
          height: 285,
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
              justifyContent: "space-between",
            }}
          >
            <div>
              <img
                src={Group55}
                style={{
                  height: 148,
                  width: 148,
                  marginLeft: 32,
                  marginTop: 26,
                }}
                alt="Group"
              />
              <img
                src={Rectangle35}
                style={{
                  height: 136,
                  width: 138,
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
          <div style={{ marginLeft: 57, marginTop: 16 }}>
            <div
              style={{fontWeight: 600, fontFamily: "Poppins",fontSize:35 }}
            >
              Remus Lupin
              
            </div>
            <button
                style={{
                  backgroundColor: "transparent",
                  height: 23,
                  color: "black",
                  opacity: 0.7,
                  border: "1px solid #000000",
                  borderRadius: 4,
                  fontFamily: "Poppins",
                  marginLeft:315,
                  marginTop:-110,
                  cursor:"pointer"
                }}
              >
                Edit Profile
              </button>
            <Typography style={{ color: "#4C4E73", fontFamily: "Poppins" }}>JEE Aspirant</Typography>
            <div style={{textAlign:"center",marginTop:20}}>
                {/* <div style={{position:"absolute",
                  width: 35,
                  height: 25,
                  borderRadius: 23,
                  fontSize:11,fontWeight:400,
                  outlineStyle:"auto",color: "#4C4E73", fontFamily: "Poppins" ,border: "0.1px solid #4C4E73"
                  }}>Jee</div> */}
                  <div style={{position:"absolute",
                  width: 35,
                  height: 25,
                  borderRadius: 23,
                  fontSize:11,fontWeight:400,
                  outlineStyle:"auto",color: "#4C4E73", fontFamily: "Poppins" ,border: "0.1px solid #4C4E73"
                  }}>JeeAdvh</div>
            </div>
          </div>
        </div>
      </Paper>
    // </div>
  );
};

export default Card1;
