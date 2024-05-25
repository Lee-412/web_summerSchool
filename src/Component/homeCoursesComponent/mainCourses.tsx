import { Box, Container } from "@mui/material";
import SearchBase from "../searchBase/search";
import ReviewCard from "../cardBase/card";
const HomeCourses = () => {
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
                alignItems: "center"
            }}>
            {/* <p style={{ height: "30px" }}></p> */}
            <SearchBase color={"#FFFFFF"} />
            <Box sx={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />

            </Box>
        </Box>
    )

}
export default HomeCourses;
