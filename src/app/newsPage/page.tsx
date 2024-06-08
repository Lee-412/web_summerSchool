import FooterApp from "@/Component/footerApp/footer";
import MainSlider, { dataSldier } from "@/Component/newMainSlider/mainSlider";
import HeaderApp from "@/Component/headerApp/header";
import { Box } from "@mui/material";
import DisplayContent from "@/Component/newMainSlider/format_data";
import NewsListItem from "@/Component/newsBase/news";


const NewsPgae = async () => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/news?populate=*`, { cache: "no-store" })
    const news = await res.json()
    console.log(news);

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

        const slider_data: dataSldier =
        {
            id: _id,
            author: _author,
            content: _content,
            category: _category,
            img: img_url,
            title: title,
            data: new1
        }
        slider.push(slider_data)
    })

    return (
        <Box>
            <HeaderApp />
            <MainSlider
                sliderData={slider}
            // data={news.data[0]}
            />
            <NewsListItem sliderData={slider} />
            <FooterApp />
        </Box>
    )
}
export default NewsPgae;