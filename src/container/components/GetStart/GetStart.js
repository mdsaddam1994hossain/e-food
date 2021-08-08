import React, { useState } from 'react';
import { Row, Col, Modal } from 'antd';
import './GetStart.css'
import { Link } from 'react-router-dom';
import Login from '../Login/Login'
import Register from './../Register/Register';

const GetStart = (props) => {


    const [registerModal, setRegisterModal] = useState(false);
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    }

    const hideModal = () => {
        setModal(false);
    }

    const registerModalShow = () => {
        setRegisterModal(true);
    }

    const hideRegisterModal = () => {
        setRegisterModal(false);
    }


    return (
        <div className="common-top-margin">
            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <p className="common-efood"> FOOD-<psam style={{ color: "#2FDBBC" }}>E</psam> </p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <p className="getstart"> GET-<psam style={{ color: "#2FDBBC" }}>STARTED</psam> </p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <p className="description"> Get started and enjoy the awesome local food right at your home. </p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>

                    <div className="login">
                        <p onClick={showModal}> Login </p>
                    </div>

                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>

                    <div className="register">
                        <p onClick={registerModalShow} > register</p>
                    </div>

                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ display: "flex", justifyContent: "center", marginTop: "40px" }} >
                    <div className="underline"></div>
                </Col>


            </Row>

            <Modal
                style={{height:"300px"}}
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

            {/* register modal */}

            <Modal
                visible={registerModal}

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
                <Register modalHidden={hideRegisterModal} />


            </Modal>


        </div>
    );
};

export default GetStart;