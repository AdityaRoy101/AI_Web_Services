import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
// import { useState } from 'react';
const { Dragger } = Upload;

const FileUploader = ({ fileFunc }) => {
  
  const props = {
    name: 'file',
    multiple: true,
    action: 'http://localhost:5000/upload',
    method: "post",
    enctype: "multipart/form-data",
    onChange(info) {
      // console.log(info.re);
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file.response.image);
        fileFunc(info.file.response.image);
      }
      if (status === 'done') {
        // fileFunc(`${info.file.name}`)
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
  
      // console.log(info.fileList[0].response.image);
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag Image to this area to upload</p>
      <p className="ant-upload-hint">
        Upload your images one at a time .jpg .png .jpeg only supported
      </p>
    </Dragger>
  )
}

export default FileUploader

// ==========================================


// const props = {
//   name: 'file',
//   multiple: true,
//   action: 'http://localhost:5000/upload',
//   method: "post",
//   enctype: "multipart/form-data",
//   onChange(info) {
//     // console.log(info.re);
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file.response.image);
//     }
//     if (status === 'done') {
//       // fileFunc(`${info.file.name}`)
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }

//     // console.log(info.fileList[0].response.image);
//   },
//   onDrop(e) {
//     console.log('Dropped files', e.dataTransfer.files);
//   },
// };

// const [funcName, setfuncName] = useState("");
// const FileUploader = () => (

//   // const [funcName, setfuncName] = useState("");

//   // return(
//   <Dragger {...props}>
//     <p className="ant-upload-drag-icon">
//       <InboxOutlined />
//     </p>
//     <p className="ant-upload-text">Click or drag Image to this area to upload</p>
//     <p className="ant-upload-hint">
//       Upload your images one at a time .jpg .png .jpeg only supported
//     </p>
//   </Dragger>
//   // );
// );
// export default FileUploader;