"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { StaticRequire } from 'next/dist/shared/lib/get-img-props';

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
              //console.log(err.field);
              
              return <p>{err.field?(err.field + ' field: ' + err.message):('' + err.message)}<br/></p>
            })}
          </Alert>
        </Snackbar>
            
    </>
  );
}
