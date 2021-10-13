import { Snackbar, Alert, TextField, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { startFundraiser } from '../utils/api/services'
import { LocalizationProvider, DesktopDatePicker} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import imageToBase64 from "image-to-base64";
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import { styled } from '@mui/material/styles';

const styles={
    conatiner: {
        border: '1px solid rgba(0,0,0,0.16)',
        borderRadius: '5px',
        position: 'absolute',
        top: '20vh',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '38rem',
        boxSizing: 'border-box',
    },
    textField: {
        margin: '0rem 1rem',
        width: '14rem',
    },
    fullText: {
        width: '30rem',
    },
    button: {
        height: '2.3rem',
        marginBottom: '1.7rem'
    }
}

const StartFudraiser = () => {
    const [authSuccess, setAuthSuccess] = useState({
        isSuccess: false,
        message: '',
    });
    const [endDate, setEndDate] = useState({
        value: '',
        error: false,
        errorText: ''
    });
    const [title, setTitle] = useState({
        value: '',
        error: false,
        errorText: ''
    });
    const [cause, setCause] = useState({
        value: '',
        error: false,
        errorText: ''
    });
    const [amount, setAmount] = useState({
        value: '',
        error: false,
        errorText: ''
    });
    const [category, setCategory] = useState({
        value: '',
        error: false,
        errorText: ''
    });

    const setEndDateData = (val, err, errText) => {
        setEndDate({
            value: val,
            error: err,
            errorText: errText
        })
    }
    const setTitleData = (val, err, errText) => {
        setTitle({
            value: val,
            error: err,
            errorText: errText
        })
    }
    const setAmountData = (val, err, errText) => {
        setAmount({
            value: val,
            error: err,
            errorText: errText
        })
    }
    const setCategoryData = (val, err, errText) => {
        setCategory({
            value: val,
            error: err,
            errorText: errText
        })
    }
    const setCauseData = (val, err, errText) => {
        setCause({
            value: val,
            error: err,
            errorText: errText
        })
    }


    function handleSnackBarClose(){
        setAuthSuccess({
            isSuccess: false,
            message: '',
        });
    }

    // const Input = styled('input')({
    //     display: 'none',
    // });
    const onRaiseFund = async () => {
        if(!title.value.length) {
            setTitleData('', true, "Please enter a title");
        }
        if(!cause.value.length) {
            setCauseData('', true, "Please enter a cause");
        }
        if(!amount.value.length) {
            setAmountData('', true, 'Please Enter the amount needed');
        }
        if(endDate.value===''){
            setEndDateData('', true, "Please Enter an end date");
        }
        if(!category.value.length) {
            setCategoryData('', true, "Please enter the category");
        }

        if(title.value.length && cause.value.length && amount.value.length && endDate.value!=='' && category.value.length){

            let response = await startFundraiser('', localStorage.getItem('token'));
            if(response.status===201){
                setAuthSuccess({
                    isSuccess: true,
                    message: "Fundraising started succesfully!",
                });
            } else {
                console.log(response);
            }
        }
    }

    return (
        <React.Fragment>
        <div style={styles.conatiner}>
            <div style={{display: 'flex', flexDirection: 'column', paddingTop: '1.7rem'}}>
                <div style={{fontSize: '1.2rem', color: '#777777', marginBottom: '1rem'}}>Enter Details for fundraising</div>
                <TextField sx={styles.textField} label="Title*" variant="standard" value={title.value} onChange={(e)=>{setTitleData(e.target.value, false, '')}} error={title.error} helperText={title.errorText}/>
                <br/>
                <TextField sx={styles.textField} style={styles.fullText} label="Cause*" variant="standard" value={cause.value} onChange={(e)=>{setCauseData(e.target.value, false, '')}} error={cause.error} helperText={cause.errorText}/>
                <br/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <TextField sx={styles.textField} label="Needed Amount*" variant="standard" value={amount.value} onChange={(e)=>{setAmountData(e.target.value, false, '')}} error={amount.error} helperText={amount.errorText}/>
                    <div style={styles.textField}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="End Date*"
                            value={endDate.value}
                            minDate={new Date('2017-01-01')}
                            onChange={(newValue) => {
                                setEndDateData(newValue, false, '')
                            }}
                            renderInput={(params) => <TextField {...params} variant="standard" error={endDate.error} helperText={endDate.errorText}/>}
                        />
                    </LocalizationProvider>
                    </div>
                </div>
                <br/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <TextField sx={styles.textField} label="Category*" variant="standard" value={category.value} onChange={(e)=>{setCategoryData(e.target.value, false, '')}} error={category.error} helperText={category.errorText}/>
                    <br/>
                    {/* <label htmlFor="contained-button-file" sx={styles.textField}>
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label> */}
                </div>
                
                <div style={{display: 'flex', justifyContent: 'end', margin: '2rem 1rem 0 0 '}}>
                    <Button variant="contained" style={styles.button} onClick={onRaiseFund}>Raise Funds</Button>
                </div>
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