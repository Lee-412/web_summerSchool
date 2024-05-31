import Feature from "@/Component/featuresView/feature";
import FooterApp from "@/Component/footerApp/footer";
import HeaderApp from "@/Component/headerApp/header";
import AboutAdvertise from "@/Component/homeAdvertise/home-advertise";
import HomeCourses from "@/Component/homeCoursesComponent/mainCourses";
import { Box, } from "@mui/material";

export default async function HomePage() {


  return (
    <Box sx={{

    }}>

      <HeaderApp />
      <AboutAdvertise />
      <HomeCourses />
      <Feature />
      <FooterApp />
    </Box>
  );
}
