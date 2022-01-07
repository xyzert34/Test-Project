import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import Person from "../images/image 2.png";
const Card3 = () => {
  return (
    <div>
      <Paper
        elevation={3}
        style={{
          width: 397,
          height: 170,
          marginLeft: 19,
          marginTop: -328.32,
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.06)",
          display: "flex",
          background:
            "radial-gradient(116.76% 600.99% at 2.14% 0%, #89DCFF 0%, #89FF95 100%)",
        }}
      >
        <img
          src={Person}
          alt="personimages"
          style={{ width: 85, height: 85, marginTop: 28, marginLeft: 29 }}
        />
        <div>
          
        <h3 style={{color:"white",fontWeight:600,
            fontFamily: "Poppins",marginLeft:65,marginTop:25}}>Any Any Doubts?</h3>
          <ul style={{
          display:"flex",
          flexDirection:"column",
            width: 164,
            marginLeft:45,
            marginTop:-15,
            fontWeight:300,
            height: 63,
            color: "white",
            justifyContent:"space-between",
            fontSize:12,
            fontFamily: "Poppins",
          }}>
            <li>Talk to our mentors</li>
            <li>Get Expert Guidance</li>
            <li>Talk to our mentors</li>
          </ul>
          <Button
            variant="outlined"
            size="small"
            style={{
              width: "377px",
              height: 30,
              borderColor: "white",
              color: "white",
              fontWeight: "500",
              border: "1px solid",
              marginLeft: -105,
            }}
          >BOOK YOUR FREE MENTORSHIP SESSION NOW!
          </Button>
          </div>
      </Paper>
    </div>
  );
};

export default Card3;
