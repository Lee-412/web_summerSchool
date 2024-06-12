"use client"

import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars(props:any) {


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    props.setOpen(false);
  };

  return (
    <>
        
       <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
            >
            {props.errs.map((err:any)=>{
              
              return <p>{err.field?(err.field + ' field: ' + err.message):('' + err.message)}<br/></p>
            })}
          </Alert>
        </Snackbar>
            
    </>
  );
}
