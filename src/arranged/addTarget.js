import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IconButton, TextField, Tooltip } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';

function SimpleDialog(props) {
  const { onClose, open,idd } = props;
  const handleClose = () => {
    onClose();
  };
  const { register, handleSubmit,watch} = useForm()

  const addTarget = async() =>{
    handleClose()
    const nameTarget = watch("nameTarget")
    const valueTarget = watch("valueTarget")
    const res = await axios.put(`http://localhost:9000/links/AddTarget`,{headers:{authorization:localStorage.getItem('accessToken')},"id":idd,"newname":nameTarget,"newvalue":valueTarget})
    alert("add Target " + nameTarget + valueTarget + "the link: " + res.data)
  }
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>add target</DialogTitle>
      <form onSubmit={handleSubmit(addTarget)}>
      <TextField {...register("nameTarget", { required: true,minLength:1 ,maxLength: 10})} color="secondary" label="name"/><br/><br/>
     <TextField type="number"  {...register("valueTarget", { required: true })} color="secondary" label="value"/><br/><br/>
     <Tooltip title="Fill in all the fields">
    <Button type='submit' color="secondary" variant="contained">add</Button></Tooltip><br/><br/>
    </form>
    </Dialog>
  );
}

export default function SimpleDialogDemo(props) {
  const {idd}=props
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Tooltip title="add target">
            <IconButton>
              <AddIcon  color='secondary' variant="outlined"  onClick={handleClickOpen}/>
            </IconButton>
            </Tooltip>
      <SimpleDialog idd = {idd} open={open} onClose={handleClose}/>
    </div>
  );
}
