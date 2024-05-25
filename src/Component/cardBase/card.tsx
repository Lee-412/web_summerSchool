'use client'

import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";


export default function ReviewCard() {



    return (
        <Box sx={{ maxWidth: 200, backgroundColor: "#007ec5" }}>

            <CardMedia
                component="img"
                height="194"
                image=""
                alt="Paella dish"
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>


        </Box>
    );
}