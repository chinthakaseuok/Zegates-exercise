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

    /** states of Question visibility*/
    const [q2Visible, setQ2Visible] = useState(false)
    const [q3Visible, setQ3Visible] = useState(false)
    const [q4Visible, setQ4Visible] = useState(false)
    const [q5Visible, setQ5Visible] = useState(false)

    /** state of progress */
    const [progress, setProgress] = useState(1);

    /** states of values of answers */
    const [area , setArea] = useState("");
    const [land , setLand] = useState("");
    const [budget , setBudget] = useState("")

    /**handle the visibility of other questions if change the value of land */
    const handleLand = (value:string) =>{
        if (land === ""){
            setLand(value);
        }else {
            setQ5Visible(false);
            setProgress(4);
        }
    }

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
                        <Question3 showNext={setQ4Visible} progress={setProgress} area={setArea}/>}
                        {q4Visible &&
                        <Question4 showNext={setQ5Visible} progress={setProgress} land={handleLand}/>}
                        {q5Visible &&
                        <Question5 showNext={setQ5Visible} progress={setProgress} budget={setBudget}/>}

                    </Col>

                </Col>

                {/**this is the column that have the progress bar */}

                <Col xs={1} className=" sidebar position-fixed">
                    <h3 className="pt-5 mt-5 px-2">{progress * 10}%</h3>
                    <ProgressBar className="graph" now={progress * 10}/>
                </Col>

                {/**this is the right side column that have the gi */}
                <Col xs={2} className=" sidebarR position-fixed  mx-0 px-4">
                    <h6 className="help px-2">Need help? Contact us</h6>
                    <Col className="summery">
                            {progress > 3 &&
                            <h3>
                                <span className="summeryHead">What you've <br/> told us</span>
                                <br/>
                                <span className="tag">{area}</span>
                                <hr className="px-2"/>
                            </h3>
                            }
                            {progress > 4 &&
                            <h3>
                                <span className="tag">Land</span>
                                <br/>
                                <span className="tagValue">{land}</span>
                            </h3>
                            }
                            {progress > 5 &&
                            <h3>
                                <span className="tag">Budget</span>
                                <br/>
                                <span className="tagValue">{budget}</span>
                            </h3>
                            }
                    </Col>
                </Col>

                <Col className="pb-5 mb-5">
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default CustomerView;
