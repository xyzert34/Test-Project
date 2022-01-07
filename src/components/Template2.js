import React from "react";
import StarIcon from "@mui/icons-material/Star";
import {Typography } from "@mui/material";

const Template2 = ({ Img }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "row",
          width: 397,
          height: 128,
          marginBottom: 16,
          marginLeft: 8,
        }}
      >
        <img
          src={Img}
          alt="Rectangle20"
          style={{
            height: 109.14,
            width: 194.02,
            borderRadius: 2,
            marginTop: 8,
            marginLeft: 8,
          }}
        />
        <div style={{display:'flex',flexDirection:"column"}}>
        <Typography
          style={{
            width: 166,
            height: 28,
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: 17.8,
            color: "#333333",
            marginLeft: 10,
            marginTop: 8,
          }}
        >
          Lorem ipsum sit a
        </Typography>

        <div
          style={{
            width: 171,
            height: 33,
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: 9.9,
            color: "#666666",
            marginTop: 3,
            marginLeft: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
          sit amet,
        </div>
        <div style={{display:"flex",flexDirection:"row",marginLeft:10.1,marginTop:18,color: "rgba(252, 238, 33, 1)",width:70,justifyContent:"space-between"}}>
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
