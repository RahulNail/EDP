// import React,{useState} from 'react'
// // Import the main component
// import { Viewer } from '@react-pdf-viewer/core'; // install this library
// // Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// // Import the styles
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import './PDF.css'
// // Worker
// import { Worker } from '@react-pdf-viewer/core'; // install this library
// import fileDownload from 'js-file-download';

// export const PDF = () => {

//   // Create new plugin instance
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
//   // for onchange event
//   const [pdfFile, setPdfFile]=useState(null);
//   const [pdfFileError, setPdfFileError]=useState('');
//   console.log(new File(["C:\Users\aashi\Desktop\Attendence.pdf"],"sample.pdf",{type:"application/pdf"}))

//   // for submit event
//   const [viewPdf, setViewPdf]=useState(null);

//   // onchange event
//   const fileType=['application/pdf'];
//   const handlePdfFileChange=(e)=>{
//     let selectedFile=e.target.files[0];
//     if(selectedFile){
//       console.log(selectedFile)
//       if(selectedFile&&fileType.includes(selectedFile.type)){
//         let reader = new FileReader();
//             reader.readAsDataURL(selectedFile);
//             reader.onloadend = (e) =>{
//               setPdfFile(e.target.result);
//               setPdfFileError('');
//             }
//       }
//       else{
//         setPdfFile(null);
//         setPdfFileError('Please select valid pdf file');
//       }
//     }
//     else{
//       console.log('select your file');
//     }
//   }
//   // form submit
//   const handlePdfFileSubmit=(e)=>{
//     e.preventDefault();
//     if(pdfFile!==null){
//       setViewPdf(pdfFile);
//     }
//     else{
//       setViewPdf(null);
//     }
//   }

//   return (
//     <div className='container'>

//     <br></br>
    
//       <form className='form-group' onSubmit={handlePdfFileSubmit}>
//         <input type="file" className='form-control'
//           required onChange={handlePdfFileChange}
//         />
//         {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
//         <br></br>
//         <button type="submit" className='btn btn-success btn-lg'>
//           UPLOAD
//         </button>
//       </form>
//       <br></br>
//       <h4>View PDF</h4>
//       <div className='pdf-container'>
//         {/* show pdf conditionally (if we have one)  */}
//         {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
//           <Viewer fileUrl={viewPdf}
//             plugins={[defaultLayoutPluginInstance]} />
//       </Worker></>}

//       {/* if we dont have pdf or viewPdf state is null */}
//       {!viewPdf&&<>No pdf file selected</>}
//       </div>

//     </div>
//   )
// }

// export default PDF


import { Card, Button, Tabs,Tab } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PDF (){
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="home" title="Maths">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/736x/c8/e5/75/c8e5753370bad54c7977d485e0a0e29d.jpg"/>
        <Card.Body>
          <Card.Title>Maths</Card.Title>
          <Card.Text>
            This is created by Prof.Rao
          </Card.Text>
          <a href="https://api.allorigins.win/raw?url=https://www.ets.org/Media/Tests/MFT/pdf/mft_mathII.pdf" target="_blank" rel="noopener noreferrer" download>
            <Button>
                <i className="fas fa-download"/>
                Read
            </Button>
          </a>
        </Card.Body>
      </Card>
      </Tab>
      <Tab eventKey="profile" title="Science">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/41HFCSB7XXL._SX331_BO1,204,203,200_.jpg"/>
        <Card.Body>
          <Card.Title>Science</Card.Title>
          <Card.Text>
            This is created by Prof.Gupta
          </Card.Text>
          <a href="https://api.allorigins.win/raw?url=https://www.ltu.se/cms_fs/1.82663!/file/TheInformationLifeCycle.pdf" target="_blank" rel="noopener noreferrer" download>
            <Button>
                <i className="fas fa-download"/>
                Read
            </Button>
          </a>
        </Card.Body>
      </Card>
      </Tab>
      <Tab eventKey="contact" title="Marathi">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51yb2jzIZRL.jpg"/>
        <Card.Body>
          <Card.Title>Marathi</Card.Title>
          <Card.Text>
            This is created by prof.Patil
          </Card.Text>
          <a href="https://api.allorigins.win/raw?url=https://sahitya.marathi.gov.in/ebooks/%E0%A4%85%E0%A4%B8%E0%A5%8D%E0%A4%AA%E0%A5%83%E0%A4%B6%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%82%E0%A4%9A%E0%A4%BE%20%E0%A4%B2%E0%A4%B7%E0%A5%8D%E0%A4%95%E0%A4%B0%E0%A5%80%20%E0%A4%AA%E0%A5%87%E0%A4%B6%E0%A4%BE.pdf" target="_blank" rel="noopener noreferrer" download>
            <Button>
                <i className="fas fa-download"/>
                Read
            </Button>
          </a>
        </Card.Body>
      </Card>
      </Tab>
    </Tabs>
    </div>
  );
};

export default PDF;