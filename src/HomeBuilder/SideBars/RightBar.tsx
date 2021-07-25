import React from "react";
import {Col} from "react-bootstrap";

type  rightBarProps = {
    progress : number;
    area : string;
    land :string;
    budget : string;
}
const RightBar : React.FC<rightBarProps> = ({progress,area,land,budget}) =>{
    return(
        <Col>
        <h6 className="help px-2">Need help? <a href="https://estimator.homebound.com/requestcall" className="contact">Contact us</a></h6>
    <Col className="summery">
        {progress > 3 &&
        <h3>
            <span className="summeryHead">What you've <br/> told us</span>
            <br/>
            <span className="tag">{area}</span>
            <hr className="px-2"/>
        </h3>
        }
        {progress > 4 && {land} &&
        <h3>
            <span className="tag">Land</span>
            <br/>
            <span className="tagValue">{land}</span>
        </h3>
        }
        {progress > 5 &&
        <h3>
            <span className="tag">Budget</span>
            <br/>
            <span className="tagValue">{budget}</span>
        </h3>
        }
    </Col>
        </Col>
    );
};
export default RightBar;
