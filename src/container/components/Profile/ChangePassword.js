import React from 'react';
import './Profile.css'
import { Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
    return (
        <div className="common-top-margin">
            <Row>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <Link to="/accountAndProfile" > <img src="./image/vector8.png" /> </Link>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                    <p className="acc-and-pro">CHANGE PASSWORD</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "200px" }}>
                    <p className="common-text">OLD PASSWORD</p>

                    <div className="email-input" style={{ marginTop: "-5px" }} >
                        <Input placeholder="Old Password" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                    </div>

                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "30px" }}>
                    <p className="common-text">NEW PASSWORD</p>

                    <div className="email-input" style={{ marginTop: "-5px" }}>
                        <Input placeholder="New Password" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                    </div>

                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "30px" }}>
                    <p className="common-text">CONFIRM PASSWORD</p>

                    <div className="email-input" style={{ marginTop: "-5px" }} >
                        <Input placeholder="Confirm Password" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                    </div>

                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                    <div className="checkOut">
                        CHANGE PASSWORD
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default ChangePassword;