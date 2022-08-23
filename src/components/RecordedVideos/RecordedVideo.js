import React from "react";

import { ReactVideoPlayer } from "video-player-for-react";
import "video-player-for-react/dist/index.css";
import "./RecordedVideo.css"
import { Modal,Button,Card,Tab,Tabs } from "react-bootstrap";
export default function RecordedVideo() {
    const [x,setx] = React.useState("https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4")
  
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    
<div>      
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="home" title="Maths">
      <Tabs defaultActiveKey="profile1" id="uncontrolled-tab-example1" className="mb-3"> 
        <Tab eventKey="home1" title="Permutation" >
      <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/736x/c8/e5/75/c8e5753370bad54c7977d485e0a0e29d.jpg"/>
                <Card.Body>
                <Card.Title>Lecture 1</Card.Title>
                <Card.Text>
                    Summation Theorem
                </Card.Text>
                <Button variant="primary" onClick={()=>{setx("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");handleShow()}}>
                    Play
                </Button>
                </Card.Body>
            </Card>
            </Tab>

            <Tab eventKey="home2" title="Combination" >
      <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/736x/c8/e5/75/c8e5753370bad54c7977d485e0a0e29d.jpg"/>
                <Card.Body>
                <Card.Title>Lecture 1</Card.Title>
                <Card.Text>
                    Multiplication Theorem
                </Card.Text>
                <Button variant="primary" onClick={()=>{setx("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");handleShow()}}>
                    Play
                </Button>
                </Card.Body>
            </Card>
            </Tab>
            </Tabs>
      </Tab>
    
        
      
      

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      </Tabs>
      <Modal show={show} onHide={handleClose} centered size="lg" >
        <Modal.Header closeButton>
          <Modal.Title>Combination | Lecture 1</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{width:"100%",margin:"auto"}}><div >
       <ReactVideoPlayer
        width="550px"
        url={x}
        type="video/mp4"
        poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg" style="auto"
      />
    </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
      
    
  );
}
