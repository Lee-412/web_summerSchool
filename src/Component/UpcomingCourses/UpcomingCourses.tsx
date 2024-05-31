import HomeCourses from "@/Component/homeCoursesComponent/mainCourses";
const UpcomingCourses = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/courses?populate=*`, { cache: "no-store" })
    const courses = await res.json()
    console.log(courses);
    let cards: any[] = []
    courses.data.map((course: any) => {
        // console.log(course.attributes.Thumbnail.data.attributes.url);
        //console.log(course.attributes);
        let img_url = `${process.env.NEXT_PUBLIC_STRAPI_LINK_URL}${course.attributes.Thumbnail.data.attributes.url}`
        let title = `${course.attributes.name}`
        let card_info =
        {
            img: img_url,
            title: title,
        }
        cards.push(card_info)
    })
    console.log(cards);
    
    return (
       <>
        <HomeCourses data={cards}/>
       </>
    )

}
export default UpcomingCourses;
