/*eslint-disable*/
import {Button, Container} from '@mui/material';
import RecentFundRaiserCards from './RecentFundRaiserCards';
import HowItWorksTimeline from './HowItWorksTimeline';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import ChildFriendlyOutlinedIcon from '@mui/icons-material/ChildFriendlyOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import {donations, fundraisers} from '../utils/api/services';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const styles = {
        recentFundraisersHeading: {
            color: '#555555',
            fontSize: '1.7rem',
            fontWeight: 'bold'
        },
        recentFundraisersSubHeading: {
            fontSize: '0.8rem',
            color: '#888888'
        },
        recentFundraiserCardsContainer: {
            display: 'flex',
            marginTop: '2.5rem'
        },
        howItWorks: {
            marginTop: '4rem',
            fontWeight: 'bold',
            color: '#555555',
            fontSize: '1.7rem',
            display: 'grid',
            justifyContent: 'center'
        },
        fundRaiserButton: {
            padding: '0.8rem 1.2rem',
            textTransform: 'none'
        },
        causes: {
            marginTop: '5rem'
        },
        causesBox: {
            boxShadow: '1px 1px 10px 1px rgba(20,20,20,0.07)',
            padding: '2rem 4rem',
            margin: '0 2rem',
            position: 'relative',
            cursor: 'pointer'
        },
        causesContainer: {
            display: 'flex',
            marginTop: '2rem'
        }
    },

    Content = () => {

        const [
            fundraisersData,
            setFundraisersData
        ] = useState(null);

        useEffect(
            () => {

                (async () => {

                    const fundraiser = await fundraisers(),
                        donators = await donations();
                    fundraiser.reverse();

                    fundraiser.map((element) => {

                        let totalDonation = 0;
                        donators.forEach((donator) => {

                            if (donator.postDTO.id === element.id) {

                                totalDonation += donator.amount;

                            }

                        })
                        element.totalDonation = totalDonation;
                        return element;

                    })

                    setFundraisersData(fundraiser);

                })();

            },
            []
        );

        return (
            <Container>
                <div>
                    <div style={styles.recentFundraisersHeading}>Recent Fundraisers</div>
                    <div style={styles.recentFundraisersSubHeading}>View the fundraisers that are most recently posted</div>

                    <div style={styles.recentFundraiserCardsContainer}>
                        {fundraisersData?.map((fundraiserData, index) => (index<4 ? (<RecentFundRaiserCards fundraiserData={fundraiserData} key={fundraiserData.id}/>): null))}
                    </div>
                    <div style={styles.howItWorks} id="howItWorks">
                    Start a Fundraiser in three simple steps
                        <HowItWorksTimeline/>
                    </div>
                    <Button variant="contained" style={styles.fundRaiserButton} disableElevation><Link style={{textDecoration: 'none',
                        color: '#ffffff'}} to="/auth/fundraise">Start a Fundraiser for FREE</Link></Button>

                    {/* Causes you can raise fud for */}
                    <div style={styles.causes}>
                        <div style={styles.recentFundraisersHeading}>Causes you can raise funds for</div>
                        <div style={styles.recentFundraisersSubHeading}>Be it for a personal need, social cause or a creative idea - you can count on us for
                    the project that you want to raise funds for.</div>
                        <div style={styles.causesContainer}>
                            <span style={styles.causesBox}>
                                <MedicalServicesOutlinedIcon style={{color: '#1976d2'}}/>
                                <div className="causeText">Medical</div>
                            </span>
                            <span style={styles.causesBox}>
                                <ChildFriendlyOutlinedIcon style={{color: '#1976d2'}}/>
                                <div className="causeText">Children</div>
                            </span>
                            <span style={styles.causesBox}>
                                <CastForEducationOutlinedIcon style={{color: '#1976d2'}}/>
                                <div className="causeText">Education</div>
                            </span>
                            <span style={styles.causesBox}>
                                <PetsOutlinedIcon style={{color: '#1976d2'}}/>
                                <div className="causeText">Animal</div>
                            </span>
                            <span style={styles.causesBox}>
                                <LocalHospitalOutlinedIcon style={{color: '#1976d2'}}/>
                                <div className="causeText">Others</div>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        );

    }

export default Content;