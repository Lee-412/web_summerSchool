'use client'

import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import './advertise.css'
import TagNumber from "../tagNumber/tagnumber";

const AboutAdvertise = () => {

    const router = useRouter()
    const handleClickRegister = () => {
        router.push('/');
    }
    const handleClickLearnMore = () => {
        router.push('/');
    }
    return (
        <Container sx={{
            marginLeft: "3%"
        }}>
            <div className="divContainer">

                <div className="lefDiv" >

                    <span className="title">
                        Knowledge for
                    </span>
                    <span className="title">
                        everyone, everywhere
                    </span>
                    <p className="infor">
                        Accessible education for all.
                    </p>
                    <div className="divButton">
                        <Button
                            onClick={handleClickRegister}
                            variant="contained"
                            className="btnGetStarted"
                        >
                            Learn More
                        </Button>
                        <Button
                            onClick={handleClickLearnMore}
                            variant="outlined"
                            className="btnLeanrMore"
                        >
                            Learn More
                        </Button>


                    </div>
                    <div style={{
                        display: "flex",
                        marginTop: "30px"
                    }}>
                        <TagNumber title={"100K+"} des={"students"} />
                        <TagNumber title={"1K+"} des={"students"} />
                        <TagNumber title={"100+"} des={"students"} />

                    </div>
                </div>
                <div className="rightDiv">
                    <img src="" alt="" style={{
                        width: "90%",
                        height: "73%",
                        objectFit: 'cover',
                        borderRadius: "50px",

                    }} />
                </div>
            </div >
        </Container>


    )
}
export default AboutAdvertise;