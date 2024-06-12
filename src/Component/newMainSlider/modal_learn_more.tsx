import React, { useState } from 'react'
import "../cardBase/cardFeature.css"
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DisplayContent from './format_data';
interface DataModal {
    img: string,
    author: string,
    title: string,
    content: string,
    openModal: boolean,
    setOpenModal: (v: boolean) => void;
    data: any
}


const ModalLearnMore = (props: DataModal) => {
    const HandleCancle = () => {
        props.setOpenModal(false)
    }
    const [clicked, setClicked] = useState(false)
    const HandleClickLike = () => {
        setClicked(!clicked)
    }

    return (

        <Dialog
            open={props.openModal}
            onClose={HandleCancle}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
            }}
        >
            <DialogTitle id="alert-dialog-title" sx={{ display: "flex", alignItems: "center" }}>
                <Avatar src={`http://127.0.0.1:1337${props.img}`} alt="icon"></Avatar>
                {props.author}
            </DialogTitle>
            <DialogTitle id="alert-dialog-title" sx={{ display: "flex", alignItems: "center" }}>
                {props.title}
            </DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    
                    <DisplayContent
                        props={props.data}
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={HandleClickLike}>
                    {clicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <Button onClick={HandleCancle} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalLearnMore