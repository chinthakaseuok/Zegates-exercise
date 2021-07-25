import React, {useState} from "react";
import {Col} from "react-bootstrap";
import Action from "../DisplayAction/Action";

type showNextProps = {
    showNext :(value:boolean) => void;
    progress :(value:number)=> void;
    land: (value: string) => void;
    progressIn:number
}
const Question4 : React.FC<showNextProps> = ({showNext , progress, land , progressIn}) =>{

    const [value , setValue ] = useState("");
    const handleArea= (val : string) =>{
        land(val);
        setValue("given");
    }
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
                           onChange={() => handleArea("need to buy land")}/>
                    <label>
                        I need to buy land.
                    </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="q4" id="q4"
                           onChange={() => handleArea("I have Land")}/>
                    <label >
                        I already have existing land to build on.
                    </label>
                </Col>

            </Col>

            <Col xs={12} className="d-flex pt-4">
                <Action showNext={showNext} progressIn={progressIn} qNumber = {4} progress={progress} valueGiven={value} />
                <p id="5"/>
            </Col>
        </Col>




    );
};
export default Question4;
