import React, { useState } from 'react';
import './Login.css';
import { Row, Col, Input,Modal } from 'antd';
import { Link } from 'react-router-dom';
import EmailSent from './EmailSent';


const ForgotPassword = (props) => {

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
                <Col xs={{ offset: 2, span: 20 }}  >
                    <img src="./image/vector.png" onClick={props.modalHidden}/>
                </Col>
                <Col xs={{ offset: 2, span: 20 }}  >
                    <p className="reg-title">FORGOT PASSWORD</p>
                </Col>



                <Col xs={{ offset: 2, span: 20 }} style={{ marginTop: "250px" }}>
                    <p className="common-text">EMAIL</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }}  style={{ marginTop: "-35px" }} >
                    <div className="common-input">
                        <Input placeholder="jhonedoe@gmail.com" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }}  style={{ marginTop: "20px" }} >
                   
                        <div className="register-button">
                          <p onClick={showModal}> LOGIN</p>
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
                <EmailSent modalHidden={hideModal} />
            </Modal>

        </div>
    );
};

export default ForgotPassword;