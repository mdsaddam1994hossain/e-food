import React, { useState } from 'react';
import './Register.css'
import { Row, Col, Input,Modal } from 'antd';
import Login from '../Login/Login';

const Register = (props) => {

    const [modal,setModal]  = useState(false);

    const showModal = () => {
        setModal(true);
        props.modalHidden();
    }

    const hideModal = () => {
        setModal(false);
    }

    const name = <p> Jhon Doe </p>
    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }} >
                    <img src="./image/vector.png" onClick={props.modalHidden} />
                </Col>
                <Col xs={{ offset: 2, span: 20 }}  >
                    <p className="reg-title">REGISTER</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "40px" }}>
                    <p className="common-text">FULL NAME</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "-35px" }} >
                    <div className="common-input">
                        <Input placeholder="Jhone Doe" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "20px" }}>
                    <p className="common-text">EMAIL</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "-35px" }} >
                    <div className="common-input">
                        <Input placeholder="jhonedoe@gmail.com" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "20px" }}>
                    <p className="common-text">PHONE</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "-35px" }} >
                    <div className="common-input">
                        <Input placeholder="+00 123 456 7890" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
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

                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "10px" }} >
                    <div className="register-button" onClick={showModal}>
                        register
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "30px", textAlign: "center" }} >
                    <p className="question">Already have an account? <spam style={{ color: "#F99928" }} onClick={showModal}> Login</spam></p>
                </Col>

            </Row>


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
                <Login modalHidden={hideModal} />


            </Modal>

        </div>
    );
};

export default Register;