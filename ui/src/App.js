import './App.css';
import './Components/Home';
import LoginSignup from './Components/LoginSignup'
import Home from './Components/Home';
import { AppBar, Toolbar, CssBaseline, useScrollTrigger, Slide, Button, ButtonGroup } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FundRaisers from './Components/FundRaisers';
import Donators from './Components/Donators';
import StartFudraiser from './Components/StartFudraiser';
import React from 'react';
import Donate from './Components/Donate';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const styles = {
  appbar: {
      bgcolor: 'rgba(20,20,20,0.1)',
      boxShadow: 'none',
  },
  fundRaiserButton: {
      padding: '0.8rem 1.2rem',
      textTransform: 'none',
      display: 'block',
      margin: ' 1.8rem',
  },
  navigation: {
      display: 'inline-block',
      justifySelf: 'flex-end',
      marginRight: '2vw', 
  },
  navItem: {
      textDecoration: 'none',
      color: '#444444',
      padding: '0.8rem 1.1rem',
      fontSize: '0.9rem',
      fontWeight: 'bold',
  },
  homeButton: {
    textDecoration: 'none',
    color: '#000000',
    fontWeight: 'bold',
  },
  signupLoginLink: {
    textDecoration: 'none',
    color: '#2e7d32',
  }
}

function App() {

  const [authenticated, setAuthenticated] = React.useState(false);

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
  }

  //componentDidMount
  React.useEffect(() => {
    (()=> {
      if(localStorage.getItem('token')){
        setAuthenticated(true);
      }
    })();
  });
  

  return (
    <div className="App">
      <Router>
      <CssBaseline />
            <HideOnScroll>
                <AppBar position="fixed" sx={styles.appbar}>
                    <Toolbar sx={{display: "flex", justifyContent: 'space-between'}}>
                        <a href="/" style={styles.homeButton}>D Drive</a>
                        <div style={styles.navigation}>
                            <a href="/fundraisers" style={styles.navItem}>Browse Fundraisers</a>
                            <a href="/donators" style={styles.navItem}>Browse Donators</a>
                            {/* <a href="#howItWorks" style={styles.navItem}>How it Works</a> */}
                            <Button variant="outlined" disableElevation sx={{marginLeft: '1.2rem'}}><Link style={{textDecoration: 'none', color: '#1976d2'}} to="/auth/fundraise">Start a Fundraiser</Link></Button>
                            {authenticated?
                            <Button variant="outlined" color="success" onClick={logout} disableElevation sx={{marginLeft: '1.2rem'}}><Link style={styles.signupLoginLink} to="/">Logout</Link></Button>
                            :
                            <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{marginLeft: '1.2rem'}}>
                                <Button color="success"><Link style={styles.signupLoginLink} to="/auth">Login</Link></Button>
                                <Button color="success"><Link style={styles.signupLoginLink} to="/auth">Sign up</Link></Button>
                            </ButtonGroup>
                            }
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
      
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/auth" exact>
            <LoginSignup setAuthenticated={setAuthenticated} onSuccessfulAuth="/"/>
          </Route>
          <Route path="/auth/fundraise" exact>
            <LoginSignup setAuthenticated={setAuthenticated} onSuccessfulAuth="/fundraise"/>
          </Route>
          <Route path="/fundraisers" exact>
            <FundRaisers/>
          </Route>
          <Route path="/donators" exact>
            <Donators/>
          </Route>
          <Route path="/fundraise" exact>
            <StartFudraiser/>
          </Route>
          <Route path="/auth/donate/:id">
            <LoginSignup setAuthenticated={setAuthenticated} onSuccessfulAuth="/donate/"/>
          </Route>
          <Route path="/donate/:id" component={Donate}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
