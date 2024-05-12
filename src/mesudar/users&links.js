import { Accordion, AccordionDetails, AccordionSummary, AppBar, Avatar, Box, Button, CssBaseline, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, TableContainer, Toolbar, Tooltip, Typography, useScrollTrigger } from "@mui/material";
import axios from "axios";
import React from "react";
import '../style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { margin } from "@mui/system";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 10,
    right: 0,
    margin: '0 auto',
  });
export default class Users extends React.Component{
    state = {
        users:[],
        links:[],
    }
    componentDidMount(){
        axios.get(`http://localhost:9000/users`)
        .then(res=>{
            const users = res.data;
            this.setState({users})
        })
    }
    componentDidUpdate(){
        axios.get(`http://localhost:9000/users`)
        .then(res=>{
            const users = res.data;
            this.setState({users})
        })
    }
    
    render(){
      const delUser = async(id) =>{
        alert("del user")
        const res = await axios.delete(`http://localhost:9000/users/` + id)
      }
      const delAll = async() =>{
        alert("all")
        const res = await axios.delete(`http://localhost:9000/users`)
      }
      const delLink = async(idLink,idUser) =>{
       const resUser = await axios.put(`http://localhost:9000/users/` ,{"userId":idUser,"linkId":idLink})
      }
        return(
            <>
             <React.Fragment>
      <CssBaseline />
      <center> 
      <Typography id="spa" color="secondary" variant="h4">users & links</Typography>
      {this.state.users.length==0?<Typography color="secondary" variant="p">לא נמצאו משתמשים<WarningAmberIcon/></Typography>:
        <div className="paper">
      <TableContainer sx={{ maxHeight: 440 }}>
        {this.state.users.map(user =>
         <Accordion>
         <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel1a-content"id="panel1a-header">
        <Avatar alt="Profile Picture"/><ListItemText secondary={user.email}/>
        <div className="space"></div><Button color="secondary" variant="outlined" startIcon={<DeleteIcon onClick={()=>delUser(user.id)}/>}>Delete</Button>
         </AccordionSummary>
         <AccordionDetails>
           <Typography>
            {user.links.length==0 ? <Typography color="secondary" variant="p">למשתמש זה עדיין אין קישורים במערכת<WarningAmberIcon/></Typography>:
            <ul dir="rtl">
                {user.links.map(link=>
                <li><Link color="secondary" target="_blank" title={link.originalUrl} to={link.originalUrl}>
                  {link.uniqueName}</Link>
                  <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon color="secondary" onClick={()=>delLink(link._id,user.id)}/>
                            </IconButton>
                        </Tooltip>
                  </li>
                )}
            </ul>}
           </Typography>
         </AccordionDetails>
       </Accordion>
            )}
      <div className="bpaper">
      <AppBar position="static" color="secondary">
        <Toolbar color="secondary">    
          <StyledFab color="default" aria-label="add">
            <Link to="/signUp"><AddIcon/></Link>
          </StyledFab>
          <DeleteIcon onClick={delAll}/><h4>delete all</h4>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
        </Toolbar>
      </AppBar> 
      </div>
      </TableContainer>
      </div>
       }
      </center>
    </React.Fragment>
            </>
        )
    }
}
