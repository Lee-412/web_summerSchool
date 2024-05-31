const findStudentId = async(IdentityCode:any)=> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/students`, {cache: "no-store"})
    const students = await res.json()
    console.log(students);
    const student_finding = students.data.find((student:any)=>student.attributes.IdentityCode == IdentityCode);
    console.log(student_finding.id);
    return parseInt(student_finding.id)
}

export default findStudentId