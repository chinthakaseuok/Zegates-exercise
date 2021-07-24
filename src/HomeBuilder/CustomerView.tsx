import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import logo from "../Asets/Images/home.png"
import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import Question3 from "./Questions/Question3";
import Question4 from "./Questions/Question4";
import Question5 from "./Questions/Question5";
import ProgressBar from 'react-bootstrap/ProgressBar';


const CustomerView: React.FC = () => {

    const [q2Visible, setQ2Visible] = useState(false)
    const [q3Visible, setQ3Visible] = useState(false)
    const [q4Visible, setQ4Visible] = useState(false)
    const [q5Visible, setQ5Visible] = useState(false)
    const [progress, setProgress] = useState(1);

    return (
        <React.Fragment>
            <Row className="mx-0">
                <Col xs={12} className="px-0">
                    <Col xs={12} className="mx-0">
                        <img src={logo} alt={logo} className="logo"/>
                    </Col>

                    <Col className="questionArea">
                        <Question1 showNext={setQ2Visible} progress={setProgress}/>
                        {q2Visible &&
                        <Question2 progressIn={progress} showNext={setQ3Visible} progress={setProgress}/>
                        }
                        {q3Visible &&
                        <Question3 showNext={setQ4Visible} progress={setProgress}/>}
                        {q4Visible &&
                        <Question4 showNext={setQ5Visible} progress={setProgress}/>}
                        {q5Visible &&
                        <Question5 showNext={setQ5Visible} progress={setProgress}/>}

                    </Col>

                </Col>

                <Col xs={1} className=" sidebar position-fixed">
                    <h3 className="pt-5 mt-5 px-2">{progress * 10}%</h3>
                    <ProgressBar className="graph" now={progress * 10}/>
                </Col>

                <Col xs={2} className="bg-light sidebarR position-fixed px-0 mx-0">
                    <h6 className="px-2">Need help? Contact us</h6>

                    {progress > 3 &&
                    <h3>What you've <br/> told us</h3>}
                </Col>

                <Col className="pb-5 mb-5">
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default CustomerView;
