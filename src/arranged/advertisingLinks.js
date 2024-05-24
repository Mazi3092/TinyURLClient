import { Avatar, Button, IconButton, TableContainer, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import '../style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {CopyButton} from './home.js';

export default class AdvertisingLinks extends React.Component{
    state = {
        advertisingLinks:[]
    }
    componentDidMount(){
        // axios.get(`http://localhost:9000/users`)
        axios.get(`http://localhost:9000/advertisers` ,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const advertisingLinks = res.data;
            this.setState({advertisingLinks})
            console.log(advertisingLinks)
        })
    }
    componentDidUpdate(){
        axios.get(`http://localhost:9000/users/urls/` ,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const urls = res.data;
            this.setState({urls})
            // alert(res.data[0])
        })
    }
    render(){
        return(
            <>
                <center>
                <Typography id="space" color="secondary" variant="h4">הקישורים שאני מפרסם</Typography>
                <div className="paper" id="users-paper">
      <TableContainer sx={{ maxHeight: 440 }}>
         {this.state.advertisingLinks.length==0?<Typography color="secondary" variant="p">לא נמצאו כתובות<WarningAmberIcon/></Typography>:
                   <div className="padding-top">
                    {/* {this.state.advertisingLinks.length} */}
                   {this.state.advertisingLinks.map(advertisingLink=>
                   <>
                    <p><CopyButton url={'advertisingLinksnn'}/></p>
                    {/* <p>advertisingLinks<CopyButton/></p>
                    <p>advertisingLinks<CopyButton/></p>
                    <p>advertisingLinks<CopyButton/></p> */}
                    </>
                 )}
                </div> }
                </TableContainer></div>
                </center>
            </>
        )
    }
}


