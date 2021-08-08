import React from 'react';
import './Profile.css';
import { Row, Col, Input } from 'antd';
import CustomerData from '../../../CustomerData.json'

const ContactSupport = () => {
    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <img src="./image/vector8.png" />
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                    <p className="acc-and-pro">CONTACT SUPPORT </p>

                </Col>

                {
                    CustomerData.map((items, index) => {
                        return (

                            items.contact.map((item, index) => {
                                return (
                                    <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "20px", display: "flex" }}>
                                        <p className="delete-icon"> <img src={item.img} /> </p>
                                        <p className="media-style" > {item.media} </p>
                                    </Col>
                                )
                            })

                        )
                    })
                }



            </Row>

        </div>
    );
};

export default ContactSupport;