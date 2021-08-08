import React from 'react';
import './Profile.css'
import { Row, Col, Input } from 'antd';
import { Link,Redirect } from 'react-router-dom';

const AccountAndProfile = () => {
    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                  {/* <Redirect to="layout" ></Redirect> */}  <img src="./image/vector8.png" /> 
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                    <p className="acc-and-pro"> ACCOUNT AND PROFILE</p>
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "-10px", display: "flex" }}>
                    <p className="delete-icon"> <img src="./image/deleteIcon.png" /> </p>
                    <p className="delete-text" >Delete Account </p>

                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "200px" }} >
                    <Row>
                        <Col style={{ width: "45%", marginTop: "-30px", marginRight: "5%" }}>
                            <p className="common-text">FIRST NAME</p>
                        </Col>
                        <Col style={{ width: "45%", marginTop: "-30px", marginLeft: "5%" }}>
                            <p className="common-text">LAST NAME</p>
                        </Col>
                        <Col style={{ width: "45%", marginTop: "-40px", marginRight: "5%" }}>
                            <div className="common-input">
                                <Input placeholder="John" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                            </div>
                        </Col>
                        <Col style={{ width: "45%", marginTop: "-40px", marginLeft: "5%" }}>
                            <div className="common-input">
                                <Input placeholder="Doe" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "3 0px" }}>
                    <p className="common-text">EMAIL</p>

                    <div className="email-input" >
                        <Input placeholder="Adress" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins" }} />
                    </div>

                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "30px" }}>
                    <div className="sub-profile">

                        <p style={{ flexGrow: "1" }}> <img src='./image/vector21.png' /></p>
                        <p className="account-profile"> Change Password </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}><Link to="/changePassword" > <img src='./image/vector12.png' /> </Link> </p>

                    </div>

                </Col>

                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "30px" }}>
                    <div className="checkOut">
                        UPDATE
                    </div>

                </Col>
            </Row>

        </div>
    );
};

export default AccountAndProfile;