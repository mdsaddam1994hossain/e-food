import React from 'react';
import './Profile.css';
import { Row, Col, Input } from 'antd';


const OrderHistory = () => {
    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <img src="./image/vector8.png" />
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                    <p className="acc-and-pro">ORDER HISTORY</p>
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "30px", display: "flex", justifyContent: "space-between" }}>
                    <p className="date-style">08 JULY 2021</p>
                    <p className="date-style">$ 65.00</p>
                </Col>

                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "10px" }}>
                    <p className="items-order">5 items</p>
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "5px" }}>
                    <div className="checkOut">
                        TRACK ORDER
                    </div>

                </Col>


                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px", display: "flex", justifyContent: "space-between" }}>
                    <p className="date-style">05 JULY 2021</p>
                    <p className="date-style">$ 105.00</p>
                </Col>

                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "10px" }}>
                    <p className="items-order">11 items</p>
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "5px" }}>
                    <div className="view-details">
                        VIEW DETAILS
                    </div>

                </Col>


                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px", display: "flex", justifyContent: "space-between" }}>
                    <p className="date-style">01 JULY 2021</p>
                    <p className="date-style">$ 30.00</p>
                </Col>

                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "10px" }}>
                    <p className="items-order">2 items</p>
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "5px" }}>
                    <div className="view-details">
                        VIEW DETAILS
                    </div>

                </Col>
            </Row>

        </div>
    );
};

export default OrderHistory;