import React from 'react';
import './Profile.css';
import { Row, Col, Input } from 'antd';

const ReferToFriend = () => {
    return (
        <div className="common-top-margin" >

            <Row>

                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <img src="./image/vector8.png" />
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                    <p className="acc-and-pro">REFFER TO A FRIEND </p>

                </Col>

                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "-35px" }} >
                    <p className="refer-code">REFFER CODE</p>
                    <div className="code-style" >
                       
                        <Input placeholder="Q8F4-B6S2-S6B3-NGZ5" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px",paddingRight:"35px", fontFamily: "Poppins", color: "#2D2D2D", fontSize: "14px", lineHeight: "21px", }} />
                        <img src="./image/codeIcon.png" alt='error' style={{ position: "relative", top: "-38px", left: "45%" }} />
                    </div>
                </Col>

                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "420px" }}>
                    <div className="checkOut">
                       SHARE THIS APP
                    </div>

                </Col>

            </Row>


        </div>
    );
};

export default ReferToFriend;