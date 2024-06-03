// components/StudentFormModal.js

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, Grid, Typography, Avatar, Stack, Box } from '@mui/material';

import postLearnerData, { postFileData, updateRelationtoCourse } from '@/Component/formModalRegister/postData';
import CustomizedSnackbars from '@/Component/customizeSnackedBar/SnackedBar';
import SuccessBar from '@/Component/customizeSnackedBar/SuccesBar';
import validateRegisterDataErrs from '@/Component/formModalRegister/validateData';
import findStudentId from '@/Component/formModalRegister/findStudent';
import { Data_advertise } from './home-advertise';
import { Flex } from 'antd';

interface Data_courses {
    open: boolean,
    setOpen: (v: boolean) => void,
    props_data: Data_advertise | null | undefined
}

const Courses_Information = (props: Data_courses) => {
    const { open, setOpen, props_data } = props;


    const handleCancel = () => {
        setOpen(false)
    }
    return (
        <>
            <Dialog open={open} maxWidth="sm" fullWidth>
                <DialogTitle>Thông tin về khoá học</DialogTitle>
                <DialogContent>
                    <Grid sx={{
                        display: "flex",
                        flexDirection: { xs: "column-reverse", sm: "row", md: "row" }
                    }}>

                        <Grid sx={{
                            width: {
                                xs: "100%", sm: "50%", md: "50%"
                            },
                            // marginLeft: { xs: "1%", sm: "2%", md: "2%" },
                            // alignItems: "center",

                        }
                        } >
                            <Grid item xs={3} >
                                Tên khoá học: {props_data?.title}
                            </Grid>
                            <Grid item xs={8}>
                                <span> Ngày bắt đầu: {props_data?.start_day}</span>
                            </Grid>
                            <Grid item xs={8} >
                                <span>   Ngày kết thúc: {props_data?.end_day}</span>
                            </Grid>
                            <Grid item xs={8}>
                                <span>  Giá khoá học: {props_data?.fee} vnd</span>
                            </Grid>
                            <Grid item xs={8} >
                                <span>  Số lượng sinh viên: {props_data?.size} vnd</span>
                            </Grid>
                        </Grid>
                        <Grid
                        >
                            <img src={props_data?.img} alt="" />
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
