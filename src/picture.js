import React from "react";
import axios from "axios";
function App() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const res = axios.get()
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }; 
    return (
      <div id = "pic" style={{borderRadius:"100px" , display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center"}}>
        <input type="file"accept="image/*"onChange={handleImageUpload} ref={imageUploader}style={{display: "none",borderRadius:"100px" }}/>
        <div style={{ height: "50px", width: "50px", border: "1px dashed black",borderRadius:"100px" }}onClick={() => imageUploader.current.click()} >
          <img ref={uploadedImage} style={{width: "100%",height: "100%",borderRadius:"100px"}}/>
        </div> 
        </div>
    );
  }
  export default App