"use client"

import './searchBar.css'
import { Box, Container, Dialog, IconButton } from "@mui/material";
import ReviewCard from "../cardBase/card";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

interface ICdata {
    data: Array<object>
}


const HomeCourses = (props: ICdata) => {
    let initialData: Array<object> = []
    let size = props.data.length
    if (props.data.length >= 6) {
        for (let i = size - 1; i >= size - 6; i--) {
            initialData.push(props.data[i])
        }
    } else {
        initialData = props.data
    }



    const [input, setInput] = useState('');
    const [courses_render, setCoursesRender] = useState(initialData)

    function handdleInput(e: any) {
        let content = e.target.value
        console.log(e.target.value)
        let course_check: Array<object> = []
        props.data.map((course: any) => {
            if (course.title.toLowerCase().includes(content.toLowerCase())) {
                course_check.push(course)
            }
        })
        if (content === "") {
            setCoursesRender(initialData)
        } else {
            setCoursesRender(course_check)
        }
    }

    // console.log(props.data);

    return (
        <Box
            sx={{
                backgroundColor: "#007ec5",
                margin: 0,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                paddingTop: "50px",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                paddingBottom: "5%"
            }}>

            <Box
                className = 'search-bar'
                sx={{

                    p: '0.25% 2%', display: 'flex', width: 800,
                    backgroundColor: '#FFFFFF',
                    borderRadius: "30px",
                    justifyContent: " center"
                }}
            >
                <IconButton type="button" sx={{ p: '10px', color: "#208ecc " }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase className='input-courses'
                    sx={{ ml: 1, flex: 1, color: "#63b0db" }}
                    placeholder="Search for what to learn"
                    inputProps={{ 'aria-label': 'search for what to learn' }}
                    onChange={handdleInput}
                />
            </Box>


            <Box sx={{
                width: "80%",
                marginTop: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                paddingBottom: "5%"
            }}>
                {
                    courses_render.map((card: any) => {
                        return (
                            <ReviewCard card_info={card} />
                        )
                    })
                }
            </Box>
            <h2 style={{ color: "white" }}>Upcoming Courses...</h2>
        </Box>
    )

}
export default HomeCourses;
