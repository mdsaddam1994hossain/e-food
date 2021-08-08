import React from 'react';
import './CheckOut.css'
import { Row, Col } from 'antd';

const OrderConfirmed = () => {
    return (
        <div style={{ background: "#4FE178",marginTop:"-30px",height:"820px"}} >
            <div className="common-top-margin">
                <Row>
                    <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "220px", textAlign: "center" }}>
                        <p className="order-confirm" >ORDER CONFIRMED!</p>
                        <img src="./image/orderConfirm.png"  />
                        <p className="hang-on">Hang on Tight! We've received your arder and we'll bring it to you ASAP!</p>
                        <div className="order-track">
                            <p>TRACK MY ORDER</p>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default OrderConfirmed;