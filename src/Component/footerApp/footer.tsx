'use client'
import { Box, Button, Snackbar, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import './footer.css'
import { useState } from "react";

export default function FooterApp() {
    const router = useRouter();

    const handleRedirectHome = () => {
        router.push('/');
    }
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (

        <div className="footerContainer">
            <div className="leftDivFooter">

                <p className="titleFooter">UETSC</p>
                <div className="contact">
                    <span>
                        uet@vnu.edu.vn
                    </span>
                    <span>
                        Copyright@2017
                    </span>
                </div>
            </div>
            <div className="rightDivFooter"

            >
                {/* <Button
                    onClick={handleRedirectHome}
                    variant="contained"
                    // className="btnGetStarted"
                    sx={{
                        backgroundColor: "#007ec5",
                        color: "white",
                        border: "1px solid white",
                        marginBottom: "5%",
                        marginTop: "5%",
                        borderRadius: "15px"

                    }}
                >
                    Get Started
                </Button> */}

                <Button
                    onClick={handleRedirectHome}
                    variant="outlined"
                    className="btnLeanrMore"

                    sx={{
                        backgroundColor: "white",
                        color: "#007ec5",
                        border: "1px solid white",
                        borderRadius: "10px"

                    }}
                >
                    Lên đầu trang
                </Button>
            </div>
        </div >
    );
}
