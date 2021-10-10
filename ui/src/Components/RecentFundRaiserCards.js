import { Card, CardMedia, CardContent, Typography, LinearProgress, Button } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';

const styles = {
    cardContaier: {
        maxWidth: '350',
        margin: '1.6rem',
        boxShadow: '1px 1px 10px 1px rgba(20,20,20,0.07)',
        textAlign: 'left',
    },
    cardHeader: {
        fontWeight: 'bold',
        color: '#555555',
    },
    fundRaiserNameIcon: {
        padding: '0.16rem 0.37rem',
        borderRadius: '20px',
        marginRight: '0.2rem',
        background: 'rgba(76, 175, 80, 0.7)',
        color: '#ffffff',

    }
}

const RecentFundRaiserCards = () => {
    return (
        <Card sx={styles.cardContaier}>
            <CardMedia
            component="img"
            height="140"
            image="./../logo192.png"
            alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom component="div" sx={styles.cardHeader}>
                    Help john fight cancer.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <div style={{margin: '0.7rem 0 0.5rem 0'}}>
                        <span style={styles.fundRaiserNameIcon}>N</span>
                        <span>Name of the raiser</span>
                    </div>
                    <div style={{marginBottom: '0.2rem'}}>
                        <span>1,00,000</span> Raised out of 2,00,000
                    </div>
                    <LinearProgress sx={{height: '0.5rem', borderRadius: '50px', marginTop: '1rem'}} variant="determinate" value={70} />
                    <div style={{margin: '0.2rem 0 1rem 0'}}><span>10</span> days left</div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button variant="outlined" disableElevation>Donate</Button>
                        <Button variant="outlined" disableElevation startIcon={<ShareIcon style={{width: '1rem'}}/>}>Share</Button>
                    </div>
                </Typography>
            </CardContent>
        </Card>
    );
}
 
export default RecentFundRaiserCards;