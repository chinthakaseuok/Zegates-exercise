import React from "react";
import {Col} from "react-bootstrap";
import Action from "../DisplayAction/Action";

type showNextProps = {
    showNext :(value:boolean) => void;
    progress :(value:number)=> void;
    land: (value: string) => void;
}
const Question4 : React.FC<showNextProps> = ({showNext , progress, land}) =>{

    return(
        <Col>
            <Col xs={12}>
                <h1 className="qHeader">
                    Do you already have<br/>
                    land to build on?
                </h1>
            </Col>
            <Col xs={12}>
                <h6 className="my-5 pt-5">
                    We can help you find a lot if you don't already have one.

                </h6>
            </Col>
            <Col xs={12}>

                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="q4" id="q4"
                           onChange={() => land("need to buy land")}/>
                    <label>
                        I need to buy land.
                    </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="q4" id="q4"
                           onChange={() => land("I have Land")}/>
                    <label >
                        I already have existing land to build on.
                    </label>
                </Col>

            </Col>

            <Col xs={12} className="d-flex pt-4">
                <Action showNext={showNext} progressIn={4} progress={progress} />
            </Col>
        </Col>




    );
};
export default Question4;
