import React from "react";
import {Col, Row} from "react-bootstrap";
import logo from "../Asets/Images/home.png"
import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import Question3 from "./Questions/Question3";
import Question4 from "./Questions/Question4";
import Question5 from "./Questions/Question5";

const CustermerView:React.FC = () =>{
    return(
        <React.Fragment>
            <Row className="mx-0">
                <Col xs={12} className="px-0">
                    <Col xs={12} className="mx-0">
                        <img src={logo} alt={logo} className="logo"/>
                    </Col>

                    <Col className="questionArea">
                        <Question1/>
                        <Question2/>
                        <Question3/>
                        <Question4/>
                        <Question5/>

                    </Col>

                </Col>

                <Col xs={1} className=" sidebar position-fixed">
                    <h3 className="pt-5 mt-5 px-2">80%</h3>
                </Col>

                <Col xs={2} className="bg-light sidebarR position-fixed px-0 mx-0">
                    <h6 className="px-2">Need help? Contact us</h6>
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default CustermerView;
