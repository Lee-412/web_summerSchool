

const postLearnerData = async(formData: object) => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/students`, { 
      
        method: "POST", 
        
        body: JSON.stringify({ 
            "data" : formData
        }), 
        
        headers: { 
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    if(res.status !== 200) {
        let error = await res.json()
        return (error.error.details.errors)
    }
    
} 

export const updateRelationtoCourse = async(student_id:number)=>{
    let res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/courses?populate=*`, {cache: "no-store"})
    let courses = await res.json()
    let available_courses = courses.data.filter((course:any)=>{
            return course.attributes.available
    })
    const id_update = available_courses[0].id
    let current_student = []
    if(available_courses[0].students !== undefined) {
         current_student = available_courses[0].students.data
    }
    
    let current_students_id = []
    for(let i = 0; i < current_student.length; i++) {
        current_students_id.push(current_student[i].id)
    }
    const data_update:object = {
        method: 'PUT',
        body: JSON.stringify({
            data: {
                students: {
                        connect: [...current_students_id,student_id]
                }
            }
        }),
        headers: {
            "Content-Type": "application/json" // Ensure headers are set
        }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/courses/${id_update}`, data_update)
    if (response.status !== 200) {
        let error = await response.json()
        return error
    }
}

export const postFileData = async (file:any) => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_URL}/upload`, file)
}


export const example_data = {
            "name": "vang",
            "Birthday": "2024-05-07",
            "IdentityCode": "038304001173",
            "MSV": "22028107",
            "email": "huhuha7@gmail.com",
            "phone": "0188234568",
            "gender": "male",
            "Address": "tran binh",
            "Purpose": "Hello from the other side",
            "classification": "Sinh viên"
}



export default postLearnerData;


