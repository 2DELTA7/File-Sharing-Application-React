import './App.css';
import { useRef,useState,useEffect } from 'react';
import { uploadFile } from './services/Api';

function App() {

  let logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'

  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click()
  }

  const [file,setFile] = useState('');

  useEffect(()=>{
    const getImage = async () => {
      if(file)
      {
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(); 
      }
    }
    getImage();
  },[file]);

  return (
    <div className='container'>
      <img src={logo} alt="banner"></img>
      <div className='wrapper'>
        <h1>Simple File Sharing</h1>
        <p>Upload and share the download file</p>
        <button onClick={onUploadClick}>Upload</button>
        <input 
        type='file' 
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e)=> setFile(e.target.files)}
        ></input>
      </div>
    </div>
  );
}

export default App;
