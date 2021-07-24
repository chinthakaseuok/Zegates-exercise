import React from "react";
import {Col} from "react-bootstrap";

type showNextProps = {
    showNext: (value: boolean) => void;
    progress: (value: number) => void;
    progressIn: number;
}
const Action: React.FC<showNextProps> = ({showNext, progress, progressIn}) => {
    return (
        <Col xs={12} className="d-flex pt-4">
            <h5 className="answer" onClick={() => {
                showNext(true);
                progress(progressIn + 1)
            }}>Next</h5>
            <h5 className="mx-5">previous</h5>
        </Col>
    );
};
export default Action;
