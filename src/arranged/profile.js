import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Avatar, Box, Typography, IconButton, Badge, Alert } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import '../style.css';
import { Link } from 'react-router-dom';

const ProfilePictureDialog = () => {
  const [user, setUser] = useState({});
  
 useEffect(() => {
  const fetchData = async () => {
      const res = await axios.get("http://localhost:9000/users/one", {
        headers: { authorization: localStorage.getItem('accessToken') }
      });
      setUser(res.data);
    }
fetchData()
  }, [])

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');
  const [showSaveButtons, setShowSaveButtons] = useState(false);

  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));

    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    setShowSaveButtons(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowSaveButtons(false);
  };

  const handleEdit = () => {
    imageUploader.current.click();
  };

  const handleDelete = () => {
    setProfile(null)
    setPreview(null);
    setSelectedFile(null);
    setShowSaveButtons(true);
  };

  const handleCancel = () => {
    setPreview(localStorage.getItem('profile') || 'src');
    setSelectedFile(null);
    setShowSaveButtons(false);
    setOpen(false);
  };

  const handleSave = () => {
    console.log('היי');
    setOpen(false);
    setShowSaveButtons(false);
  };

  const [open, setOpen] = useState(false);
  const [imageSrc, setProfile] = useState(localStorage.getItem('profile') || 'src');
  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('Please select a file first.');
      return;
    }
    const formData = new FormData();
    formData.append('profilePicture', selectedFile);
    try {
      const response = await axios.post('http://localhost:9000/users/setProfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: localStorage.getItem('accessToken')
        }
      });
      localStorage.setItem('profile',response.data.fileUrl)
      window.location.reload();
      setMessage('File uploaded successfully!');
      console.log('File uploaded successfully:', response.data);
      setProfile(response.data.fileUrl);
    } catch (error) {
      setMessage('Error uploading file.');
      console.error('Error uploading file:', error);
    }
    setOpen(false);
    setShowSaveButtons(false);
  };

  return (
    <>
    <div>
      <center>
        {message}
    <Typography id="space" color="secondary" variant="h4">my profile</Typography>
      {/* <Button variant="contained" onClick={handleClickOpen}> */}
      {!user.role?
      <>
      <img id='profile' alt="Profile Picture" src='https://i.pinimg.com/originals/23/ac/1a/23ac1a907311c7f2bfe777f3d425beb2.jpg'/><br/><br/>
      <Alert sx={{width:'25vw'}} color='error' variant="outlined" severity="info">
       It looks like you are not logged in yet.<Link to="/signin">sign in</Link>
       </Alert>
      </>
      :<div>
      <IconButton  onClick={handleClickOpen}  color="inherit">
      <EditIcon sx={{position:'absolute',bottom:'3vh',left:'3vw'}} fontSize="large"/>
      <img id='profile' alt="Profile Picture" src={preview || imageSrc}/> </IconButton>
      </div>}
        {/* <Avatar onClick={handleClickOpen} alt="Profile Picture" src={preview || imageSrc} /> */}
      {/* </Button> */}
    <Typography variant="h4">welcome back {' ' + user.name}</Typography>
    <Typography variant="h4">{user.email}</Typography>
    {user.role&&user.role.map(y=><p>{y}</p>)}
    {/* <Typography variant="h4">{user.links}</Typography> */}
      </center>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h6">תמונת פרופיל</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Avatar alt="Profile Picture" ref={uploadedImage} src={preview || imageSrc} sx={{ width: 150, height: 150, mb: 2 }} />
            <Typography variant="body2" color="textSecondary">
              תמונה תעזור לאנשים לזהות אותך ולאשר לך לדעת שנכנסת לחשבון
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              style={{ display: 'none' }}
            />
            <Button onClick={handleEdit} color="primary" variant="contained" startIcon={<EditIcon />}>
              שינוי
            </Button>
            <Button onClick={handleDelete} color="secondary" variant="contained" startIcon={<DeleteIcon />}>
              מחיקה
            </Button>
          </Box>
          {showSaveButtons && (
            <Box display="flex" justifyContent="center" alignItems="center" width="100%">
              <Button onClick={handleCancel} color="primary" variant="contained">
                בטל
              </Button>
              <Button onClick={handleUpload} color="primary" variant="contained">
                שמור שינויים
              </Button>
            </Box>
          )}
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
};

export default ProfilePictureDialog;
