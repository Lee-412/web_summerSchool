const postLearnerData = async(formData: object) => {
    console.log(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/students`);
    
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL}/students`, { 
      
    // Adding method type 
        method: "POST", 
        
        // Adding body or contents to send 
        body: JSON.stringify({ 
            "data" : formData
        }), 
        
        // Adding headers to the request 
        headers: { 
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((res)=>{
        console.log(res);
        console.log(res.status);
        
        
    }).catch((e)=>{
        console.log(e);
        
    }) 
    
} 

export const postFileData = async (file:any) => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_LINK_URL}/upload`, file)
}


export const data = {
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







//  token: 8def6f5c8063626149160dc48a651c1828eb2d01ec07af3cfc161f6632dcdda29
// 5c1690d207d400be7fb5ae651b4b1d63590c655b665c48f00497bb529f1c4cf485b148757e9
// 0abf9034f834709eef7bc68df4894010f372c969a22d840cdd748bf2ad2fa820e99204ccde8
// 6af92e754cc02c4f54e60839bf26a83bd624c7ee9