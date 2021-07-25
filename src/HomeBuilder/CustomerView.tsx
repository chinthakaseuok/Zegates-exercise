import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import logo from "../Asets/Images/home.png"
import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import Question3 from "./Questions/Question3";
import Question4 from "./Questions/Question4";
import Question5 from "./Questions/Question5";
import RightBar from "./SideBars/RightBar";
import LeftBar from "./SideBars/LeftBar";


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
                        <a href="https://www.homebound.com/"><img src={logo} alt={logo} className="logo"/></a>
                    </Col>

                    <Col className="questionArea">
                        <Question1 showNext={setQ2Visible} progress={setProgress} progressIn={progress}/>

                        {q2Visible &&
                        <Question2 progressIn={progress} showNext={setQ3Visible} progress={setProgress}/>
                        }

                        {q3Visible &&
                        <Question3 progressIn={progress} showNext={setQ4Visible} progress={setProgress} area={setArea}/>}

                        {q4Visible &&
                        <Question4 progressIn={progress} showNext={setQ5Visible} progress={setProgress} land={handleLand}/>}

                        {q5Visible &&
                        <Question5 progressIn={progress} showNext={setQ5Visible} progress={setProgress} budget={setBudget}/>}

                    </Col>

                </Col>


                {/**this is the column that have the progress bar */}

                <Col xs={1} className=" sidebar position-fixed">
                    <LeftBar progress={progress}/>
                </Col>


                {/**this is the right side column that have the gi */}

                <Col xs={2} className=" sidebarR position-fixed  mx-0 px-4">
                    <RightBar progress={progress} area={area} land={land} budget={budget}/>
                </Col>

                <Col className="pb-5 mb-5">
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default CustomerView;
