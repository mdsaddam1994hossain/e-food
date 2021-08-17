import React from 'react';
import './CheckOut.css';
import { Row, Col } from 'antd';
const CheckOut = (props) => {

    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <img src="./image/vector8.png" alt="error"  onClick={()=>props.setDisplay(true)} style={{cursor:"pointer"}}/>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{marginTop:"40px"}}>
                    <p className="checkout">CHECKOUT</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{marginTop:"150px"}}>
                    <p className="price">PRICE</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{marginTop:""}}>
                    <p className="dollar-style"> $ 65.00</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{marginTop:"20px"}}>
                    <p className="price">DELIVER TO</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{marginTop:"",display:"flex",justifyContent:"space-between"}}>
                    <p className="home-style"> HOME </p>
                    <p className="change" onClick={()=> props.setDisplay(false)}> Change </p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{marginTop:"40px"}}>
                    <p className="price">PAYMENT METHOD</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{marginTop:"",display:"flex",justifyContent:"space-between"}}>
                    <p className="home-style"> XXXX XXXX XXXX 2538 </p>
                    <p className="change"> Change </p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{marginTop:"30px"}}>
                    <div className="checkOut">
                        CHECKOUT ORDER
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default CheckOut;