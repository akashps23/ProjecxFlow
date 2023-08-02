import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Replace 'http://localhost:9000/api/upload' with your backend API endpoint
      const response = await axios.post(`http://localhost:9014/api/v1/pdf/report/64c8f49b2050b871bee44287`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response)

      console.log('File uploaded successfully!', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>File Uploader</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {file && (
        <div>
          <h3>Selected File:</h3>
          <p>Name: {file.name}</p>
          <p>Size: {file.size} bytes</p>
          <p>Type: {file.type}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
