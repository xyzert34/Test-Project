import { Paper, Typography } from '@mui/material'
import React from 'react'
import Rectangle24 from "../images/Rectangle 24.png";
import course4 from '../images/corses4.png'
import courses5 from '../images/courses5.png'
import courses6 from '../images/EDTCH9 M-image16.png'
import Template2 from './Template2';
import Rectangle20 from '../images/Rectangle 20.png'
import useViewport from '../viewport';
import college from "../images/college college c 1 (1).png";
const Card4 = () => {
  const {width,height,isMobile,isTablet}=useViewport();
    return (
            <Paper
        elevation={3}
        style={{
          
        width: isMobile? "80%": isTablet?"90%":"120%",
        height: isMobile?"30%": isTablet?"30%":"69%",
          // marginLeft: "4%",
          marginTop: "4%",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.06)",
          // display: "flex",
        }}
      >
        <img
          style={{ height: "5%", width: "6%", marginTop: "2%", marginLeft: "2%" }}
          src={college}
          alt="Upcoming"
        />

        <Typography
          variant="h3"
          style={{
            fontWeight: 600,
            marginLeft: "9%",
            marginTop: "-10%",
            marginBottom: "5%",
            fontSize: "150%",
          }}
        >
          My Courses
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Template2 Img={course4}/>
          <Template2 Img={courses5}/>
          <Template2 Img={courses6}/>
          <Template2 Img={Rectangle24}/>
          <Template2 Img={Rectangle20}/>
        </div>
      </Paper>
    )
}

export default Card4
