import FooterApp from "@/Component/footerApp/footer";
import MainSlider from "@/Component/newMainSlider/mainSlider";
import HeaderApp from "@/Component/headerApp/header";
import { Box } from "@mui/material";


const NewsPgae = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/news?populate=*`, { cache: "no-store" })
    const news = await res.json()
    console.log(news);

    const res1 = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/students?populate=*`, { cache: "no-store" })
    const news1 = await res1.json()
    console.log(news1);

    const slider: any[] = []
    news.data.map((new1: any) => {
        const img_url = new1.attributes.media.data[0].attributes.url;
        const _id = new1.id
        const title = new1.attributes.title
        const _category = new1.attributes.category
        const _author = new1.attributes.Author

        let _content = ""
        new1.attributes.content.map((data: any) => {
            data.children.map((child: any) => {
                _content += child.text + "\r\n"; // sử dụng \r\n\r\n để xuống hàng và tạo khoảng cách giữa các đoạn
            });
        });

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