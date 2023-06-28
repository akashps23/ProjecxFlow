import React, { useState } from 'react';
import '../styles/fileuploader.css';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file_to_upload', selectedFile);

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', progressHandler, false);
    xhr.open('POST', 'uploader.php');
    xhr.send(formData);
  };

  const progressHandler = (event) => {
    const percent = (event.loaded / event.total) * 100;
    setProgress(Math.round(percent));
  };

  return (
    <div className="file-uploader">
      <h2>PROJEXFLOW FILE UPLOADER</h2>
      <input type="file" name="file_to_upload" accept=".jpg,.png,.txt" onChange={handleFileChange} />

      <h3>Drag &amp; Drop a File</h3>
      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        DROP HERE
      </div>

      <hr />

      {selectedFile && <p id="file_name">{selectedFile.name}</p>}
      <progress id="progress_bar" value={progress} max="100"></progress>
      <p id="progress_status">{progress}% uploaded</p>

      <button onClick={uploadFile}>Upload To Server</button>
    </div>
  );
};

export default FileUploader;
