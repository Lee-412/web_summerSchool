import UpcomingCourses from "@/Component/UpcomingCourses/UpcomingCourses";
import Feature from "@/Component/featuresView/feature";
import FooterApp from "@/Component/footerApp/footer";
import HeaderApp from "@/Component/headerApp/header";
import AboutAdvertise from "@/Component/homeAdvertise/home-advertise";
import HomeCourses from "@/Component/homeCoursesComponent/mainCourses";
import { Box, } from "@mui/material";

export async function fetcher(url: string) {
  let response;
  let url_fetch;
  url_fetch = new URL(url)
  // let request_option = new RequestInit()


  response = await fetch(url_fetch, { cache: "no-store" });

  const data = await response.json();
  return data;
}
//http://localhost:1337/api/courses
export default async function HomePage() {
  // const data = await fetcher("http://localhost:1337/api/courses?populate=*")
  // console.log(data);

  return (
    <Box sx={{

    }}>

      <HeaderApp />
      <AboutAdvertise />
      <UpcomingCourses/>
      <Feature/>
      <FooterApp />
    </Box>
  );
}
