import React from "react";
import {Col} from "react-bootstrap";
import Action from "../DisplayAction/Action";

type showNextProps = {
    showNext :(value:boolean) => void;
    progress :(value:number)=> void;
}
const Question3 :React.FC<showNextProps> = ({showNext , progress}) =>{
    return(
        <Col>
            <Col xs={12}>
                <h1 className="qHeader">
                    Where would you <br/>
                    like to build?
                </h1>
            </Col>
            <Col xs={12}>
                <h6 className="my-5 pt-5">
                    Let's see if you're in our operating markets.
                </h6>
            </Col>
            <Col xs={12}>

                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                        <label>
                            North Bay Area
                        </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                        <label >
                            South Bay Area
                        </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                        <label >
                            East Bay Area
                        </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                        <label >
                            Los Angeles Metro Area
                        </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                    <label >
                        Bahamas
                    </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                    <label >
                        Austin Metro Area
                    </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                    <label>
                        Others
                    </label>
                </Col>

            </Col>

            <Col xs={12} className="d-flex pt-4">
                <Action showNext={showNext} progressIn={3} progress={progress} />
            </Col>

        </Col>




    );
};
export default Question3;
