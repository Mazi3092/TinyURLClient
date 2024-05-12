import { Avatar, Button, IconButton, TableContainer, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import '../style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default class Users extends React.Component{
    state = {
        urls:[]
    }
    componentDidMount(){
        // axios.get(`http://localhost:9000/users`)
        axios.get(`http://localhost:9000/users/urls/` ,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const urls = res.data;
            this.setState({urls})
            console.log(res.data)
        })
    }
    componentDidUpdate(){
        // axios.get(`http://localhost:9000/users/urls/` ,{headers:{authorization:localStorage.getItem('accessToken')}})
        // .then(res=>{
        //     const urls = res.data;
        //     this.setState({urls})
        //     // alert(res.data[0])
        // })
    }
    render(){
        const del = async(id) =>{
            alert(id)
            const res = await axios.delete(`http://localhost:9000/links/` + id ,{headers:{authorization:localStorage.getItem('accessToken')}})
        }
        const delAll = async() =>{
            alert("all")
           const res = await axios.delete(`http://localhost:9000/links`,{headers:{authorization:localStorage.getItem('accessToken')}})
        }
        return(
            <>
                <center>
                <Typography color="secondary" variant="h4">myUrls</Typography>
                <div className="paper" id="tt">
      <TableContainer sx={{ maxHeight: 440 }}>
         {this.state.urls.length==0?<Typography color="secondary" variant="p">לא נמצאו כתובות<WarningAmberIcon/></Typography>:
                   <div className="i"> {this.state.urls.map(url=>
                    <div className="users">
                    <div>
                    <b><p>{url.originalUrl}</p></b><br/>
                    <p> {url.uniqueName}</p> 
                    <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon color="secondary" onClick={()=>del(url._id)}/>
                            </IconButton>
                        </Tooltip>
                        </div>
                    </div>
                 )}
                </div> }
                </TableContainer></div>
      <div className="bpaper" id = "tt">
      <Button color="secondary" variant="contained" onClick={delAll}>מחק הכל</Button>
</div>
                </center>
            </>
        )
    }
}