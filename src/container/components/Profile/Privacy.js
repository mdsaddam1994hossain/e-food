import React from 'react';
import './Profile.css';
import { Row, Col } from 'antd';
import ConditionData from '../../../ConditionData.json'

const Privacy = () => {
    return (
        <div className="common-top-margin">
            <Row>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <img src="./image/vector8.png" />
                </Col>
                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>
                    <p className="acc-and-pro">PRIVACY AND POLICY </p>

                </Col>

                <Col xs={{offset:2,span:20}} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }}>

                    {ConditionData.map((data, index) => {
                        return (
                            <div>
                                <p className="title-styling">{data.title} </p>
                                <p className="descrip-styling">{data.description}</p>
                            </div>
                        )
                    })}

                </Col>
            </Row>
        </div>
    );
};

export default Privacy;