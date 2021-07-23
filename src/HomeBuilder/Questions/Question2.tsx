import React from "react";
import {Col} from "react-bootstrap";

const Question2 : React.FC = () =>{
    return(
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
                <h5 className="answer">Next</h5>
                <h5 className="mx-5">previous</h5>
            </Col>

        </Col>




    );
};
export default Question2;
