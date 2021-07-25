import React, {useState} from "react";
import {Col} from "react-bootstrap";

type showNextProps = {
    showNext: (value: boolean) => void;
    progress: (value: number) => void;
    progressIn: number;
    valueGiven:string;
    qNumber : number;
}
const Action: React.FC<showNextProps> = ({showNext, progress, progressIn, valueGiven, qNumber}) => {

    const [link , setLink] = useState("");
    const handleLinkPrevious=() =>{
        setLink("#"+(qNumber-1).toString())
        console.log(link)
    }
    const handleLinkNext=() =>{
        setLink("#"+(qNumber+1).toString())
        console.log(link)
    }
    const handleAnswerGiven= () =>{
        if(progressIn > qNumber){
            progress(progressIn);
        }
        else {
            progress(progressIn+1)
        }
    }

    return (
        <Col xs={12} className="d-flex pt-4">
            {valueGiven &&
            <Col className="d-flex">
               <h5 className="answer" onClick={() => {
                    showNext(true);
                    handleAnswerGiven();
                   handleLinkNext();
                }}>
                   <a href={link} className="preBtn">Next</a></h5>
                <a href={link} className="preBtn"> <h5 className="mx-5" onClick={()=>handleLinkPrevious()}>previous</h5></a>
            </Col>
                }

            {!valueGiven &&
            <Col className="d-flex">
                <h5 className="answerDiActive" >Next</h5>
                <h5 className="mx-5" onClick={()=>handleLinkPrevious()}> <a href={link} className="preBtn">previous</a></h5>


            </Col>
            }

        </Col>
    );
};
export default Action;
