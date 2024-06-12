'use client'

import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
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
    available: string,
    description: string

}



const AboutAdvertise = ({ advertise }: AboutAdvertiseProps) => {
    console.log(advertise);
    const [open, setOpen] = useState(false);
    const [open_information, setOpenInformation] = useState(false);
    const [open_noRegister, setOpenNoRegister] = useState(false)
    const [data, setData] = useState<Data_advertise | null>()
    const router = useRouter()
    const rendered_course = advertise.filter((course:Data_advertise)=>{return course.available === "true"})
    console.log(rendered_course);
    
    const empty = rendered_course.length === 0 ? true : false
    const handleClickRegister = (e:any) => {
        const courseDateStart = new Date(rendered_course[0].start_day)
        const courseDateEnd = new Date(rendered_course[0].end_day)
        const excuteTime = new Date()
        if(excuteTime < courseDateStart || excuteTime > courseDateEnd){
            setOpenNoRegister(true)
        } else {
            setOpen(true)
        }
        
    }
    const handleClickLearnMore = () => {

        setOpenInformation(true)
    }
    const handleCancel = () => {
        setOpenNoRegister(false)
    }
    


    function renderAvailableCourse (isEmpty:boolean, courses:any){
        
        if(isEmpty == true){          
            return (
                <div className="divContainer"  >
    
                    <div className="lefDiv" >
                        <span className="title">
                            Hiện tại không có khóa học nào đang mở đăng ký
                        </span>
                    </div>
                </div >
            )
        }
        else {
            return courses.map((course: Data_advertise) => {
                
                return (
                    <div className="divContainer"   >
    
                        <div className="lefDiv" >
    
                            <span className="title">
                                {course.title}
                            </span>
    
                            <div className="divButton">
                                <Button
                                    onClick={handleClickRegister}
                                    variant="contained"
                                    className="btnGetStarted"
                                >
                                    Đăng ký
                                </Button>
                                <Button
                                    onClick={() => {
                                        setData(course)
                                        handleClickLearnMore()
                                    }}
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
                                <TagNumber title={"Ngày bắt đầu"} des={course.start_day} />
                                <TagNumber title={"Ngày kết thúc"} des={course.end_day} />
                                <TagNumber title={"Số lượng"} des={course.size} />
                            </div>
                        </div>
                        <div className="rightDiv">
                            <img src={course.img} alt="" style={{
                                width: "90%",
                                height: "73%",
                                objectFit: 'cover',
                                borderRadius: "50px",
    
                            }} />
                        </div>
                    </div >
                )
            }
            )
        }
    }



    return (
        <Container sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column"

        }}>
            {
                renderAvailableCourse(empty, rendered_course)
            }

            <StudentFormModal open={open} setOpen={setOpen} />
            <Courses_Information
                open={open_information}
                setOpen={setOpenInformation}
                props_data={data}
            />
            <Dialog open={open_noRegister} maxWidth="md" fullWidth>
                <DialogTitle>Thời gian đăng ký khóa học không hợp lệ</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        Exit
                    </Button>
                </DialogActions>
            </Dialog>
        </Container >


    )
}
export default AboutAdvertise;