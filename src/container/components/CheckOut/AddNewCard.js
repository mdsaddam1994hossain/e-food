import React from 'react';
import './CheckOut.css'
import { Row, Col, Input } from 'antd';

const AddNewCard = () => {
    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <img src="./image/vector8.png" />
                    <p className="my-address" style={{ marginTop: "50px" }}>ADD NEW CARD</p>

                    <p className="common-text" style={{marginTop:"300px"}}>CARD NUMBER</p>
                    <div className="common-input" style={{marginTop:"-5px"}}>
                        <Input placeholder="xxxx-xxxx-xxxx" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                    </div>

                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "60px" }} >
                    <Row>
                        <Col style={{ width: "45%", marginTop: "-30px", marginRight: "5%" }}>
                            <p className="common-text">ANTRY DATE</p>
                        </Col>
                        <Col style={{ width: "45%", marginTop: "-30px", marginLeft: "5%" }}>
                            <p className="common-text">CVV</p>
                        </Col>
                        <Col style={{ width: "45%", marginTop: "-40px", marginRight: "5%" }}>
                            <div className="common-input">
                                <Input placeholder="MM / YY" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                            </div>
                        </Col>
                        <Col style={{ width: "45%", marginTop: "-40px", marginLeft: "5%" }}>
                            <div className="common-input">
                                <Input placeholder="X X X" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <div className="add-new-address">
                        ADD CARD
                    </div>
                </Col>


            </Row>

        </div>
    );
};

export default AddNewCard;