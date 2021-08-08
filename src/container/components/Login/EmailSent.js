import React, { useState } from 'react';
import './Login.css';
import { Row, Col, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';

const EmailSent = (props) => {

    const [modal, setModal] = useState(false);
    const [resentModal, setResentModal] = useState(false);

    const showModal = () => {
        setModal(true);
        props.modalHidden()
    
    }

    const hideModal = () => {
        setModal(false)
    }

    const showResentModal = () => {
        setResentModal(true);
        props.modalHidden()
    }

    const hideResentModal = () => {
        setResentModal(false)
    }

    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }} >
                    <img src="./image/vector.png" onClick={props.modalHidden} />
                </Col>
                <Col xs={{ offset: 2, span: 20 }} >
                    <p className="reg-title">EMAIL SENT</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "-30px" }}>
                    <p className="email-sent-des">We've sent you an email at <spam style={{ color: "#2FDBBC" }}>user@gmail.com</spam> for verification. Check your email for the verification link.</p>
                </Col>




                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "200px" }}>
                    <p className="time">00:38</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "18px" }}>
                    <p className="notFound"> Did not receive the email yet?</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "-5px" }}>

                    <p className="resend" onClick={showResentModal }> Resend </p>

                </Col>


                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "10px" }} >

                    <div className="register-button">
                        <p onClick={showModal}> OPEN EMAIL APP </p>
                    </div>

                </Col>

            </Row>

            <Modal visible={modal}
                okButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                closable={false}
            >
                <ResetPassword modalHidden={hideModal} />
            </Modal>

            {/* resend modal */}

            <Modal visible={resentModal}
                okButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                closable={false}
            >
                <ForgotPassword modalHidden={hideResentModal} />
            </Modal>

        </div>
    );
};

export default EmailSent;