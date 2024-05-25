import FooterApp from "@/Component/footerApp/footer";
import MainSlider from "@/Component/newMainSlider/mainSlider";
import HeaderApp from "@/Component/headerApp/header";
import { Box } from "@mui/material";
import ImageSlider from "@/Component/newMainSlider/mainSlider";
import { Category } from "@mui/icons-material";
import { log } from "console";

const NewsPgae = async () => {
    const res = await fetch(`${process.env.STRAPI_LINK_API_URL}/news?populate=*`, { cache: "no-store" })
    const news = await res.json()
    // console.log(news);
    // const datas = {
    //     id: news.data.id,
    //     title: news.data.attributes.title,
    //     category: news.data.attributes.category,
    //     content: news.data.attributes.content.children.text,
    //     url_img: news.data.attributes.media.url

    // }
    // console.log(datas);
    // console.log(news.data);
    const slider: any[] = []
    news.data.map((new1: any) => {
        // console.log(course.attributes.Thumbnail.data.attributes.url);
        // console.log(new1.attributes);
        const img_url = new1.attributes.media.data[0].attributes.url;
        // console.log(img_url);
        const _id = new1.id
        const title = new1.attributes.title
        // console.log(title);

        const slider_data =
        {
            id: _id,
            img: img_url,
            title: title,
        }
        slider.push(slider_data)
    })
    //chay map. nem data theo news.data[0]
    //nem 1 cuc data, nhung dong nghia voi viec phai viet interface
    return (
        <Box>
            <HeaderApp />

            <MainSlider
                sliderData={slider}
            />


            <FooterApp />
        </Box>
    )
}
export default NewsPgae;