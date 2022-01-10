/*eslint-disable*/
import {Alert, Box, Button, Snackbar, Tab, TextField} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {login, signup} from '../utils/api/services'
import {useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import {useParams} from 'react-router';

const styles = {
        conatiner: {
            border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: '5px',
            position: 'absolute',
            top: '20vh',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '38rem',
            boxSizing: 'border-box'
        },
        textField: {
            margin: '0.5rem 1rem',
            width: '14rem'
        },
        fullText: {
            width: '30rem'
        },
        button: {
            height: '2.3rem'
        }
    },

    LoginSignup = (props) => {

        const history = useHistory(),
            [
                value,
                setValue
            ] = React.useState('1'),
            [
                authSuccess,
                setAuthSuccess
            ] = React.useState({
                isSuccess: false,
                message: ''
            }),
            [
                sfName,
                setSfName
            ] = React.useState({
                value: '',
                error: false,
                errorText: ''
            }),
            [
                slName,
                setSlName
            ] = React.useState({
                value: '',
                error: false,
                errorText: ''
            }),
            [
                sEmail,
                setSEmail
            ] = React.useState({
                value: '',
                error: false,
                errorText: ''
            }),
            [
                sPassword,
                setSPassword
            ] = React.useState({
                value: ''
            }),
            [
                lEmail,
                setLEmail
            ] = React.useState({
                value: '',
                error: false,
                errorText: ''
            }),
            [
                lPassword,
                setLPassword
            ] = React.useState({
                value: ''
            }),
            setSfNameData = (val, err, errText) => {

                setSfName({
                    value: val,
                    error: err,
                    errorText: errText
                })

            },
            setSlNameData = (val, err, errText) => {

                setSlName({
                    value: val,
                    error: err,
                    errorText: errText
                })

            },
            setSEmailData = (val, err, errText, success) => {

                setSEmail({
                    value: val,
                    error: err,
                    errorText: errText,
                    success
                })

            },
            setSPasswordData = (val, err, errText) => {

                setSPassword({
                    value: val,
                    error: err,
                    errorText: errText
                })

            },
            setLEmailData = (val, err, errText, success) => {

                setLEmail({
                    value: val,
                    error: err,
                    errorText: errText,
                    success
                })

            },
            setLPasswordData = (val, err, errText) => {

                setLPassword({
                    value: val,
                    error: err,
                    errorText: errText
                })

            },

            [
                donateId,
                setDonateId
            ] = useState(useParams());

        // ComponentDidMount
        React.useEffect(() => {

            if (localStorage.getItem('token')) {

                if (props.onSuccessfulAuth.split('/')[1] === 'donate') {

                    history.push(props.onSuccessfulAuth + donateId.id);

                } else {

                    history.push(props.onSuccessfulAuth);

                }

            }

        });

        // For tab change
        const handleChange = (event, newValue) => {

            setValue(newValue);

        };

        // For snackBar
        function handleSnackBarClose () {

            setAuthSuccess({
                isSuccess: false,
                message: ''
            });

        }

        const signMeUp = async () => {

                if (!sfName.value.length) {

                    setSfNameData(
                        '',
                        true,
                        'First name can\'t be empty'
                    );

                }
                if (!slName.value.length) {

                    setSlNameData(
                        '',
                        true,
                        'Last name can\'t be empty'
                    );

                }
                if (!sEmail.value.length) {

                    setSEmailData(
                        '',
                        true,
                        'Please Enter an email ID'
                    );

                }
                if (sPassword.value.length < 8) {

                    setSPasswordData(
                        '',
                        true,
                        'Password must be greater than 8 charchters'
                    );

                }
                if (!sPassword.value.length) {

                    setSPasswordData(
                        '',
                        true,
                        'Please enter a password'
                    );

                }

                if (sfName.value.length && slName.value.length && sEmail.value.length && sPassword.value.length > 8) {

                    const postData = {
                            firstName: sfName.value,
                            lastName: slName.value,
                            email: sEmail.value,
                            password: sPassword.value
                        },

                        response = await signup(postData);

                    if (!response.status) {

                        localStorage.setItem(
                            'token',
                            response.token
                        );
                        localStorage.setItem(
                            'name',
                            `${response.firstName} ${response.lastName}`
                        );
                        props.setAuthenticated(true);
                        setAuthSuccess({
                            isSuccess: true,
                            message: 'Login Successfull'
                        });

                        navigateToOnSuccessfulAuth();

                    } else {

                        console.log(response);

                    }

                }

            },

            navigateToOnSuccessfulAuth = () => {

                history.push(props.onSuccessfulAuth);

            },

            logMeIn = async () => {

                if (lPassword.value.length < 8) {

                    setLPasswordData(
                        lPassword.value,
                        true,
                        'Password must be greater than 8 charchters'
                    );

                }
                if (!lPassword.value.length) {

                    setLPasswordData(
                        '',
                        true,
                        'Please enter a password'
                    );

                }
                if (!lEmail.value.length) {

                    setLEmailData(
                        '',
                        true,
                        'Please Enter an email ID'
                    );

                }

                if (lEmail.value.length && lPassword.value.length > 8) {

                    const postData = {
                            email: lEmail.value,
                            password: lPassword.value
                        },

                        response = await login(postData);

                    if (!response.status) {

                        localStorage.setItem(
                            'token',
                            response.token
                        );
                        localStorage.setItem(
                            'name',
                            `${response.firstName} ${response.lastName}`
                        );
                        props.setAuthenticated(true);
                        setAuthSuccess({
                            isSuccess: true,
                            message: 'Login Successfull'
                        });

                        navigateToOnSuccessfulAuth();

                    } else {

                        console.log(response);

                    }

                }

            },

            emailChange = (e, emailFor) => {

                const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if (emailFor === 'signup') {

                    if (emailRegex.test(e.target.value)) {

                        setSEmailData(
                            e.target.value,
                            false,
                            '',
                            'success'
                        );

                    } else {

                        setSEmailData(
                            e.target.value,
                            true,
                            'Please Enter a valid email ID'
                        );

                    }

                }
                if (emailFor === 'login') {

                    if (emailRegex.test(e.target.value)) {

                        setLEmailData(
                            e.target.value,
                            false,
                            '',
                            'success'
                        );

                    } else {

                        setLEmailData(
                            e.target.value,
                            true,
                            'Please Enter a valid email ID'
                        );

                    }

                }

            }

        return (
            <React.Fragment>
                <div style={styles.conatiner}>
                    <Box sx={{width: '100%',
                        typography: 'body1'}}>
                        <TabContext value={value}>
                            <Box sx={{borderBottom: 1,
                                borderColor: 'divider'}}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Signup" value="1" />
                                    <Tab label="Login" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div>
                                    <TextField sx={styles.textField} label="First name*" onChange={(e) => {

                                        setSfNameData(
                                            e.target.value,
                                            false,
                                            ''
                                        )

                                    }} variant="standard" error={sfName.error} helperText={sfName.errorText} value={sfName.value} />
                                    <TextField sx={styles.textField} label="Last name*" onChange={(e) => {

                                        setSlNameData(
                                            e.target.value,
                                            false,
                                            ''
                                        )

                                    }} variant="standard" error={slName.error} helperText={slName.errorText} value={slName.value} />
                                    <br/>
                                    <TextField sx={styles.textField} style={styles.fullText} label="Email*" onChange={(e) => emailChange(
                                        e,
                                        'signup'
                                    )} variant="standard" color={sEmail.success} error={sEmail.error} helperText={sEmail.errorText} value={sEmail.value} />
                                    <br/>
                                    <div style={{display: 'flex',
                                        justifyContent: 'space-between'}}>
                                        <TextField sx={styles.textField} type="password" label="Password*" onChange={(e) => {

                                            setSPasswordData(
                                                e.target.value,
                                                false,
                                                ''
                                            )

                                        }} variant="standard" error={sPassword.error} helperText={sPassword.errorText} value={sPassword.value} />
                                    </div>
                                    <div style={{display: 'flex',
                                        justifyContent: 'end',
                                        margin: '2rem 1rem 0 0 '}}>
                                        <Button variant="contained" style={styles.button} onClick={signMeUp}>Signup</Button>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div>
                                    <TextField sx={styles.textField} style={styles.fullText} label="Email*" onChange={(e) => emailChange(
                                        e,
                                        'login'
                                    )} color={lEmail.success} variant="standard" error={lEmail.error} helperText={lEmail.errorText} value={lEmail.value}/>
                                    <br/>
                                    <div style={{display: 'flex',
                                        justifyContent: 'space-between'}}>
                                        <TextField sx={styles.textField} type="password" label="Password*" onChange={(e) => {

                                            setLPasswordData(
                                                e.target.value,
                                                false,
                                                ''
                                            )

                                        }} variant="standard" error={lPassword.error} helperText={lPassword.errorText} value={lPassword.value}/>
                                    </div>
                                    <div style={{display: 'flex',
                                        justifyContent: 'end',
                                        margin: '1.7rem 1rem 0 0 '}}>
                                        <Button variant="contained" style={styles.button} onClick={logMeIn}>Login</Button>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
                <Snackbar open={authSuccess.isSuccess} autoHideDuration={5000} onClose={handleSnackBarClose}>
                    <Alert onClose={handleSnackBarClose} severity="success" sx={{width: '100%'}}>
                        {authSuccess.message}
                    </Alert>
                </Snackbar>
            </React.Fragment>
        );

    }

export default LoginSignup;