import { Box, Container } from "@mui/material";
import SearchBase from "../searchBase/search";
import ReviewCard from "../cardBase/card";
import { log } from "console";
const HomeCourses = async () => {
    const res = await fetch(`${process.env.STRAPI_LINK_API_URL}/courses?populate=*`, { cache: "no-store" })
    const courses = await res.json()
    // console.log(courses);
    let cards: any[] = []
    courses.data.map((course: any) => {
        console.log(course.attributes.Thumbnail.data.attributes.url);
        //console.log(course.attributes);
        let img_url = `${process.env.STRAPI_LINK_URL}${course.attributes.Thumbnail.data.attributes.url}`
        let title = `${course.attributes.name}`
        let card_info =
        {
            img: img_url,
            title: title,
        }
        cards.push(card_info)
    })
    //console.log(cards);

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
            {/* <p style={{ height: "30px" }}></p> */}
            <SearchBase color={"#FFFFFF"} />
            <Box sx={{
                width: "80%",
                marginTop: "50px",
                display: "flex",

                justifyContent: "space-evenly",
                flexWrap: "wrap",
                paddingBottom: "5%"
            }}>
                {
                    cards.map((card: any) => {
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
