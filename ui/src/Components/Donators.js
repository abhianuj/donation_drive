import { Container, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const styles = {
}

const Donators = () => {

    const donors = [
      {
        id: 2,
        postDTO: {
          id: 1,
          title: "Abhijeet suffering from depression",
          picture: "iVBORw0KGgoAAAAN",
          needy: {
            email: "mukherjee.gourab1998@gmail.com",
            name: "gourab",
            token: null,
          },
          cause:"Abhijeet is a 2 year boy suffering from severe depression. Please donate atleast 2 lakhs each to save him",
          neededAmount: 10000000,
          endDate: "2021-10-10T11:40:27.870+00:00",
          category: "Children",
        },
        donor: {
          email: "mukherjee.gourab1998@gmail.com",
          name: "gourab",
          token: null,
        },
        amount: 10,
      },
      {
        id: 2,
        postDTO: {
          id: 2,
          title: "Abhijeet suffering from depression",
          picture: "iVBORw0KGgoAAAAN",
          needy: {
            email: "mukherjee.gourab1998@gmail.com",
            name: "gourab",
            token: null,
          },
          cause:"Abhijeet is a 2 year boy suffering from severe depression. Please donate atleast 2 lakhs each to save him",
          neededAmount: 10000000,
          endDate: "2021-10-10T11:40:27.870+00:00",
          category: "Children",
        },
        donor: {
          email: "spot.talk@gmail.com",
          name: "spoty",
          token: null,
        },
        amount: 10,
      },
      {
        id: 2,
        postDTO: {
          id: 3,
          title: "Abhijeet suffering from depression",
          picture: "iVBORw0KGgoAAAAN",
          needy: {
            email: "mukherjee.gourab1998@gmail.com",
            name: "gourab",
            token: null,
          },
          cause:"Abhijeet is a 2 year boy suffering from severe depression. Please donate atleast 2 lakhs each to save him",
          neededAmount: 10000000,
          endDate: "2021-10-10T11:40:27.870+00:00",
          category: "Children",
        },
        donor: {
          email: "beluga@gmail.com",
          name: "beluga",
          token: null,
        },
        amount: 10,
      },
      {
        id: 2,
        postDTO: {
          id: 4,
          title: "Abhijeet suffering from depression",
          picture: "iVBORw0KGgoAAAAN",
          needy: {
            email: "mukherjee.gourab1998@gmail.com",
            name: "gourab",
            token: null,
          },
          cause:"Abhijeet is a 2 year boy suffering from severe depression. Please donate atleast 2 lakhs each to save him",
          neededAmount: 10000000,
          endDate: "2021-10-10T11:40:27.870+00:00",
          category: "Children",
        },
        donor: {
          email: "skittle@gmail.com",
          name: "skittle",
          token: null,
        },
        amount: 10,
      }
    ];

    return (
        <div style={{margin: '8rem 0 0 0'}}>
            <div style={{fontWeight: 'bold', fontSize: '1.7rem', color: '#555555'}}>Donators</div>
            <div style={{fontSize: '0.8rem', color: '#777777', marginBottom: '1.7rem'}}>A list of great people who helped the needy.</div>
            <Container>
                <TableContainer component={Paper} sx={{boxShadow: 'none'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Donated to</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {donors.map((row) => (
                            <TableRow
                            key={row.postDTO.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.donor.name}
                            </TableCell>
                            <TableCell align="right">{row.donor.email}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.postDTO.needy.name}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}
 
export default Donators;