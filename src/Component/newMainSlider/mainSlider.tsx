'use client'
import { useState } from 'react';
import './slider.css'
import { Box } from '@mui/material';
import { Button } from 'antd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NewsItem from './newsItem';

const ImageSlider = (props: any) => {

    console.log(props);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex === 0 ? props.sliderData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.sliderData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column"

        }}>

            <Box>
                {
                    props.sliderData.map((data: {
                        id: number; title: string; category: string; img: string;
                    },
                        index: number) => {
                        return (
                            <div
                                key={data.id}
                                style={{
                                    display: index === currentIndex ? 'block' : 'none'
                                }}>

                                <NewsItem

                                    title={data.title}
                                    category={data.category}
                                    img={data.img} />
                            </div>
                        )
                    })
                }
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "Center"
            }}>
                <Button onClick={handlePrev}><ArrowBackIosNewIcon /></Button>
                <Button onClick={handleNext}><ArrowForwardIosIcon /></Button>
            </Box>

        </Box >
    );
};

export default ImageSlider;