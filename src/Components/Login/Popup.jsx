import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup({popup,popupclose,messagepopup}){
    return(
<Modal show={popup} backdrop="static">
    <Modal.Dialog>
        <Modal.Body >
            <p>{messagepopup}</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='primary' onClick={popupclose}>Ok</Button>
        </Modal.Footer>
    </Modal.Dialog>
    </Modal>


    )
}
export default Popup