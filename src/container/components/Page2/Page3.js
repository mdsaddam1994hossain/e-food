import React from 'react';
import './Page2.css';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const Page3 = () => {
    return (
        <div className="backgrounds-3" >

            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                    <div>
                        <p className="food-style" > FOOD-<span style={{ color: "#2FDBBC" }}>E</span> </p>
                    </div>

                </Col>


                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "450px" }}>
                    <div>
                        <p className="awesome" > DELIVERED AT </p>
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "-30px" }}>
                    <div>
                        <p className="awesome" > YOUR<spam style={{ color: "#2FDBBC" }}> DOORSTEP</spam> </p>
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "-20px" }}>
                    <div>
                        <p className="discover" > Fresh and delicious local food delivered from the restaurants to your doorstep </p>
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "15px" }}>
                    <Link to='/page4'  > 
                     <div className="next-button">
                        NEXT
                    </div>
                    </Link>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ display: "flex", justifyContent: "center", marginTop: "20px" }} >
                    <div className="underline-2"></div>
                </Col>
            </Row>


        </div>
    );
};

export default Page3;