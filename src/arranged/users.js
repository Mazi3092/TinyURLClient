import { Avatar, Button, IconButton, TableContainer, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import '../style.css'

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
            const res = await axios.delete(`http://localhost:9000/users/` + id,{headers:{authorization:localStorage.getItem('accessToken')}})
        }
        const delAll = async() =>{
            const res = await axios.delete(`http://localhost:9000/users`,{headers:{authorization:localStorage.getItem('accessToken')}})
        }
        return(
            <>
                <center>
                <Typography id="space" color="secondary" variant="h4">users</Typography>
                <div className="paper" id="users-paper">
      <TableContainer sx={{ maxHeight: 500 }}>
         {this.state.users.length==0?<Typography color="secondary" variant="p">לא נמצאו משתמשים<WarningAmberIcon/></Typography>:
                   <div className="padding-top"> 
                   {this.state.users.map(user=>
                    <div className="user-item">
                    <div className="user-left">
                      <Avatar src={user.profile}>{user.name[0]}</Avatar>
                      <span>{user.name}</span>
                    </div>
                    <div className="user-center">
                      <span>{user.email}</span>
                    </div>
                    <div className="user-right">
                      <Tooltip title="Delete">
                        <IconButton onClick={() => del(user.id)}>
                          <DeleteIcon color="secondary" />
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