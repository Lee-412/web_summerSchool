interface IErr {
    field: string,
    message: string
}

const validateRegisterData = (errs: Array<object>) => {
    
    let err_arr: object[] = []
    errs.map((err:any)=>{
        let res_err:IErr = {
            field: err.path[0],
            message: err.message
        }
        console.log(res_err.field);
        console.log(res_err.message);
        
        err_arr.push(res_err)
    })
    return err_arr
}

export default validateRegisterData