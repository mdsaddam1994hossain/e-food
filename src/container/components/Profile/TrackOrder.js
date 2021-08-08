import React from 'react';
import './Profile.css';
import { Row, Col, Input } from 'antd';

const TrackOrder = () => {
    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <img src="./image/vector8.png" />
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                    <p className="acc-and-pro">08 JULY 2021</p>
                    <p className="price-total">$65.00</p>
                </Col>

                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                   <div>
                       <p className="egg-salad">Egg Salad</p>
                       <div style={{display:"flex",justifyContent:"space-between"}}>
                           <p className="pises">2 PICES</p>
                           <p className="pises">$ 10.00</p>
                       </div>
                   </div>
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                   <div>
                       <p className="egg-salad">Grilled Salmon</p>
                       <div style={{display:"flex",justifyContent:"space-between"}}>
                           <p className="pises">3 PICES</p>
                           <p className="pises">$ 45.00</p>
                       </div>
                   </div>
                </Col>
            </Row>

        </div>
    );
};

export default TrackOrder;