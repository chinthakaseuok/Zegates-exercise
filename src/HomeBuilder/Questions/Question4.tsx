import React from "react";
import {Col} from "react-bootstrap";

const Question4 : React.FC = () =>{
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
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                    <label>
                        I need to buy land.
                    </label>
                </Col>
                <Col className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"/>
                    <label >
                        I already have existing land to build on.
                    </label>
                </Col>

            </Col>

            <Col xs={12} className="d-flex pt-4">
                <h5 className="answer">Next</h5>
                <h5 className="mx-5">previous</h5>
            </Col>
        </Col>




    );
};
export default Question4;
