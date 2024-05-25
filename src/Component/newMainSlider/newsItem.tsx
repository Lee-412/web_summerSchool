'use client'

import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import './newsItem.css'
import TagNumber from "../tagNumber/tagnumber";
interface IProps {
    title: string,
    img: string
}

const NewsItem = (props: IProps) => {

    const router = useRouter()

    const handleClickLearnMore = () => {
        router.push('/');
    }
    return (
        <Container sx={{
            marginLeft: "3%",
            display: "flex",
            width: "100%",
            height: "50%"
        }}>

            <div className="lefDiv" >

                <span className="title">
                    {props.title}
                </span>

                <p className="infor">
                    Accessible education for all.
                </p>

                <Button
                    onClick={handleClickLearnMore}
                    variant="outlined"
                    className="btnLeanrMore"
                >
                    Learn More
                </Button>

            </div>
            <div className="rightDiv">
                <img src={`${process.env.STRAPI_LINK_URL}${props.img}`} alt="" style={{
                    width: "90%",
                    height: "100%",
                    objectFit: 'cover',
                    borderRadius: "50px",

                }} />
            </div>
        </Container>


    )
}
export default NewsItem;