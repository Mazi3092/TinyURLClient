import { Avatar, Button, IconButton, TableContainer, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import '../style.css'

export default class MyUrls extends React.Component{
    state = {
        urls:[]
    }
    componentDidMount(){
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
           const res = await axios.put(`http://localhost:9000/users/urls/`,{headers:{authorization:localStorage.getItem('accessToken')}})
        }
        return(
            <>
                <center>
                <Typography id="space" color="secondary" variant="h4">myUrls</Typography>
                <div className="paper" id="users-paper">
      <TableContainer sx={{ maxHeight: 500 }}>
         {this.state.urls.length==0?<Typography color="secondary" variant="p">לא נמצאו כתובות<WarningAmberIcon/></Typography>:
                   <div className="padding-top">
                    {this.state.urls.map(url=>
                    <div className="user-item">
                    {/* <b><p>{url.originalUrl}</p></b><br/> */}
                    <div className="user-left">
                    <p> {url.uniqueName}</p> 
                    </div>
                    <div className="user-center">
                    <p> {url.id}</p> 
                    </div>
                    <div className="user-right">
                    <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon color="secondary" onClick={()=>del(url.id)}/>
                            </IconButton>
                        </Tooltip>
                    </div>
                        </div>
                 )}
                </div> }
                </TableContainer></div>
                <div style={{bottom:'10px'}} className="bottom-paper">
      <Button color="secondary" variant="contained" onClick={delAll}>מחק הכל</Button>
</div>
                </center>
            </>
        )
    }
}