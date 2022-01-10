import {Container} from '@mui/material';
import RecentFundRaiserCards from './RecentFundRaiserCards';
import React, {useEffect, useState} from 'react';
import {donations, fundraisers} from '../utils/api/services';

const styles = {
        fundRaiserCardsContainer: {
            display: 'flex',
            width: 'auto',
            height: 'auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
    },

    FundRaisers = () => {

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
            <div style={{margin: '8rem 0 0 0'}}>
                <div style={{fontWeight: 'bold',
                    fontSize: '1.7rem',
                    color: '#555555',
                    marginBottom: '0.7rem'}}>Fundraisers</div>
                <Container>
                    <div style={styles.fundRaiserCardsContainer}>
                        {fundraisersData?.map((fundraiserData) => <RecentFundRaiserCards fundraiserData={fundraiserData} key={fundraiserData.id} style={styles.cards}/>)}
                    </div>
                </Container>
            </div>
        );

    }

export default FundRaisers;