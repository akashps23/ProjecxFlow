import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [projectId, setProectId] = useState(
    localStorage.getItem("projectId") || null
  );
  if (!projectId) {
    message.error("No token for project present!");
    return <></>;
  }

  const [link, setLink] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const checkForFile = () => {
    if (!file) {
      message.error("Please select a file to upload.");
      return false;
    }
    return true;
  };

  const uploadFile = async (route) => {
    if (!route) return false;
    try {
      const formData = new FormData();
      formData.append("pdf", file);
      const response = await axios.post(
        `http://localhost:9014/api/v1/pdf/${route}/${projectId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      message.success("File uploaded successfully!");
      return true;
    } catch (error) {
      message.error("Error uploading file:", error);
      return false;
    }
  };

  const fetchLinkFromFile = async (route) => {
    try {
      const response = await axios.get(
        `http://localhost:9014/api/v1/pdf/view${route}/${projectId}`
      );
      let link = response.data
      if(link==="") message.error("File not uploaded yet!")
      else window.open(link);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadabstract = async () => {
    if (!checkForFile()) return;
    await uploadFile("abstract");
  };

  const handleUploaddiary = async () => {
    if (!checkForFile()) return;
    await uploadFile("diary");
  };

  const handleUploadsrs = async () => {
    if (!checkForFile()) return;
    await uploadFile("srs");
  };

  const handleUploadsdd = async () => {
    if (!checkForFile()) return;
    await uploadFile("sdd");
  };

  const handleUploadppt = async () => {
    if (!checkForFile()) return;
    await uploadFile("presentation");
  };

  const handleUploadimplementation = async () => {
    if (!checkForFile()) return;
    await uploadFile("implementation");
  };

  const handleUploadreport = async () => {
    if (!checkForFile()) return;
    await uploadFile("report");
  };

  const handleViewabstract = async () => {
    await fetchLinkFromFile("abstract");
  };
  const handleViewdiary = async () => {
    await fetchLinkFromFile("diary");
  };
  const handleViewsdd = async () => {
    await fetchLinkFromFile("srs");
  };
  const handleViewsrs = async () => {
    await fetchLinkFromFile("sdd");
  };
  const handleViewppt = async () => {
    await fetchLinkFromFile("ppt");
  };
  const handleViewimplementation = async () => {
    await fetchLinkFromFile("implementation");
  };
  const handleViewreport = async () => {
    await fetchLinkFromFile("report");
  };

  const buttonStyles = {
    fontSize: "2rem",
    margin: "0rem 1rem",
  };

  return (
    <div style={{ fontSize: "4rem" }}>
      <h2>File Uploader</h2>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <h3>Selected File:</h3>
          <p>Name: {file.name}</p>
          <p>Size: {file.size} bytes</p>
          <p>Type: {file.type}</p>
        </div>
      )}
      <div>
        <br></br>
        <button style={{ ...buttonStyles }} onClick={handleUploadabstract}>
          Upload Abstract
        </button>
        <button style={{ ...buttonStyles }} onClick={handleUploadsrs}>
          Upload SRS
        </button>
        <button style={{ ...buttonStyles }} onClick={handleUploadsdd}>
          Upload SDD
        </button>
        <button style={{ ...buttonStyles }} onClick={handleUploadppt}>
          Upload PPT
        </button>
        <button
          style={{ ...buttonStyles }}
          onClick={handleUploadimplementation}
        >
          Upload Implementation
        </button>
        <button style={{ ...buttonStyles }} onClick={handleUploaddiary}>
          Upload Diary
        </button>
        <button style={{ ...buttonStyles }} onClick={handleUploadreport}>
          Upload Report
        </button>
      </div>

      <div>
        <button style={{ ...buttonStyles }} onClick={handleViewabstract}>
          View Abstract
        </button>
        <button style={{ ...buttonStyles }} onClick={handleViewsrs}>
          View SRS
        </button>
        <button style={{ ...buttonStyles }} onClick={handleViewsdd}>
          View SDD
        </button>
        <button style={{ ...buttonStyles }} onClick={handleViewppt}>
          View PPT
        </button>
        <button style={{ ...buttonStyles }} onClick={handleViewimplementation}>
          View Implementation
        </button>
        <button style={{ ...buttonStyles }} onClick={handleViewdiary}>
          View Diary
        </button>
        <button style={{ ...buttonStyles }} onClick={handleViewreport}>
          View Report
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
