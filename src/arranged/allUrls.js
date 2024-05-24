import { Button, Dialog, DialogTitle, Divider, IconButton, TableContainer, Toolbar, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Target from './addTarget.js'
import '../style.css'

export default class AllUrls extends React.Component{
    state = {
        urls:[]
    }
    componentDidMount(){
        axios.get(`http://localhost:9000/links`,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const urls = res.data;
            this.setState({urls})
        })
    }
    componentDidUpdate(){
        axios.get(`http://localhost:9000/links`,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const urls = res.data;
            this.setState({urls})
        })
    }
    render(){
        return(
            <>
                <center>
                    {this.state.urls.length == 0? <Typography color="secondary" variant="p">לא נמצאו כתובות<WarningAmberIcon/></Typography>:
                    <div id='urls'>
                    {this.state.urls.map(url=>
                    <div className="urls">
                         <p>{url.uniqueName}</p>
                    <Divider />
                    <Target idd = {url.id}/>
                    {url.targetValues.length==0?
                        <b>אין טרגטים לקישור זה</b>:
                        <>
                            <b>targets:</b>
                            {/* <div className="paper" id="users-paper"> */}
                        <TableContainer sx={{ maxHeight: 80}}>
                       <ul>
                    {url.targetValues.map(target=>
                    <div>
        {target.name} =<Link color="secondary" target="_blank" to={'http://localhost:9000/u/'+ url.uniqueName +'?t=' + target.value}>http://localhost:9000/u/{url.uniqueName}?t={target.value}</Link>
                   </div>
                        )} 
                        </ul>
                        </TableContainer>
                            {/* </div> */}
                        </>

                    }
                    {/* <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon onClick={()=>del(url.id)}/>
                            </IconButton>
                        </Tooltip> */}
                        
                        {/* <Tooltip title="add target">
                            <IconButton>
                               <AddIcon onClick={()=>addTarget(url.id)}/>
                            </IconButton>
                        </Tooltip> */}
                         {/* <Toolbar color="secondary">    </Toolbar> */}
                    </div>
                 )}
                 {/* <Button color="secondary" variant='contained' onClick={delAll}>מחק הכל</Button> */}
                 </div>}
                 </center>
            </>
        )
    }
}