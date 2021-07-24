import React from "react";
import {Col} from "react-bootstrap";

type showNextProps = {
    showNext: (value: boolean) => void;
    progress: (value: number) => void;
}

const Question1: React.FC<showNextProps> = ({showNext, progress}) => {

    return (
        <Col>
            <Col xs={12}>
                <h1 className="qHeader">
                    What brings you <br/> to our site?
                </h1>
            </Col>
            <Col xs={12}>
                <h6 className="my-5 pt-5">
                    Are you looking at building your own home, or helping us build for others?
                </h6>
            </Col>
            <Col xs={12}>
                <h5 className="answer" onClick={() => {
                    showNext(true);
                    progress(2)
                }}>I'm exploring building a home</h5>
                <h5 className="answer">I'd like to partner with home bound</h5>
            </Col>
        </Col>


    );
};
export default Question1;
