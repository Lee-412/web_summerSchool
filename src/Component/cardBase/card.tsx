'use client'

import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";


export default function ReviewCard({cardInfo}:any) {



    return (
        <Card sx={{ maxWidth: 345, backgroundColor: "#007ec5" }}>

            <CardMedia
                component="img"
                height="194"
                image={cardInfo.img}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {cardInfo.title}
                </Typography>
            </CardContent>


        </Card>
    );
}