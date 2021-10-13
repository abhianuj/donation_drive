import { Container } from "@mui/material";
import RecentFundRaiserCards from "./RecentFundRaiserCards";
import React, { useEffect, useState } from "react";
import { fundraisers } from '../utils/api/services';

const styles = {
    fundRaiserCardsContainer: {
        display: 'flex',
        width: 'auto',
        height: 'auto',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
}

const FundRaisers = () => {

    const [fundraisersData, setFundraisersData] = useState(null);

    useEffect(() => {
        (async () => {
          let response = await fundraisers();
          console.log(response);
          response.reverse();
          setFundraisersData(response);
        })();
    }, []);

    return (
        <div style={{margin: '8rem 0 0 0'}}>
            <div style={{fontWeight: 'bold', fontSize: '1.7rem', color: '#555555', marginBottom: '0.7rem'}}>Fundraisers</div>
        <Container>
            <div style={styles.fundRaiserCardsContainer}>
                {fundraisersData?.map((fundraiserData)=> {
                    return (<RecentFundRaiserCards fundraiserData={fundraiserData} key={fundraiserData.id} style={styles.cards}/>);
                })}
            </div>
        </Container>
        </div>
    );
}
 
export default FundRaisers;