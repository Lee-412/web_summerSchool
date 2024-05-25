'use client'

import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";


export default function ReviewCard(cardInfo: any) {

    // console.log(cardInfo.card_info)


    return (
        <Box sx={{ maxWidth: 200, backgroundColor: "#007ec5" }}>


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


        </Box>
    );
}