import { Snackbar, Alert, TextField, Button } from "@mui/material";
import React from "react";

const styles={
    conatiner: {
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '5px',
        position: 'absolute',
        top: '20vh',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '38rem',
        boxSizing: 'border-box',
    },
    textField: {
        margin: '0.5rem 1rem',
        width: '14rem',
    },
    fullText: {
        width: '30rem',
    },
    button: {
        height: '2.3rem',
    }
}

const StartFudraiser = () => {
    const [authSuccess, setAuthSuccess] = React.useState({
        isSuccess: false,
        message: '',
    });

    function handleSnackBarClose(){
        setAuthSuccess({
            isSuccess: false,
            message: '',
        });
    }

    return (
        <React.Fragment>
        <div style={styles.conatiner}>
            <div>
                {/* <TextField sx={styles.textField} label="First name*" onChange={(e)=>{setSfNameData(e.target.value, false, '')}} variant="standard" error={sfName.error} helperText={sfName.errorText} value={sfName.value} />
                <TextField sx={styles.textField} label="Last name*" onChange={(e)=>{setSlNameData(e.target.value, false, '')}} variant="standard" error={slName.error} helperText={slName.errorText} value={slName.value} />
                <br/>
                <TextField sx={styles.textField} style={styles.fullText} label="Email*" onChange={(e)=>emailChange(e, 'signup')} variant="standard" color={sEmail.success} error={sEmail.error} helperText={sEmail.errorText} value={sEmail.value} />
                <br/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <TextField sx={styles.textField} type="password" label="Password*" onChange={(e)=>{setSPasswordData(e.target.value, false, '')}} variant="standard" error={sPassword.error} helperText={sPassword.errorText} value={sPassword.value} />
                </div>
                <div style={{display: 'flex', justifyContent: 'end', margin: '2rem 1rem 0 0 '}}>
                    <Button variant="contained" style={styles.button} onClick={signup}>Signup</Button>
                </div> */}
            </div>
        </div>
            <Snackbar open={authSuccess.isSuccess} autoHideDuration={5000} onClose={handleSnackBarClose}>
                <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
                {authSuccess.message}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}
 
export default StartFudraiser;