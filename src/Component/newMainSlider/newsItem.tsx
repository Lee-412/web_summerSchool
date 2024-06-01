'use client'

import { Box, Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import './newsItem.css'
import { useState } from "react";
import ModalLearnMore from "./modal_learn_more";
interface IProps {
    title: string,
    img: string,
    category: string,
    author: string,
    content: string,
    data: any
}

const NewsItem = (props: IProps) => {

    const [modal_learnMore, setModalLearnMore] = useState(false)
    const router = useRouter()
    console.log(props.data);

    const handleClickLearnMore = () => {
        setModalLearnMore(true)
    }

    return (
        <>
            <Container sx={{
                marginLeft: { xs: "0%", sm: "3%" },
                display: "flex",
                // flexDirection: { xs: "column", md: "row" },
                // alignItems: { xs: "center", md: "center" },
                height: { md: "80vh", xs: "80%" },
                // height: "80vh"

            }}
                className="slide_container"
            >

                <div className="left_news" >

                    <span className="title_news">
                        {props.title}
                    </span>
                    <span className="author">
                        {props.author}
                    </span>
                    <div>

                        <Button
                            onClick={handleClickLearnMore}
                            variant="outlined"
                            className="leanr_more"
                        >
                            Learn More
                        </Button>
                    </div>

                </div>

                <div className="right_news">
                    <img src={`http://127.0.0.1:1337${props.img}`} alt=""
                        className="image"
                        style={{
                            width: "90%",
                            height: "100%",
                            objectFit: 'cover',
                            borderRadius: "50px",

                        }} />

                </div>

            </Container>
            <ModalLearnMore
                img={props.img}
                author={props.author}
                title={props.title}
                content={props.content}
                openModal={modal_learnMore}
                setOpenModal={setModalLearnMore}
                data={props.data}
            />
        </>
    )
}
export default NewsItem;
