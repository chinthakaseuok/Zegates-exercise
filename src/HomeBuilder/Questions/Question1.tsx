import React from "react";
import {Col} from "react-bootstrap";

type showNextProps = {
    showNext: (value: boolean) => void;
    progress: (value: number) => void;
    progressIn : number;
}

const Question1: React.FC<showNextProps> = ({showNext, progress, progressIn}) => {

    const handleAnswerGiven = () =>{
        if(progressIn > 1){
            progress(progressIn);
        }
        else {
            progress(2);
        }
    }


    return (
        <Col>
            <p id="1"/>
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
                    handleAnswerGiven();
                }}>I'm exploring building a home</h5>
                <h5 className="answer">
                    <a href="https://www.homebound.com/trade-partners" className="q1Link">I'd like to partner with home bound
                    </a>
                </h5>
                <p id="2"/>
            </Col>
        </Col>


    );
};
export default Question1;
