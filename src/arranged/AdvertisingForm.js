import React, { useState } from 'react';
import {Button, Grid, Container, Typography, MenuItem, Box, Select, InputLabel, FormControl, FormControlLabel, Radio, RadioGroup, FormGroup, Checkbox, Avatar, FormLabel, Input, IconButton, Fab } from '@mui/material';
import axios from 'axios';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import data from '@emoji-mart/data';
import CloseIcon from '@mui/icons-material/Close';
import Picker from '@emoji-mart/react';
import '../style.css'

const AdvertisingForm = () => {
  const [text, setText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const addEmoji = (emoji) => {
    setText(text + emoji.native);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  
  const [formData, setFormData] = useState({
    about: '',
    followerAge: '',
    audience: '',
    platforms: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const platforms = prevData.platforms.includes(value)
          ? prevData.platforms.filter((platform) => platform !== value)
          : [...prevData.platforms, value];
        return { ...prevData, platforms };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
        'about':text
      });
    }
  };

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      followerAge: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert(text)
    try {
    const response = await axios.post(`http://localhost:9000/advertisers`,{headers:{authorization:localStorage.getItem('accessToken')},formData})
      // Reset the form data to initial state after successful submission
      setFormData({
        about: '',
        followerAge: '',
        audience: '',
        platforms: []
      });
      setText('');
    } catch (error) {
        alert(error)
      console.error('Error:', error);
    }
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
        <div className="advertising-form">
        <Fab
        style={{
          position: 'fixed',
        }}
         className="open-form-btn" 
         onClick={toggleForm}
          color="secondary"
        >
       {isFormOpen ? <CloseIcon/> : <Diversity1Icon/>}
        </Fab>
      {isFormOpen && (
        <div className="form-popup">
          <Container style={{ backgroundColor: 'white' }} component="main" maxWidth="sm">
      <Typography textAlign={'center'} component="h1" variant="h5" sx={{ mt: 2, mb: 2 }}>
        טופס הצטרפות פרסום
      </Typography>
      <hr/><br/>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <div>
        <FormLabel component="legend">ספר על עצמך, מה סוג התוכן שאתה משתף , באיזה תדירות אתה מפרסם</FormLabel>
      <div className="text-input-container">
        <textarea
          className="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=""
          name="about"
          required
        />
        <button 
          className="emoji-button" 
          type="button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          😊
        </button>
        {showEmojiPicker && (
          <div className="emoji-picker">
            <Picker 
              data={data} 
              onEmojiSelect={addEmoji} 
            />
          </div>
        )}
      </div>
    </div>
          <Grid item xs={12}>
            <FormLabel component="legend">באילו רשתות חברתיות אתה משתף את הקישורים?</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox value="Instagram" checked={formData.platforms.includes("Instagram")} onChange={handleChange} />}
                label={<div style={{ display: 'flex', alignItems: 'center' }}><Avatar sx={{width:'30px',height:'30px'}} src='https://i.pinimg.com/564x/f4/1e/2d/f41e2dab621c1ee5253cef74e3642fcf.jpg' /><label>Instagram</label></div>}
              />
              <FormControlLabel
                control={<Checkbox value="TikTok" checked={formData.platforms.includes("TikTok")} onChange={handleChange} />}
                label={<div style={{ display: 'flex', alignItems: 'center' }}><Avatar sx={{width:'30px',height:'30px'}} src='https://i.pinimg.com/564x/e9/6e/95/e96e95506709a6ee7c4fa053c9cb920c.jpg' /><label>TikTok</label></div>}
              />
              <FormControlLabel
                control={<Checkbox value="Facebook" checked={formData.platforms.includes("Facebook")} onChange={handleChange} />}
                label={<div style={{ display: 'flex', alignItems: 'center' }}><Avatar sx={{width:'30px',height:'30px'}} src='https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg' /><label>Facebook</label></div>}
              />
              <FormControlLabel
                control={<Checkbox value="YouTube" checked={formData.platforms.includes("YouTube")} onChange={handleChange} />}
                label={<div style={{ display: 'flex', alignItems: 'center' }}><Avatar sx={{width:'30px',height:'30px'}} src='https://i.pinimg.com/236x/31/42/4f/31424f19e85a5e78574c86272ef291dd.jpg' /><label>YouTube</label></div>}
              />
              <FormControlLabel
                control={<Checkbox value="Email" checked={formData.platforms.includes("Email")} onChange={handleChange} />}
                label={<div style={{ display: 'flex', alignItems: 'center' }}><Avatar sx={{width:'30px',height:'30px'}} src='https://i.pinimg.com/564x/5e/a9/91/5ea9910c5f3f1961dac969aaced53470.jpg' /><label>Email</label></div>}
              />
              <FormControlLabel
                control={<Checkbox value="WhatsApp" checked={formData.platforms.includes("WhatsApp")} onChange={handleChange} />}
                label={<div style={{ display: 'flex', alignItems: 'center' }}><Avatar sx={{width:'30px',height:'30px'}} src='https://i.pinimg.com/564x/93/b2/65/93b265c795140247db600ac92e58746a.jpg' /><label>WhatsApp</label></div>}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">האם אתה מכוון למגזר ספציפי?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              required
            >
              <FormControlLabel value="חרדי" control={<Radio />} label="חרדי" />
              <FormControlLabel value="כללי" control={<Radio />} label="כללי" />
              <FormControlLabel value="נשים" control={<Radio />} label="נשים" />
              <FormControlLabel value="בעלי עסקים" control={<Radio />} label="בעלי עסקים" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">גיל העוקבים</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="followerAge"
                value={formData.followerAge}
                label="גיל העוקבים"
                onChange={handleSelectChange}
              >
                <MenuItem value="18-25">18-25</MenuItem>
                <MenuItem value="26-35">26-35</MenuItem>
                <MenuItem value="36-45">36-45</MenuItem>
                <MenuItem value="46-60">46-60</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              שלח
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
      </div>
    )}
    </div>
    </>
  );
};

export default AdvertisingForm;
