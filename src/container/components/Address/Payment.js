import React from 'react';
import './Address.css'
import { Row, Col,Input } from 'antd';

const Payment = () => {
    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <img src="./image/vector.png" />
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <p className="reg-title">PAYMENT SETUP</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "250px" }}>
                    <p className="common-text">CARD NUMBER</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "-35px" }} >
                    <div className="common-input">
                        <Input placeholder="xxxx-xxxx-xxxx" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                    </div>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }} >
                    <Row>
                        <Col style={{ width: "45%",marginTop:"-30px",marginRight:"5%" }}>
                        <p className="common-text">ANTRY DATE</p>
                        </Col>
                        <Col style={{ width: "45%",marginTop:"-30px",marginLeft:"5%"}}>
                        <p className="common-text">CVV</p>
                        </Col>
                        <Col style={{ width: "45%",marginTop:"-30px",marginRight:"5%"}}>
                        <div className="common-input">
                          <Input placeholder="MM / YY" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                       </div>
                        </Col>
                        <Col style={{width: "45%",marginTop:"-30px",marginLeft:"5%" }}>
                        <div className="common-input">
                            <Input placeholder="X X X" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                        </div>
                        </Col>
                    </Row>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "20px" }} >
                    <div className="register-button">
                        ADD CARD
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "30px", textAlign: "center" }} >
                    <p className="question">Skip fon now</p>
                </Col>

            </Row>


        </div>
    );
};

export default Payment;