import React, { useState } from 'react';
import './Login.css';
import { Row, Col, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';
import Register from '../Register/Register';
import ForgotPassword from './ForgotPassword';

const Login = (props) => {

    const [modal, setModal] = useState(false);
    const [forgotModal, setForgotModal] = useState(false);

    const showModal = () => {
        setModal(true);
        props.modalHidden();
    }

    const hideModal = () => {
        setModal(false);
        
    }

    const showForgotModal = () => {
        setForgotModal(true);
        props.modalHidden()
    }

    const hideForgotModal = () => {
        setForgotModal(false);
    }

    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }}>
                    <img src="./image/vector.png" onClick={props.modalHidden} />
                </Col>
                <Col xs={{ offset: 2, span: 20 }} >
                    <p className="reg-title">LOGIN</p>
                </Col>



                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "150px" }}>
                    <p className="common-text">EMAIL</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "-35px" }} >
                    <div className="common-input">
                        <Input placeholder="jhonedoe@gmail.com" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "20px" }}>
                    <p className="common-text">PASSWORD</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "-35px" }} >
                    <div className="common-input">
                        <Input.Password placeholder="Password" fill="red" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }}

                        />
                    </div>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "8px", textAlign: "right" }} >
                    <p className="question" onClick={showForgotModal} style={{cursor:"pointer"}}>Forgot Password</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "20px" }} >
                    <Link to="/layout" >
                        <div className="register-button">
                            LOGIN
                        </div>
                    </Link>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "30px", textAlign: "center" }} >
                    <p className="question">Do't have an account? <spam style={{ color: "#F99928",cursor:"pointer" }} onClick={showModal}> Register </spam> </p>
                </Col>

            </Row>

            {/* register modal */}

            <Modal
                visible={modal}

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
                <Register modalHidden={hideModal} />


            </Modal>
            {/* forgot password modal */}

            <Modal
                style={{height:"600px"}}
                visible={forgotModal}
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
                <ForgotPassword modalHidden={hideForgotModal} />


            </Modal>


        </div>
    );
};

export default Login;