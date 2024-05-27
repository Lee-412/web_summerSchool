'use client'

import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import './newsItem.css'
import TagNumber from "../tagNumber/tagnumber";
interface IProps {
    title: string,
    img: string,
    category: string,
}

const NewsItem = (props: IProps) => {

    const router = useRouter()

    const handleClickLearnMore = () => {
        router.push('/');
    }
    console.log(`${process.env.STRAPI_LINK_URL}${props.img}`);
    console.log(props.category);

    return (
        <Container sx={{
            marginLeft: "3%",
            display: "flex",
            width: "100%",
            height: "500px",
        }}>

            <div className="lefDiv" >

                <span className="title">
                    {props.title}
                </span>
                <span >
                    {props.category}
                </span>

                <Button
                    onClick={handleClickLearnMore}
                    variant="outlined"
                    className="btnLeanrMore"
                >
                    Learn More
                </Button>

            </div>
            <div className="rightDiv">
                <img src={`http://127.0.0.1:1337${props.img}`} alt="" style={{
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
