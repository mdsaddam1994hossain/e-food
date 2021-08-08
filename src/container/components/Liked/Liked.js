import React from 'react';
import { Row, Col } from 'antd';
import './Liked.css'

const Liked = () => {
    return (
        <div className="common-top-margin">
            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <p className="basket">LIKED</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ flexGrow: "2" }}>
                        <img src='./image/egg.png' width="80px" height="80px" />
                    </div>
                    <div style={{ flexGrow: "10", marginTop: "2px" }}>
                        <p className="name-style"> Egg Salad</p>
                        <p className="pric-style">$ 5.00</p>
                    </div>
                    <div style={{ flexGrow: "4", textAlign: "right", marginTop: "2px" }}>
                        <p>  <img src="./image/deleteIcon.png" alt="erron" width="22px" height="22px" /> </p>
                        <p className="amount"> <img src='./image/boxed.png'  /> </p>
                    </div>
                </Col>

                

            </Row>

        </div>
    );
};

export default Liked;