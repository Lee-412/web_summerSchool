// components/StudentFormModal.js

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, Grid, Typography, Avatar, Stack, Box } from '@mui/material';

import { Data_advertise } from './home-advertise';

interface Data_courses {
    open: boolean,
    setOpen: (v: boolean) => void,
    props_data: Data_advertise | null | undefined
}

const Courses_Information = (props: Data_courses) => {
    const { open, setOpen, props_data } = props;

console.log(props_data?.description);

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

                        }
                        } >
                            <Grid item xs={3} >
                               <strong> Tên khoá học:</strong> {props_data?.title}
                            </Grid>
                            <Grid item xs={8}>
                                <span> <strong>Ngày bắt đầu đăng ký:</strong> {props_data?.start_day}</span>
                            </Grid>
                            <Grid item xs={8} >
                                <span>  <strong> Ngày kết thúc đăng ký:</strong> {props_data?.end_day}</span>
                            </Grid>
                            <Grid item xs={8}>
                                <span> <strong> Học phí:</strong> {props_data?.fee} vnd</span>
                            </Grid>
                            <Grid item xs={8} >
                                <span>  <strong> Số lượng sinh viên tối thiểu để mở lớp:</strong> {props_data?.size} sinh viên</span>
                            </Grid>
                            <Grid item xs={8} >
                                <span>  <strong> Mô tả khóa học:</strong> {props_data?.description}</span>
                            </Grid>
                        </Grid>
                        
                        <Grid
                        >
                            <img src={props_data?.img} alt="course image" style={{objectFit:"cover", width: 400, borderRadius: 5}} />
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
