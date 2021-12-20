/*eslint-disable*/
import {Alert, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, LinearProgress, Link, Snackbar, Typography} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import {donationPerecent, returnFirstLetter, returnRemainingDaysLeft, showIndianStandardCurrency} from './../utils/formatter';
import {useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import {SERVER} from '../utils/api/services';

const styles = {
        cardContaier: {
            width: '15rem',
            height: 'auto',
            margin: '1.6rem',
            boxShadow: '1px 1px 10px 1px rgba(20,20,20,0.07)',
            textAlign: 'left'
        },
        cardHeader: {
            fontWeight: 'bold',
            color: '#555555'
        },
        fundRaiserNameIcon: {
            padding: '0.16rem 0.37rem',
            borderRadius: '20px',
            marginRight: '0.2rem',
            background: 'rgba(76, 175, 80, 0.7)',
            color: '#ffffff'

        }
    },

    RecentFundRaiserCards = ({fundraiserData}) => {

        const [
                openShareDialog,
                setOpenShareDialog
            ] = useState(false),
            [
                shareFundraiserData,
                setShareFundraiserData
            ] = useState(null),
            [
                snackbar,
                setSnackbar
            ] = useState({
                severity: 'success',
                open: false,
                snackbarText: ''
            }),

            handleDialogClose = () => {

                setOpenShareDialog(false);

            },
            share = (id) => {

                setShareFundraiserData(`${SERVER}/auth/donate/${id}`);
                setOpenShareDialog('true');

            },
            handleCopyToClipboard = () => {

                const cb = navigator.clipboard;
                cb.writeText(shareFundraiserData).then(() => openSnackbar(
                    'URL copied to clipboard successfuly!',
                    'success',
                    true
                ));

            },

            handleSnackbarClose = () => {

                setSnackbar({
                    severity: 'success',
                    open: false,
                    snackbarText: ''
                });

            },
            openSnackbar = (text, severity, open) => {

                setSnackbar({
                    severity,
                    open,
                    snackbarText: text
                });

            },

            history = useHistory(),
            donate = (id) => {

                history.push(`/auth/donate/${id}`);

            }

        return (
            <React.Fragment>
                <Card sx={styles.cardContaier}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`data:image/png;base64,${fundraiserData.picture}`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom component="div" sx={styles.cardHeader}>
                            {fundraiserData.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div style={{margin: '0.7rem 0 0.5rem 0'}}>
                                <span style={styles.fundRaiserNameIcon}>{returnFirstLetter(fundraiserData.needy.firstName)}</span>
                                <span style={{textTransform: 'capitalize'}}>{`${fundraiserData.needy.firstName.charAt(0).toUpperCase() + fundraiserData.needy.firstName.slice(1)} ${fundraiserData.needy.lastName}`}</span>
                            </div>
                            <div style={{marginBottom: '0.2rem'}}>
                                <span>{showIndianStandardCurrency(fundraiserData.totalDonation)}</span> Raised out of {showIndianStandardCurrency(fundraiserData.neededAmount)}
                            </div>
                            <LinearProgress sx={{height: '0.5rem',
                                borderRadius: '50px',
                                marginTop: '0.4rem'}} variant="determinate" value={donationPerecent(
                                fundraiserData.neededAmount,
                                fundraiserData.totalDonation
                            )} />
                            <div style={{margin: '0.8rem 0 0.5rem 0'}}><span>{returnRemainingDaysLeft(fundraiserData.endDate)}</span> days left</div>
                            <div style={{display: 'flex',
                                justifyContent: 'space-between'}}>
                                <Button variant="outlined" disabled={fundraiserData.neededAmount === fundraiserData.totalDonation} disableElevation onClick={() => {

                                    donate(fundraiserData.id)

                                }}>Donate</Button>
                                <Button variant="outlined" onClick={() => {

                                    share(fundraiserData.id)

                                }} disableElevation startIcon={<ShareIcon style={{width: '1rem'}}/>}>Share</Button>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
                <Dialog
                    open={openShareDialog}
                    onClose={handleDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                Share the below link for donating.
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Link>{shareFundraiserData}</Link>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
                    </DialogActions>
                </Dialog>
                <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{width: '100%'}}>
                        {snackbar.snackbarText}
                    </Alert>
                </Snackbar>
            </React.Fragment>
        );

    }

export default RecentFundRaiserCards;