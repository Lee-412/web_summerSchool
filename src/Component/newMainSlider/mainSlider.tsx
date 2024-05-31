'use client'
import { useState } from 'react';
import './slider.css'
import { Box } from '@mui/material';
import { Button } from 'antd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NewsItem from './newsItem';

interface dataSldier {
    id: number,
    author: string,
    content: string,
    category: string,
    img: string,
    title: string,
}
const ImageSlider = (props: any) => {

    console.log(props);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            // (prevIndex === 0 ? props.sliderData.length - 1 : prevIndex - 1));
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
            {props != "" ?
                <>
                    <Box>
                        {

                            props.sliderData.map((data: dataSldier,

                                index: number) => {
                                return (
                                    <div
                                        key={data.id}
                                        style={{
                                            display: index === currentIndex ? 'block' : 'none'
                                        }}>

                                        <NewsItem
                                            author={data.author}
                                            title={data.title}
                                            category={data.category}
                                            img={data.img}
                                            content={data.content} />
                                    </div>
                                )
                            })
                        }
                    </Box>
                </> :
                <>
                    <Box>

                        <NewsItem
                            author={"No entry data"}
                            title={"No entry data"}
                            category={"No entry data"}
                            img={""}
                            content={"no entry "} />

                    </Box>
                </>

            }
            {/* <Box>
                {

                    // props.sliderData.map((data: {
                    //     id: number; title: string; category: string; img: string; author: string;
                    // },
                    //     index: number) => {
                    //     return (
                    //         <div
                    //             key={data.id}
                    //             style={{
                    //                 display: index === currentIndex ? 'block' : 'none'
                    //             }}>

                    //             <NewsItem
                    //                 author={data.author}
                    //                 title={data.title}
                    //                 category={data.category}
                    //                 img={data.img} />
                    //         </div>
                    //     )
                    // })
                }
            </Box> */}

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
