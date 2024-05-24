import { Button, ButtonGroup, Typography } from "@mui/material"
import {Link} from "react-router-dom"
import '../style.css'
import logo from '../arranged/log.jpg';
import Scroll from '../try/profile'
import globalVariableExample from './ll.js'
import { useEffect, useState } from "react";
import Mailbox from './mail.js'
import Navv from './general.js';
import AdvertisingForm from '../arranged/AdvertisingForm.js';

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
        <Navv/>
        {/* <Mailbox/> */}
          <div id = "l">
        <ButtonGroup id="w" color="secondary" variant='contained'>
        <Button><Link to="/full">full</Link></Button>
            <Button><Link to="/usersAndLinks">users & Links</Link></Button>
            <Button><Link to="/users">users</Link></Button>
            <Button><Link to="/allUrls">all Urls</Link></Button>
            <Button><Link to="/myUrls">myUrls</Link></Button>
            <Button><Link to="/barChart">graph all my links</Link></Button> 
            <Button><Link to="/graph">graph</Link></Button>
            <Button><Link to="/advertiser">advertiser</Link></Button>
            <Button><Link to="/advertisingLinks">advertisingLinks</Link></Button>
            <Button><Link to="/mailbox">mailbox</Link></Button> 
            
            <Button><Link to="/check">check</Link></Button> 
            <Button><Link to="/dialog">dialog</Link></Button> 

        </ButtonGroup>
        </div>
        <AdvertisingForm/>

        </>
    )
}
export default Navbar
