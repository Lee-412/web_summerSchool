const findStudentId = async(IdentityCode:any)=> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/students`, {cache: "no-store"})
    const students = await res.json()
    const student_finding = students.data.find((student:any)=>student.attributes.IdentityCode == IdentityCode);
    return parseInt(student_finding.id)
}

export default findStudentId