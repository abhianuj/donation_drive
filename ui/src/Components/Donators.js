import {Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {donations} from '../utils/api/services';
import {returnFirstLetter} from './../utils/formatter';

const Donators = () => {

    const [
        donorsData,
        setDonorsData
    ] = useState(null);

    useEffect(
        () => {

            (async () => {

                const response = await donations();
                console.log(response);
                setDonorsData(response);

            })();

        },
        []
    );

    return (
        <div style={{margin: '8rem 0 0 0'}}>
            <div style={{fontWeight: 'bold',
                fontSize: '1.7rem',
                color: '#555555'}}>Donators</div>
            <div style={{fontSize: '0.8rem',
                color: '#777777',
                marginBottom: '1.7rem'}}>A list of great people who helped the needy.</div>
            <Container>
                <TableContainer component={Paper} sx={{boxShadow: 'none'}}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Donated to</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {donorsData?.map((row) => <TableRow
                                key={row.postDTO.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {`${returnFirstLetter(row.donor.firstName)} ${returnFirstLetter(row.donor.lastName)}`}
                                </TableCell>
                                <TableCell align="right">{row.donor.email}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{`${returnFirstLetter(row.postDTO.needy.firstName)} ${returnFirstLetter(row.postDTO.needy.lastName)}`}</TableCell>
                            </TableRow>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );

}

export default Donators;