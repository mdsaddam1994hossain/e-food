import React from 'react';
import './Profile.css';
import { Row, Col } from 'antd';
import CustomerData from '../../../CustomerData.json'
import { Link } from 'react-router-dom';

const Profile = () => {


    return (
        <div className="common-top-margin">
            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} >
                    {
                        CustomerData.map((profile, index) => {
                            return (
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "20px" }}>
                                    <img src={profile.image} className="image-style" />
                                    <p className="name-styles"> {profile.name} </p>
                                </div>
                            )
                        })
                    }
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <div className="sub-profile">
                        <p style={{ flexGrow: "1" }}> <img src="./image/vector9.png" /></p>
                        <p className="account-profile">Account and Profile </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}><Link to="/accountAndProfile"> <img src="./image/vector12.png" /> </Link></p>
                    </div>

                    <div className="sub-profile">
                        <p style={{ flexGrow: "1" }}> <img src="./image/vector11.png" /></p>
                        <p className="account-profile">Manage Payment Methods </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}> <Link to="/addNewCard"><img src="./image/vector12.png" /> </Link> </p>
                    </div>

                    <div className="sub-profile">
                        <p style={{ flexGrow: "1" }}> <img src="./image/vector13.png" /></p>
                        <p className="account-profile">Manage Addresses </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}> <Link to="/addNewAddress"> <img src="./image/vector12.png" /> </Link> </p>
                    </div>

                    <div className="sub-profile">
                        <p style={{ flexGrow: "1" }}> <img src="./image/vector14.png" /></p>
                        <p className="account-profile"> Order History </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}><Link to="/orderHistory" > <img src="./image/vector12.png" /> </Link></p>
                    </div>

                    <div className="sub-profile">
                        <p style={{ flexGrow: "1" }}> <img src="./image/vector15.png" /></p>
                        <p className="account-profile"> Contact Support </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}><Link to="/contactSupport"  > <img src="./image/vector12.png" /> </Link> </p>
                    </div>

                    <div className="sub-profile">
                        <p style={{ flexGrow: "1" }}> <img src="./image/vector16.png" /></p>
                        <p className="account-profile"> Refer to a Friend </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}><Link to="/referToFriend"  > <img src="./image/vector12.png" /> </Link> </p>
                    </div>

                    <div className="sub-profile">
                        <p style={{ flexGrow: "1" }}> <img src="./image/vector17.png" /></p>
                        <p className="account-profile"> Write a Review </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}><img src="./image/vector12.png" /></p>
                    </div>

                    <div className="sub-profile">
                        <p style={{ flexGrow: "1" }}> <img src="./image/vector18.png" /></p>
                        <p className="account-profile"> Terms and Conditions </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}><Link to="/termAndCondition"> <img src="./image/vector12.png" /> </Link></p>
                    </div>

                    <div className="sub-profile">
                        <p style={{ flexGrow: "1" }}> <img src="./image/vector19.png" /></p>
                        <p className="account-profile"> Privacy Policy </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}> <Link to="/privacy"> <img src="./image/vector12.png" /> </Link></p>
                    </div>

                    <div className="sub-profile">
                        <p style={{ flexGrow: "1" }}> <img src="./image/vector9.png" /></p>
                        <p className="account-profile"> Logout </p>
                        <p style={{ flexGrow: "1", textAlign: "right" }}><Link to="/getStart" > <img src="./image/vector12.png" /> </Link> </p>
                    </div>

                </Col>
            </Row>

        </div>
    );
};

export default Profile;