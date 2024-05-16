import { Button, ButtonGroup, Typography } from "@mui/material"
import {Link} from "react-router-dom"
import '../style.css'
import Pic from '../picture'
import logo from './log.jpg';
import Scroll from '../try/profile'
import globalVariableExample from './ll'
import C from '../picture'
const navbar = () => {
    let n = localStorage.getItem('name') || 'user'
    return(
        <>  
        <Pic id="pic"/>
        <Scroll/> 
        <h3>hello {n}</h3>
        <Typography id="coteret" color="secondary" variant="h1" component="h3">Tiny URL</Typography>
          <div id = "l">
          
        <ButtonGroup id="w" color="secondary" variant='contained'>
            <Button><Link to="/home">home</Link></Button>
            <Button><Link to="/app">App</Link></Button>
            <Button><Link to="/signup">sign up</Link></Button>
            <Button><Link to="/signin">sign in</Link></Button>
            <Button><Link to="/usersAndLinks">users & Links</Link></Button>
            <Button><Link to="/users">users</Link></Button>
            <Button><Link to="/allUrls">all Urls</Link></Button>
            <Button><Link to="/full">full</Link></Button>
            <Button><Link to="/myUrls">myUrls</Link></Button>
        </ButtonGroup>
        {/* <div className="App">
        <img id="radius" src={logo} className="App-logo" alt="logo" />
    </div> */}
        </div>
        </>
    )
}
export default navbar