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
}

const NewsItem = (props: IProps) => {

    const [modal_learnMore, setModalLearnMore] = useState(false)
    const router = useRouter()

    const handleClickLearnMore = () => {
        setModalLearnMore(true)
    }
    // console.log(`${process.env.NEXT_PUBLIC_STRAPI_LINK_URL}${props.img}`);
    // console.log(props.category);

    return (
        <>
            <Container sx={{
                marginLeft: "3%",
                display: "flex",
                height: "500px",
            }}>

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
                    <img src={`http://127.0.0.1:1337${props.img}`} alt="" style={{
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
            />
        </>
    )
}
export default NewsItem;
