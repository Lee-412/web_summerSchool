// components/StudentFormModal.js

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, Grid, Typography, Avatar, Stack, Box } from '@mui/material';

import postLearnerData, { postFileData, updateRelationtoCourse } from '@/Component/formModalRegister/postData';
import CustomizedSnackbars from '@/Component/customizeSnackedBar/SnackedBar';
import SuccessBar from '@/Component/customizeSnackedBar/SuccesBar';
import validateRegisterDataErrs from '@/Component/formModalRegister/validateData';
import findStudentId from '@/Component/formModalRegister/findStudent';
const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
];
const roles = [
    { value: 'Sinh viên', label: 'Student' },
    { value: 'Người đi làm', label: 'Worker' },
    { value: 'Khác', label: 'Other' },
];
// interface data {
//     open: boolean,
//     onClose: void
// }
console.log(process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL);

const StudentFormModal = (props: any) => {
    const { open, setOpen } = props;
    const [open_bar, setOpenBar] = React.useState(false);
    const [open_success, setOpenSuccess] = useState(false);
    const [errs, setErrs] = useState(new Array)
    const [formData, setFormData] = useState({
        identityCode: '',
        birthday: '',
        name: '',
        gender: '',
        role: '',
        msv: '',
        email: '',
        address: '',
        phone: '',
        courses: '',
        // avatar: new File([""], "filename"),
        purpose: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAvatarChange = (e: any) => {
        // setFormData({
        //     ...formData,
        //     avatar: e.target.files[0],
        // });
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData);
        let dataToServer = {
            name: formData.name,
            Birthday: formData.birthday,
            IdentityCode: formData.identityCode,
            MSV: formData.msv,
            email: formData.email,
            phone: formData.phone,
            gender: formData.gender,
            Address: formData.address,
            Purpose: formData.purpose,
            classification: formData.role,

        }
        let formdata = new FormData()
        formdata.append('data', JSON.stringify(dataToServer))
        console.log(formData);
        let err = await postLearnerData(dataToServer);
        console.log(err);

        if (err !== undefined) {
            let err_arr_feed = validateRegisterDataErrs(err)

            setErrs(err_arr_feed)
            setOpenBar(true)
        } else {
            setOpenSuccess(true)
            let id: any = await findStudentId(dataToServer.IdentityCode)
            console.log(id);

            let patch_err = await updateRelationtoCourse(id)
            console.log(patch_err)
        }

        setOpen(true);
        setFormData({
            identityCode: '',
            birthday: '',
            name: '',
            gender: '',
            role: '',
            msv: '',
            email: '',
            address: '',
            phone: '',
            courses: '',
            purpose: '',
        })
    };


    const handleCancel = () => {
        setOpen(false)
    }
    return (
        <>
            <Dialog open={open} onClose={props.onClose} maxWidth="md" fullWidth>
                <DialogTitle>Register new students</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>

                            <Grid item xs={12}>

                                <Stack spacing={2} direction="row" sx={{ mb: 0 }}>
                                    <TextField
                                        required
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={2} direction="row" sx={{ mb: 0 }}>
                                    <TextField
                                        name="msv"
                                        label="MSV"
                                        fullWidth
                                        value={formData.msv}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        name="identityCode"
                                        label="Identity Code"
                                        fullWidth
                                        value={formData.identityCode}
                                        onChange={handleChange}
                                    />

                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    name="birthday"
                                    label="Birthday"
                                    type="date"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    value={formData.birthday}
                                    onChange={handleChange}
                                />
                            </Grid>


                            <Grid item xs={12}>
                                <Stack spacing={2} direction="row" sx={{ mb: 0 }}>
                                    <TextField
                                        required
                                        select
                                        name="gender"
                                        label="Gender"
                                        fullWidth
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        {genders.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        required
                                        select
                                        name="role"
                                        label="Role"
                                        fullWidth
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        {roles.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                </Stack>

                            </Grid>


                            <Grid item xs={12}>

                                <Stack spacing={2} direction="row" sx={{ mb: 0 }}>
                                    <TextField
                                        required
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        required
                                        name="phone"
                                        label="Phone"
                                        fullWidth
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </Stack>

                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    name="purpose"
                                    label="purpose"
                                    multiline
                                    maxRows={5}
                                    fullWidth
                                    value={formData.purpose}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>


                {
                    //    <div>{errs.length}</div>
                    //     for(var i = 0; i < errs.length; i++){
                    //         return <></>
                    //     }

                    // errs.map((e:any,  index)=>{
                    //     console.log(e.message, e.field);
                    //     return <></>
                    //     setOpenBar(true)
                    //     return <CustomizedSnackbars key={index}
                    //     message={e.message}
                    //     field = {e.field}
                    //     open={open_bar}
                    //     setOpen={setOpenBar}/>
                    // })

                }
                <CustomizedSnackbars
                    errs={errs}
                    open={open_bar}
                    setOpen={setOpenBar} />
                <SuccessBar
                    open={open_success}
                    setOpen={setOpenSuccess} />
            </Dialog >
        </>
    );
};

export default StudentFormModal;
