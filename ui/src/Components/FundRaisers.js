import { Container } from "@mui/material";
import RecentFundRaiserCards from "./RecentFundRaiserCards";

const styles = {
    fundRaiserCardsContainer: {
        display: 'flex',
        width: 'auto',
        height: 'auto',
    },
    cards: {
        width: '20vw',
    }
}

const FundRaisers = () => {
    return (
        <div style={{margin: '8rem 0 0 0'}}>
            <div style={{fontWeight: 'bold', fontSize: '1.7rem', color: '#555555', marginBottom: '0.7rem'}}>Fundraisers</div>
        <Container>
            <div style={styles.fundRaiserCardsContainer}>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
            </div>
            <div style={styles.fundRaiserCardsContainer}>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
            </div>
            <div style={styles.fundRaiserCardsContainer}>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
            </div>
            <div style={styles.fundRaiserCardsContainer}>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
                <RecentFundRaiserCards style={styles.cards}/>
            </div>
        </Container>
        </div>
    );
}
 
export default FundRaisers;