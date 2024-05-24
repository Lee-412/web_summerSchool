import FooterApp from "@/Component/footerApp/footer";
import HeaderApp from "@/Component/headerApp/header";
import AboutAdvertise from "@/Component/homeAdvertise/home-advertise";
import HomeCourses from "@/Component/homeCoursesComponent/mainCourses";
import { Box, } from "@mui/material";

export default function HomePage() {


  return (
    <Box sx={{

    }}>
      <HeaderApp />
      <AboutAdvertise />
      <HomeCourses />
      <FooterApp />
    </Box>
  );
}
