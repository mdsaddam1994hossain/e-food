import React, { useState } from 'react';
import './Login.css';
import { Row, Col, Input,Modal } from 'antd';
import { Link } from 'react-router-dom';
import Login from './Login';

const ResetPassword = (props) => {

    const [modal,setModal] = useState(false);

    const showModal = ()=>{
        setModal(true);
        props.modalHidden();
    }

    const hideModal = ()=>{
        setModal(false)
    }

    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }}>
                    <img src="./image/vector.png" onClick={props.modalHidden}/>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} >
                    <p className="reg-title">RESET PASSWORD</p>
                </Col>


                <Col xs={{ offset: 2, span: 20 }}  style={{ marginTop: "30px" }}>
                    <p className="common-text">NEW PASSWORD</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }}  style={{ marginTop: "-35px" }} >
                    <div className="common-input">
                        <Input.Password placeholder="Password" fill="red" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }}

                        />
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }}  style={{ marginTop: "40px" }}>
                    <p className="common-text">CONFIRM PASSWORD</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }}   style={{ marginTop: "-35px" }} >
                    <div className="common-input">
                        <Input.Password placeholder="Password" fill="red" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }}

                        />
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "180px" }} >
                    
                        <div className="register-button">
                           <p onClick={showModal}> RESET PASSWORD</p> 
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
                <Login modalHidden={hideModal} />
            </Modal>


        </div>
    );
};

export default ResetPassword;