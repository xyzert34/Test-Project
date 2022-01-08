import React from "react";
import StarIcon from "@mui/icons-material/Star";
import {Typography } from "@mui/material";
import useViewport from '../viewport'
const Template2 = ({ Img }) => {
  const {width,height,isMobile,isTablet}=useViewport();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "row",
          marginBottom: 16,
          marginLeft: "2%",
        }}
      >
        <img
          src={Img}
          alt="Rectangle20"
          style={{
            height: "40%",
            width: "45%",
            borderRadius: 2,
            marginTop: "2%",
            marginLeft: "2%",
          }}
        />
        <div style={{display:'flex',flexDirection:"column"}}>
        <Typography
          style={{
            width: "90%",
            height: "20%",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "100%",
            color: "#333333",
            marginLeft: "4%",
            marginTop: "3%",
          }}
        >
          Lorem ipsum sit a
        </Typography>

        <div
          style={{
            width: "70%",
            height: "25%",
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "60%",
            color: "#666666",
            marginTop: "2%",
            marginLeft: "5%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
          sit amet,
        </div>
        <div style={{display:"flex",flexDirection:"row",marginLeft:"4%",marginTop: isTablet?"11%":"8%",color: "rgba(252, 238, 33, 1)",width:"40%",justifyContent:"space-between"}}>
          <StarIcon
            style={{
              width: 15,
              height: 14.6,
            }}
          ></StarIcon>
          <StarIcon
            style={{
              width: 15,
              height: 14.6,
            }}
          ></StarIcon>
          <StarIcon
            style={{
              width: 15,
              height: 14.6,
            }}
          ></StarIcon>
          <StarIcon
            style={{
              width: 15,
              height: 14.6,
            }}
          ></StarIcon>
          <StarIcon
            style={{
              width: 15,
              height: 14.6,
            }}
          ></StarIcon>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
