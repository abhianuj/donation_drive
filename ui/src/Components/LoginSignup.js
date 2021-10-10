import { TextField, Box, Tab, Button, Snackbar, Slide, Alert } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
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

const LoginSignup = () => {

    const [value, setValue] = React.useState('1');
    const [authSuccess, setAuthSuccess] = React.useState({
        isSuccess: false,
        message: '',
    });
    const [sfName, setSfName] = React.useState({
        value: '',
        error: false,
        errorText: ''
    });
    const [slName, setSlName] = React.useState({
        value: '',
        error: false,
        errorText: ''
    })
    const [sEmail, setSEmail] = React.useState({
        value: '',
        error: false,
        errorText: ''
    })
    const [sPassword, setSPassword] = React.useState({
        value: ''
    })
    const [lEmail, setLEmail] = React.useState({
        value: '',
        error: false,
        errorText: ''
    })
    const [lPassword, setLPassword] = React.useState({
        value: ''
    })
    const setSfNameData = (val, err, errText) => {
        setSfName({
            value: val,
            error: err,
            errorText: errText
        })
    }
    const setSlNameData = (val, err, errText) => {
        setSlName({
            value: val,
            error: err,
            errorText: errText
        })
    }
    const setSEmailData = (val, err, errText, success) => {
        setSEmail({
            value: val,
            error: err,
            errorText: errText,
            success: success
        })
    }
    const setSPasswordData = (val, err, errText) => {
        setSPassword({
            value: val,
            error: err,
            errorText: errText
        })
    }
    const setLEmailData = (val, err, errText, success) => {
        setLEmail({
            value: val,
            error: err,
            errorText: errText,
            success: success
        })
    }
    const setLPasswordData = (val, err, errText) => {
        setLPassword({
            value: val,
            error: err,
            errorText: errText
        })
    }

    //for tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //for snackBar
    function TransitionUp(props) {
        return <Slide {...props} direction="up" />;
    }
    function handleSnackBarClose(){
        setAuthSuccess({
            isSuccess: false,
            message: '',
        });
    }

    const signup = () =>{
        if(!sfName.value.length) {
            setSfNameData('', true, "First name can't be empty");
        }
        if(!slName.value.length) {
            setSlNameData('', true, "Last name can't be empty");
        }
        if(!sEmail.value.length) {
            setSEmailData('', true, 'Please Enter an email ID');
        }
        if(sPassword.value.length<8){
            setSPasswordData('', true, "Password must be greater than 8 charchters");
        }
        if(!sPassword.value.length) {
            setSPasswordData('', true, "Please enter a password");
        }

        if(!sfName.value.error && !slName.value.error && !sPassword.value.error && !sEmail.value.error){
            //post data
            setAuthSuccess({
                isSuccess: true,
                message: "Signup Successfull",
            });  
        }
    }

    const login = () =>{
        if(lPassword.value.length<8){
            setLPasswordData(lPassword.value, true, "Password must be greater than 8 charchters");
        }
        if(!lPassword.value.length) {
            setLPasswordData('', true, "Please enter a password");
        }
        if(!lEmail.value.length) {
            setLEmailData('', true, 'Please Enter an email ID');
        }

        if(!lEmail.value.error && !lPassword.value.error){
            //post data
            setAuthSuccess({
                isSuccess: true,
                message: "Login Successfull",
            });            
        }
    }

    const emailChange = (e, emailFor)=>{
        const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(emailFor === "signup"){
            if(emailRegex.test(e.target.value)) {
                setSEmailData(e.target.value, false, '', 'success');
            } else {
                setSEmailData(e.target.value, true, 'Please Enter a valid email ID');
            }
        }
        if(emailFor === "login"){
            if(emailRegex.test(e.target.value)) {
                setLEmailData(e.target.value, false, '', 'success');
            } else {
                setLEmailData(e.target.value, true, 'Please Enter a valid email ID');
            }
        }
    }

    return (
        <React.Fragment>
        <div style={styles.conatiner}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Signup" value="1" />
                        <Tab label="Login" value="2" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div>
                            <TextField sx={styles.textField} label="First name*" onChange={(e)=>{setSfNameData(e.target.value, false, '')}} variant="standard" error={sfName.error} helperText={sfName.errorText} value={sfName.value} />
                            <TextField sx={styles.textField} label="Last name*" onChange={(e)=>{setSlNameData(e.target.value, false, '')}} variant="standard" error={slName.error} helperText={slName.errorText} value={slName.value} />
                            <br/>
                            <TextField sx={styles.textField} style={styles.fullText} label="Email*" onChange={(e)=>emailChange(e, 'signup')} variant="standard" color={sEmail.success} error={sEmail.error} helperText={sEmail.errorText} value={sEmail.value} />
                            <br/>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <TextField sx={styles.textField} type="password" label="Password*" onChange={(e)=>{setSPasswordData(e.target.value, false, '')}} variant="standard" error={sPassword.error} helperText={sPassword.errorText} value={sPassword.value} />
                            </div>
                            <div style={{display: 'flex', justifyContent: 'end', margin: '2rem 1rem 0 0 '}}>
                                <Button variant="contained" style={styles.button} onClick={signup}>Signup</Button>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div>
                            <TextField sx={styles.textField} style={styles.fullText} label="Email*" onChange={(e)=>emailChange(e, 'login')} color={lEmail.success} variant="standard" error={lEmail.error} helperText={lEmail.errorText} value={lEmail.value}/>
                            <br/>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <TextField sx={styles.textField} type="password" label="Password*" onChange={(e)=>{setLPasswordData(e.target.value, false, '')}} variant="standard" error={lPassword.error} helperText={lPassword.errorText} value={lPassword.value}/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'end', margin: '1.7rem 1rem 0 0 '}}>
                                <Button variant="contained" style={styles.button} onClick={login}>Login</Button>
                            </div>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>           
        </div>
            <Snackbar open={authSuccess.isSuccess} autoHideDuration={5000} onClose={handleSnackBarClose}>
                <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
                {authSuccess.message}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}
 
export default LoginSignup;