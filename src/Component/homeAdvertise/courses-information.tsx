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
    { value: 'Student', label: 'Student' },
    { value: 'Worker', label: 'Worker' },
    { value: 'Other', label: 'Other' },
];


const expertise_levelles = [
    { value: 'Novice', label: 'Novice' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advance', label: 'Advance' },
];
// interface data {
//     open: boolean,
//     onClose: void
// }
console.log(process.env.NEXT_PUBLIC_STRAPI_LINK_API_URL);

const Courses_Information = (props: any) => {
    const { open, setOpen } = props;


    const handleCancel = () => {
        setOpen(false)
    }
    return (
        <>
            <Dialog open={open} onClose={props.onClose} maxWidth="md" fullWidth>
                <DialogTitle>Register new students</DialogTitle>
                <DialogContent>
                    <Grid container spacing={3}>

                        <Grid item xs={12}>

                        </Grid>


                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        Cancel
                    </Button>

                </DialogActions>




            </Dialog >
        </>
    );
};

export default Courses_Information;
