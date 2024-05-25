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
import { Button, } from '@mui/material';
import './header.css'

export default function AppHeader() {

    const router = useRouter();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        useState<null | HTMLElement>(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const clickResgister = () => {
        alert("Đăng ký ngay")
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <>

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

                <MenuItem>
                    <Link href={"/"}

                        style={{
                            color: 'unset',
                            textDecoration: 'unset',
                        }}
                    >
                        Trang chủ
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href={"/newsPage"} >
                        Tin tức
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href={"/"} style={{
                        color: 'unset',
                        textDecoration: 'unset',
                    }}>
                        Hỏi đáp
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Button>Đăng ký ngay</Button>
                </MenuItem>
            </Menu>


        </>
    );

    const handleRedirectHome = () => {
        router.push('/');
    }

    return (

        <Box sx={{
            flexGrow: 0,
        }}>
            <AppBar position="static"
                sx={{
                    backgroundColor: "#007ec5",
                }}
            >

                <Toolbar>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            cursor: 'pointer',
                            marginLeft: "3%",

                        }}
                        onClick={() => handleRedirectHome()}
                    >
                        Eduverse
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{
                        display: {
                            xs: 'none', md: 'flex'
                        },
                        gap: "50px",
                        alignItems: "center",
                        cursor: "pointer",
                        "> a": {
                            color: 'unset',
                            textDecoration: 'unset'
                        }
                    }}>

                        <>
                            <Link href={"/"}
                            >
                                Trang chủ
                            </Link>
                            <Link href={"/newsPage"}>
                                Tin tức
                            </Link>
                            <Link href={""}>
                                Hỏi đáp
                            </Link>

                            <Button variant="outlined"
                                sx={{
                                    backgroundColor: "#007ec5",
                                    color: "white",
                                    border: "1px solid white"

                                }}
                                onClick={() => {
                                    clickResgister()
                                }}
                            >
                                Đăng ký ngay</Button>
                        </>


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
                <Box sx={{
                    backgroundColor: "#015483",
                }}>
                    <Typography sx={{
                        marginLeft: "4.5%"
                    }}>
                        Join us become an expert! Register now by clicking the button below
                    </Typography>

                </Box>
            </AppBar>
            {renderMobileMenu}
        </Box >
    );

}