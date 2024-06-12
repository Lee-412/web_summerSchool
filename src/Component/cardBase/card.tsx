'use client'

import { useState } from "react";
import "./card.css"
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Data_advertise } from "@/Component/homeAdvertise/home-advertise";
import Courses_Information from "@/Component/homeAdvertise/courses-information";


export default function ReviewCard(cardInfo: any) {


    const [open_information, setOpenInformation] = useState(false);

    return (
        <Card 
        sx=
            {{ 
                width: 300,
                backgroundColor: "#007ec5" ,
                borderRadius: 5,
                marginBottom: 6
             }} className="card">

            <CardMedia
                component="img"
                height="194"

                image={cardInfo.card_info.img}
                alt="Course image"
                sx={{
                    objectFit: "cover",
                    minWidth: 300,
                    borderRadius: 5
                }}
                onClick={()=>{
                    setOpenInformation(true)
                }}
            />

            <CardContent>
                <Typography variant="body2" color="white"
                    sx={{
                        textAlign: "center"
                    }}>
                    {cardInfo.card_info.title}
                </Typography>
            </CardContent>

            <Courses_Information
                open={open_information}
                setOpen={setOpenInformation}
                props_data={cardInfo.card_info}
            />

        </Card>
    );
}