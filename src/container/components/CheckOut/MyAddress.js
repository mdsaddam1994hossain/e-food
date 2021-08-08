import React from 'react';
import './CheckOut.css'
import { Row, Col } from 'antd';

const MyAddress = () => {
    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <img src="./image/vector8.png" />
                    <p className="my-address" style={{ marginTop: "50px" }}>My Address</p>
                    <p className="party-place" style={{ marginTop: "180px", }}>PARTY PLACE</p>
                    <p className="apt-style" >Apt. 12, Watson Bldg., 13th Ave. and St. James St., 406035</p>
                    <p className="office" style={{ marginTop: "50px" }}>OFFICE</p>
                    <p className="suit">Suite 03, Johnson Business Park, 554537</p>
                    <p className="office" style={{ marginTop: "50px" }}>Home</p>
                    <p className="suit">Apt. 12, Watson Bldg., 13th Ave. and St. James St., 406035</p>
                    <div className="add-new-address">
                        ADD NEW ADDRESS
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default MyAddress;