'use client'

import "../headerApp/header.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import './header.css'
import StudentFormModal from "../formModalRegister/formRegister";

interface ICdata{
    data: any
}

export default function AppHeader(props:ICdata) {
    console.log(props.data);
    const availableCourse = props.data.data.filter((course:any)=>{return course.attributes.available == true})
    console.log(availableCourse);
    
    const router = useRouter();
    const [open_noRegister, setOpenNoRegister] = useState(false)
    const [open_noAvailable, setOpenNoAvailable] = useState(false)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState(false);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleCancel = () => {
        setOpenNoRegister(false)
        setOpenNoAvailable(false)
    }
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleOpen = () => {
        if(availableCourse.length !== 0){
            const startDateAsString = availableCourse[0].attributes.Start
            const endDateAsString = availableCourse[0].attributes.end
            const startDateRegister = new Date(startDateAsString)
            const endDateRegister = new Date(endDateAsString)
    
            const excuteTime = new Date()
    
            if(excuteTime < startDateRegister || excuteTime > endDateRegister) {
                setOpenNoRegister(true)
            } else {
                setOpen(true);
            }
            
        } else{
            setOpenNoAvailable(true)
        }
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleMobileMenuClose}>
                <Link href="/" passHref>
                    <Typography variant="inherit" style={{ color: 'unset', textDecoration: 'unset' }}>
                        Trang chủ
                    </Typography>
                </Link>
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>
                <Link href="/newsPage" passHref>
                    <Typography variant="inherit" style={{ color: 'unset', textDecoration: 'unset' }}>
                        Tin tức
                    </Typography>
                </Link>
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>
                {/* <Link
                    href="/" passHref
                >
                    <Typography variant="inherit" style={{ color: 'unset', textDecoration: 'none' }}>
                        Hỏi đáp
                    </Typography>
                </Link> */}
            </MenuItem>
            <MenuItem onClick={() => { handleMobileMenuClose(); handleOpen(); }}>
                <Button variant="outlined" style={{ color: '#007ec5' }}>
                    Đăng ký ngay
                </Button>
            </MenuItem>
        </Menu>
    );

    const handleRedirectHome = () => {
        router.push('/');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#007ec5" }} className="nav-bar">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block' }, cursor: 'pointer', marginLeft: "3%" }}
                        onClick={handleRedirectHome}
                    >
                        UETSC
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: "50px", alignItems: "center", cursor: "pointer", '> a': { color: 'unset', textDecoration: 'unset' } }}>
                        <Link href="/" className="btn">Trang chủ</Link>
                        <Link href="/newsPage" className="btn">Tin tức</Link>
                        {/* <Link href="/" className="btn">Hỏi đáp</Link> */}
                        <Button
                            variant="outlined"
                            sx={{
                                backgroundColor: "#007ec5",
                                color: "white",
                                border: "1px solid white"
                            }}
                            onClick={handleOpen}
                        >
                            Đăng ký ngay
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                <Box sx={{ backgroundColor: "#015483" }}>
                    <Typography sx={{ marginLeft: "4.5%" }}>
                        Khóa học đang mở trong thời điểm hiện tại, bấm đăng ký để tham gia ngay!
                    </Typography>
                </Box>
            </AppBar>
            <StudentFormModal open={open} setOpen={setOpen} />
            {renderMobileMenu}
            <Dialog open={open_noRegister} maxWidth="md" fullWidth>
                <DialogTitle>Thời gian đăng ký khóa học không hợp lệ</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        Exit
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={open_noAvailable} maxWidth="md" fullWidth>
                <DialogTitle>Hiện không có khóa học nào được mở!</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        Exit
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
