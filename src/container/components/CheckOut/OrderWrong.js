import React from 'react';
import './CheckOut.css'
import { Row, Col } from 'antd';

const OrderWrong = () => {
    return (
        <div style={{ background: "#F77272",marginTop:"-30px",height:"820px"}} >
        <div className="common-top-margin">
            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "220px", textAlign: "center" }}>
                    <p className="order-confirm" >SOMETHING WENT WRONG!</p>
                    <img src="./image/orderWrong.png"  />
                    <p className="hang-on"> Something went wrong. We'll look into the issue right away. </p>
                    <div className="order-track">
                        <p>TRY AGAIN</p>
                    </div>
                </Col>
            </Row>

        </div>
    </div>
    );
};

export default OrderWrong;