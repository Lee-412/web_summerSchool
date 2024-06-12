interface IErr {
    field: string,
    message: string
}

const validateRegisterDataErrs = (errs: Array<object>) => {
    
    let err_arr: object[] = []
    errs.map((err:any)=>{
        let res_err:IErr = {
            field: err.path[0],
            message: err.message
        }
        err_arr.push(res_err)
    })
    return err_arr
}

export default validateRegisterDataErrs