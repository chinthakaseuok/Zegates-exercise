import React from "react";
import {Col} from "react-bootstrap";
import Action from "../DisplayAction/Action";

type showNextProps = {
    showNext: (value: boolean) => void;
    progress: (value: number) => void;
    progressIn: number;
}
const Question2: React.FC<showNextProps> = ({showNext, progress,progressIn}) => {

    return (
        <Col>
            <Col xs={12}>
                <h1 className="qHeader">
                    We'd love to learn more <br/>
                    about your project? </h1>

            </Col>
            <Col xs={12}>
                <h6 className="my-5 pt-5">
                    Let's get started and see if Homebound is right for you.
                </h6>
            </Col>
            <Col xs={12} className="d-flex">
                <Action showNext={showNext} progressIn={progressIn} qNumber = {2} progress={progress} valueGiven={"given"}/>

            </Col>
            <p id="3"/>

        </Col>


    );
};
export default Question2;
