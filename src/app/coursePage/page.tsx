import SearchBase from "@/Component/searchBase/search";
import { Box } from "@mui/material";

const CoursesPage = () => {
    return (
        <>
            <Box

                sx={{
                    backgroundColor: "#007ec5",
                    margin: 0,
                    width: "100%",
                    display: "flex",
                    paddingTop: "50px",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center"
                }}>
                {/* <p style={{ height: "30px" }}></p> */}
                <SearchBase color={"#FFFFFF"} />
            </Box>
        </>
    )
}
export default CoursesPage;