import React from "react";
import { Container } from "react-bootstrap";
import ReactLoading from 'react-loading';

function Loading(){
    return(
        <Container>
            <div className="d-flex align-items-center justify-content-center w-100 py-5">
        <ReactLoading type="spinningBubbles" color="#0072A0" height={50} width={100} />
        </div>
        </Container>
    )
}
export default Loading