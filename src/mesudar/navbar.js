import { Button, ButtonGroup, Typography } from "@mui/material"
import {Link} from "react-router-dom"
import '../style.css'
import Pic from '../picture'
import logo from './log.jpg';
import Scroll from '../try/profile'
import globalVariableExample from './ll'
import C from '../picture'
import { useEffect, useState } from "react";
import Mailbox from './mailbox'
import NewTry from './newTry.js'
import Navv from '../navv.js';
import UserForm from '../try/form.js';

const Navbar = () => {
    // let name = localStorage.getItem('name') || 'user'
    const [name, setName] = useState(localStorage.getItem('name') || 'user');
    const [profile, setProfile] = useState(localStorage.getItem('profile') || 'src');

  useEffect(() => {
    // alert('useEffect is running');
    const handleStorageChange = (event) => {
      if (event.key === 'name') {
        setName(event.newValue || 'user');
      }
      if (event.key === 'profile') {
        setName(event.newValue || 'src');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
    return(
        <>  
          <div id="header">
        <nav>
             <Navv/>
      
        {/* <Mailbox/> */}
        {/* <Pic s={profile} id="pic"/> */}
          <div id = "l">
        <ButtonGroup id="w" color="secondary" variant='contained'>
            <Button><Link to="/home">home</Link></Button>
            <Button><Link to="/app">App</Link></Button>
            {/* <Button><Link to="/signup">sign up</Link></Button>
            <Button><Link to="/signin">sign in</Link></Button> */}
            <Button><Link to="/usersAndLinks">users & Links</Link></Button>
            <Button><Link to="/users">users</Link></Button>
            <Button><Link to="/allUrls">all Urls</Link></Button>
            <Button><Link to="/full">full</Link></Button>
            <Button><Link to="/myUrls">myUrls</Link></Button>
            <Button><Link to="/graph">graph</Link></Button>
            <Button><Link to="/advertiser">advertiser</Link></Button>
            <Button><Link to="/userForm">userForm</Link></Button>
            <Button><Link to="/advertisingLinks">advertisingLinks</Link></Button>
            <Button><Link to="/dialog">dialog</Link></Button> 
            <Button><Link to="/imoji">imoji</Link></Button> 
            <Button><Link to="/newTry">newTry</Link></Button> 
        </ButtonGroup>
        </div>
        <UserForm/>
        </nav>
    </div>
        <iframe name="iframe_a" src="homepage.html">
        </iframe>
        <footer></footer>
        </>
    )
}
export default Navbar
