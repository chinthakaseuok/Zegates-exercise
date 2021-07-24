import React from "react";
import {Col} from "react-bootstrap";
import Action from "../DisplayAction/Action";

type showNextProps = {
    showNext: (value: boolean) => void;
    progress: (value: number) => void;
}
const Question5: React.FC<showNextProps> = ({showNext, progress}) => {
    return (
        <Col>
            <Col xs={12}>
                <h1 className="qHeader">
                    Do you have a budget in mind<br/>
                    for your completed home?
                </h1>
            </Col>
            <Col xs={12}>
                <h6 className="my-5 pt-5">
                    Our team of experts has built over 5,000+ homes collectively, over decades of working in custom home
                    building.<br/> Our experience spans diversified builds from less than $500K to over $5M.
                </h6>
            </Col>
            <Col xs={12}>

                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                    <label>
                        Under $500K
                    </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                    <label>
                        $500K to $1 Million
                    </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                    <label>
                        $1 Million to $1.5 Million
                    </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                    <label>
                        $1.5 Million to $2 Million
                    </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                    <label>
                        Over $2 Million
                    </label>
                </Col>

            </Col>

            <Col xs={12} className="d-flex pt-4">
                <Action showNext={showNext} progressIn={5} progress={progress}/>
            </Col>
        </Col>


    );
}
export default Question5;
