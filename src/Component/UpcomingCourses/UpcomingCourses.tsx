import HomeCourses from "@/Component/homeCoursesComponent/mainCourses";
import AboutAdvertise, { Data_advertise } from "../homeAdvertise/home-advertise";
const UpcomingCourses = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/courses?populate=*`, { cache: "no-store" })
    const courses = await res.json()
    console.log(courses);
    let cards: any[] = []
    let advertise: Array<Data_advertise> = []
    courses.data.map((course: any) => {

        let img_url = `${process.env.NEXT_PUBLIC_STRAPI_LINK_URL}${course.attributes.Thumbnail.data.attributes.url}`
        let title = `${course.attributes.name}`

        let _fee = `${course.attributes.TuitionFee}`
        let _size = `${course.attributes.Size}`
        let _start_day = `${course.attributes.Start}`
        let _end_day = `${course.attributes.end}`
        let _available = `${course.attributes.available}`

        let card_info =
        {
            img: img_url,
            title: title,
            fee: _fee,
            size: _size,
            start_day: _start_day,
            end_day: _end_day
        }

        let data_courses =
        {
            img: img_url,
            title: title,
            fee: _fee,
            size: _size,
            start_day: _start_day,
            end_day: _end_day,
            available: _available
        }


        cards.push(card_info)
        advertise.push(data_courses)
    })

    return (
        <>

            <AboutAdvertise advertise={advertise} />
            <HomeCourses data={cards} />
        </>
    )

}
export default UpcomingCourses;
