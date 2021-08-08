import React from 'react';
import './CheckOut.css'
import { Row, Col, Input } from 'antd';

const PaymentMethod = () => {
    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <img src="./image/vector8.png" />
                    <p className="my-address" style={{ marginTop: "50px" }}>My PAYMENT METHOD</p>
                    <p className="office" style={{ marginTop: "180px", }}>CASH</p>
                    <p className="suit" >Pay Using Cash</p>
                    <p className="office" style={{ marginTop: "50px", }}>MASTERCARD - 0164</p>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <p className="suit">XXXX XXXX XXXX 0164</p>
                      <p className="suit">09/21</p>
                    </div>

                    <p className="party-place" style={{ marginTop: "50px", }}>VISA - 3648</p>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <p className="apt-style">XXXX XXXX XXXX 3648</p>
                      <p className="apt-style">11/23</p>
                    </div>
                   
                    <div className="add-new-address">
                        ADD NEW PAYMENT METHOD
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default PaymentMethod;