/*eslint-disable*/
import {useParams} from 'react-router';
import {Alert, Button, Snackbar, TextField} from '@mui/material';
import React, {useState} from 'react';
import {sendDonation} from '../utils/api/services';

const styles = {
        conatiner: {
            border: '1px solid rgba(0,0,0,0.16)',
            borderRadius: '5px',
            position: 'absolute',
            top: '20vh',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '38rem',
            boxSizing: 'border-box'
        },
        textField: {
            margin: '0rem 1rem',
            width: '14rem'
        },
        fullText: {
            width: '30rem'
        },
        button: {
            height: '2.3rem',
            marginBottom: '1.7rem'
        }
    },

    Donate = () => {

        const [
                donateId,
                setDonateId
            ] = useState(useParams()),
            [
                authSuccess,
                setAuthSuccess
            ] = useState({
                isSuccess: false,
                message: ''
            }),
            [
                amount,
                setAmount
            ] = useState({
                value: '',
                error: false,
                errorText: ''
            }),
            setAmountData = (val, err, errText) => {

                setAmount({
                    value: val,
                    error: err,
                    errorText: errText
                })

            }

        function handleSnackBarClose () {

            setAuthSuccess({
                isSuccess: false,
                message: ''
            });

        }

        const onDonateFund = async () => {

            if (!amount.value.length) {

                setAmountData(
                    '',
                    true,
                    'Please Enter the amount needed'
                );

            }

            if (amount.value.length) {

                const response = await sendDonation(
                    donateId,
                    amount.value,
                    localStorage.getItem('token')
                );
                if (response.status === 201) {

                    setAuthSuccess({
                        isSuccess: true,
                        message: 'Donation succesfully!'
                    });

                } else {

                    console.log(response);

                }

            }

        }

        return (
        // {donateId.id}
            <React.Fragment>
                <div style={styles.conatiner}>
                    <div style={{display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '1.7rem'}}>
                        <div style={{fontSize: '1.2rem',
                            color: '#777777',
                            marginBottom: '1rem'}}>Enter Details for Donating</div>
                        <div style={{display: 'flex',
                            justifyContent: 'space-between'}}>
                            <TextField sx={styles.textField} label="Enter Amount*" variant="standard" value={amount.value} onChange={(e) => {

                                setAmountData(
                                    e.target.value,
                                    false,
                                    ''
                                )

                            }} error={amount.error} helperText={amount.errorText}/>
                        </div>
                        <br/>

                        <div style={{display: 'flex',
                            justifyContent: 'end',
                            margin: '2rem 1rem 0 0 '}}>
                            <Button variant="contained" style={styles.button} onClick={onDonateFund}>Donate Fund</Button>
                        </div>
                    </div>
                </div>
                <Snackbar open={authSuccess.isSuccess} autoHideDuration={5000} onClose={handleSnackBarClose}>
                    <Alert onClose={handleSnackBarClose} severity="success" sx={{width: '100%'}}>
                        {authSuccess.message}
                    </Alert>
                </Snackbar>
            </React.Fragment>
        );

    }

export default Donate;