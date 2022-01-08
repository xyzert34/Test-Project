import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import Person from "../images/image 2.png";
import useViewport from "../viewport";
const Card3 = () => {
  const{width,height,isMobile,isTablet}=useViewport();
  return (
      <Paper
        elevation={3}
        style={{
          width: isMobile? "80%": isTablet?"90%":"120%",
          height: isMobile?"30%": isTablet?"30%":"18%",
          // marginLeft: ".5%",
          marginTop: isTablet?'20px':'-95%',
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.06)",
          display: "flex",
          background:
            "radial-gradient(116.76% 600.99% at 2.14% 0%, #89DCFF 0%, #89FF95 100%)",
        }}
      >
        <img
          src={Person}
          alt="personimages"
          style={{ width: "30%", height: "50%", marginTop: "7%", marginLeft: "8%" }}
        />
        <div>
          
        <h3 style={{color:"white",fontWeight:600,
            fontFamily: "Poppins",marginLeft:"16%",marginTop:"8%"}}>Any Any Doubts?</h3>
          <ul style={{
          display:"flex",
          flexDirection:"column",
            width: "60%",
            marginLeft:"5%",
            marginTop:"-5%",
            fontWeight:300,
            height: "40%",
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
              width: "150%",
              height: "20%",
              borderColor: "white",
              color: "white",
              fontWeight: "500",
              border: "1px solid",
              marginLeft: "-55%",
            }}
          >BOOK YOUR FREE MENTORSHIP SESSION NOW!
          </Button>
          </div>
      </Paper>
  );
};

export default Card3;
