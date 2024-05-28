import FooterApp from "@/Component/footerApp/footer";
import MainSlider from "@/Component/newMainSlider/mainSlider";
import HeaderApp from "@/Component/headerApp/header";
import { Box } from "@mui/material";
import ImageSlider from "@/Component/newMainSlider/mainSlider";
import { Category } from "@mui/icons-material";
import { log } from "console";

const NewsPgae = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/news?populate=*`, { cache: "no-store" })
    const news = await res.json()
    console.log(news);

    // console.log(news.data[1].id);
    const slider: any[] = []
    news.data.map((new1: any) => {
        // console.log(new1.attributes);
        const img_url = new1.attributes.media.data[0].attributes.url;
        // console.log(img_url);
        const _id = new1.id
        const title = new1.attributes.title

        // console.log(title);
        const _category = new1.attributes.category
        // console.log(_category);

        const _author = new1.attributes.Author
        // console.log(_author);
        const _content = new1.attributes.content[0].children[0].text
        // console.log(_content);

        const slider_data =
        {
            id: _id,
            author: _author,
            content: _content,
            category: _category,
            img: img_url,
            title: title,
        }
        slider.push(slider_data)
    })

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