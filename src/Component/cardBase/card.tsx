'use client'

import "./card.css"
import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";


export default function ReviewCard(cardInfo:any) {

   // console.log(cardInfo.card_info)
    

    return (
        <Card sx=
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
                alt="Paella dish"
                sx={{
                    objectFit: "cover",
                    minWidth: 300,
                    borderRadius: 5
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


        </Card>
    );
}