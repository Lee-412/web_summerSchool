'use client'

import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import './advertise.css'
import TagNumber from "../tagNumber/tagnumber";
import { useState } from "react";
import StudentFormModal from "../formModalRegister/formRegister";
import Courses_Information from "./courses-information";

interface AboutAdvertiseProps {
    advertise: Data_advertise[];
}
export interface Data_advertise {
    img: string,
    title: string,
    fee: string,
    size: string,
    start_day: string,
    end_day: string,
    available: string

}

const AboutAdvertise = ({ advertise }: AboutAdvertiseProps) => {
    console.log(advertise);

    const [open, setOpen] = useState(false);
    const [open_information, setOpenInformation] = useState(false)
    const router = useRouter()
    const handleClickRegister = () => {
        setOpen(true)
    }
    const handleClickLearnMore = () => {
        setOpenInformation(true)
    }
    return (
        <Container sx={{
            marginLeft: "3%"
        }}>
            {
                advertise.map((courses: Data_advertise) => {
                    if (courses.available === "true") {
                        return (
                            <div className="divContainer">

                                <div className="lefDiv" >

                                    <span className="title">
                                        {courses.title}
                                    </span>

                                    {/* <p className="infor">
                                        Accessible education for all.
                                    </p> */}
                                    <div className="divButton">
                                        <Button
                                            onClick={handleClickRegister}
                                            variant="contained"
                                            className="btnGetStarted"
                                        >
                                            Đăng ký
                                        </Button>
                                        <Button
                                            onClick={handleClickLearnMore}
                                            variant="outlined"
                                            className="btnLeanrMore"
                                        >
                                            Learn More
                                        </Button>


                                    </div>
                                    <div
                                        className="tag_number"
                                        style={{
                                            display: "flex",
                                            marginTop: "30px"
                                        }}>
                                        <TagNumber title={"Ngày bắt đầu"} des={courses.start_day} />
                                        <TagNumber title={"Ngày kết thúc"} des={courses.end_day} />
                                        <TagNumber title={"Số lượng"} des={courses.size} />
                                    </div>
                                </div>
                                <div className="rightDiv">
                                    <img src="http://127.0.0.1:1337/uploads/thumbnail_3_055694c7b4.jfif" alt="" style={{
                                        width: "90%",
                                        height: "73%",
                                        objectFit: 'cover',
                                        borderRadius: "50px",

                                    }} />
                                </div>
                            </div >
                        )
                    }
                })
            }
            {/* <div className="divContainer">

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
                            Đăng ký
                        </Button>
                        <Button
                            onClick={handleClickLearnMore}
                            variant="outlined"
                            className="btnLeanrMore"
                        >
                            Learn More
                        </Button>


                    </div>
                    <div
                        className="tag_number"
                        style={{
                            display: "flex",
                            marginTop: "30px"
                        }}>
                        <TagNumber title={"100K+"} des={"students"} />
                        <TagNumber title={"1K+"} des={"students"} />
                        <TagNumber title={"100+"} des={"students"} />

                    </div>
                </div>
                <div className="rightDiv">
                    <img src="http://127.0.0.1:1337/uploads/thumbnail_3_055694c7b4.jfif" alt="" style={{
                        width: "90%",
                        height: "73%",
                        objectFit: 'cover',
                        borderRadius: "50px",

                    }} />
                </div>
            </div > */}
            <StudentFormModal open={open} setOpen={setOpen} />
            <Courses_Information
                open={open_information}
                setOpen={setOpenInformation}
            />
        </Container>


    )
}
export default AboutAdvertise;