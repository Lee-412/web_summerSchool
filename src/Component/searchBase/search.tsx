'use client'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box, Divider, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '500px',
//         },
//     },
// }));
interface data {
    color: string
}

export default function SearchBase(prop: data) {

    return (
        // <>
        //     <Search>
        //         <SearchIconWrapper>
        //         </SearchIconWrapper>
        //         <StyledInputBase
        //             placeholder="Search…"
        //             inputProps={{ 'aria-label': 'search' }}
        //         />
        //     </Search>
        // </>
        // return (
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
            <InputBase
                sx={{ ml: 1, flex: 1, color: "#63b0db" }}
                placeholder="Search for what to learn"
                inputProps={{ 'aria-label': 'search for what to learn' }}
            />
        </Box>
    );
}
