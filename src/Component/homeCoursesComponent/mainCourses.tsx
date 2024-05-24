import { Box, Container } from "@mui/material";
import SearchBase from "../searchBase/search";
import ReviewCard from "../cardBase/card";
const HomeCourses = async() => {
    const res = await fetch(`${process.env.STRAPI_LINK_API_URL}/courses?populate=*`, {cache: "no-store"})
    const courses = await res.json()
    console.log(courses);
    courses.data.map((course :any)=>{
        console.log(course.attributes.Thumbnail.data.attributes.url);
        console.log(course.attributes);
    })
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
                paddingBottom: "8%"
            }}>
            {/* <p style={{ height: "30px" }}></p> */}
            <SearchBase color={"#FFFFFF"} />
            <Box sx={{
                width: "80%",
                marginTop: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                paddingBottom:"5%"
            }}>
                {}
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </Box>
            <h2 style={{color: "white"}}>Upcoming Courses...</h2>
        </Box>
    )

}
export default HomeCourses;
