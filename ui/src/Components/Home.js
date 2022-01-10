import React from 'react';
import Content from './Content';
import {Button, Toolbar} from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {Link} from 'react-router-dom';

const styles = {
        header_details: {
            fontWeight: 'bold',
            fontSize: '2rem',
            color: '#555555',
            textAlign: 'left',
            paddingBottom: '1vh'
        },
        specs: {
            display: 'inline-block',
            marginLeft: '1.8rem'
        },
        numrericData: {
            fontSize: '1.4rem',
            color: '#03a9f4',
            fontWeight: 'bold'
        },
        labelData: {
            fontSize: '0.8rem',
            color: '#777777'
        },
        fundRaiserButton: {
            padding: '0.8rem 1.2rem',
            textTransform: 'none',
            display: 'block',
            margin: ' 1.8rem'
        },
        footer: {
            width: '100%',
            background: '#1976d2',
            color: '#fefefe',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem 2rem'
        }
    },

    Home = () => <div>
        {/* Navbar */}

        <div className="header_img"></div>
        <div className="header_text">
            <Toolbar sx={styles.header_details}>Need Funds to Pay For a Medical Emergency or Social Cause?</Toolbar>
            {/* Specs */}
            <div style={styles.specs}>
                <div style={styles.numrericData}>0%</div>
                <div style={styles.labelData}>PLATFORM FEE</div>
            </div>
            <div style={styles.specs}>
                <div style={styles.numrericData}>10k+</div>
                <div style={styles.labelData}>DONORS</div>
            </div>
            <div style={styles.specs}>
                <div style={styles.numrericData}>1k+</div>
                <div style={styles.labelData}>FUNDRAISERS</div>
            </div>
            <Button variant="contained" disableElevation sx={styles.fundRaiserButton}>
                <Link style={{textDecoration: 'none',
                    color: '#ffffff'}} to="/auth/fundraise">Start a Fundraiser for FREE</Link>
            </Button>
        </div>
        <Toolbar/>

        {/* Content */}
        <Content/>
        <Toolbar/>
        <div style={styles.footer}>
            <span style={{paddingTop: '0.4rem'}}>Donation Drive</span>
            <span>Thanks for donating, You are wonderful!<FavoriteOutlinedIcon style={{color: '#ef5350',
                paddingTop: '0.5rem'}}/></span>
        </div>
    </div>


export default Home;