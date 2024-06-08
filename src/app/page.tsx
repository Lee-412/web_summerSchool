import UpcomingCourses from "@/Component/UpcomingCourses/UpcomingCourses";
import Feature from "@/Component/featuresView/feature";
import FooterApp from "@/Component/footerApp/footer";
import HeaderApp from "@/Component/headerApp/header";
import AboutAdvertise from "@/Component/homeAdvertise/home-advertise";
import HomeCourses from "@/Component/homeCoursesComponent/mainCourses";
import { Box, } from "@mui/material";

export default async function HomePage() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/courses?populate=*`, { cache: "no-store" })
    const data = await response.json()
    //console.log(data);
     

  return (
    <Box sx={{
    }}>
      <HeaderApp data={data}/>
      <UpcomingCourses />
      <Feature />
      <FooterApp />
    </Box>
  );
}
