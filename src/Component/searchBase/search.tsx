'use client'
import InputBase from '@mui/material/InputBase';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface data {
    color: string
}

export default function SearchBase(prop: data) {

    const handleOnchange = (e: any) => {
        alert(e.target.value)
    }
    return (

        <Box
            sx={{
                p: '2px 4px', display: 'flex', width: 800,
                backgroundColor: `${prop.color}`,
                borderRadius: "30px",
                justifyContent: " center"
            }}
        >
            <IconButton type="button" sx={{ p: '10px', color: "#208ecc " }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase className='input-courses'
                sx={{ ml: 1, flex: 1, color: "#63b0db" }}
                onChange={(e) => { handleOnchange(e) }}
                placeholder="Search for what to learn"
                inputProps={{ 'aria-label': 'search for what to learn' }}
            />
        </Box>
    );
}
