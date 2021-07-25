import React from "react";
import {Col} from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";


type LeftBarProps = {
    progress:number;
}
const LeftBar : React.FC<LeftBarProps> = ({progress}) =>{
    return(
        <Col>
            <h3 className="pt-5 mt-5 px-2">{progress * 10}%</h3>
            <ProgressBar className="graph" now={progress * 10}/>
        </Col>
    );
};

export default LeftBar
