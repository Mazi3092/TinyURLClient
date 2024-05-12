import { Avatar, Button, IconButton, TableContainer, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import '../style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default class Users extends React.Component{
    state = {
        users:[]
    }
    componentDidMount(){
        axios.get(`http://localhost:9000/users`,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const users = res.data;
            this.setState({users})
        })
    }
    componentDidUpdate(){
        axios.get(`http://localhost:9000/users`,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const users = res.data;
            this.setState({users})
        })
    }
    render(){
        const del = async(id) =>{
            alert(id)
            const res = await axios.delete(`http://localhost:9000/users/` + id)
        }
        const delAll = async() =>{
            alert("all")
           const res = await axios.delete(`http://localhost:9000/users`)
        }
        return(
            <>
                <center>
                <Typography color="secondary" variant="h4">users</Typography>
                <div className="paper" id="tt">
      <TableContainer sx={{ maxHeight: 440 }}>
         {this.state.users.length==0?<Typography color="secondary" variant="p">לא נמצאו משתמשים<WarningAmberIcon/></Typography>:
                   <div className="i"> {this.state.users.map(user=>
                    <div className="users">
                    <p><Avatar>{user.name[0]}</Avatar> {user.name}</p>
                    <p> {user.email}</p>
                    <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon color="secondary" onClick={()=>del(user.id)}/>
                            </IconButton>
                        </Tooltip>
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