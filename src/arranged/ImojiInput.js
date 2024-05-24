import '../style.css';
import React, { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import { Button } from '@mui/material';

const App = (props) => {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open, message } = state;

  const handleClick = (newState) => () => {
    setState({ vertical: 'bottom', horizontal: 'left', open: true, message: '' });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left', message: '' })}>
      Bottom-Left
    </Button>
  );

  const [text, setText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const id = props.id;

  const addEmoji = (emoji) => {
    setText(text + emoji.native);
  };

  const sendMessage = async () => {
    if (text.trim() !== '') {
      try {
        const res = await axios.put("http://localhost:9000/users/sendMessage", { headers: { authorization: localStorage.getItem('accessToken') }, 'text': text, 'to': id });
        setState({ vertical: 'bottom', horizontal: 'left', open: true, message: res.data });
        setText('');
        setShowEmojiPicker(false);
      } catch {
        setState({ vertical: 'bottom', horizontal: 'left', open: true, message: 'ההודעה נשלחה' });
      }
    }
  };

  return (
    <>
      <div className="imoji-div">
        <div className="text-input-container">
          <textarea
            className="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="כתבו הודעה..."
          />
          <button 
            className="emoji-button" 
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😊
          </button>
          {showEmojiPicker && (
            <div className="emoji-picker">
              <Picker data={data} onEmojiSelect={addEmoji} />
            </div>
          )}
          <button 
            className="send-button"
            onClick={sendMessage}
          >
            <SendIcon />
          </button>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal + message}
      />
    </>
  );
};

export default App;
