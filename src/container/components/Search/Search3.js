import React from 'react';
import './Search.css'
import { Row, Col, Input, Card } from 'antd';
import ProductData from '../../../ProductData'

const { Meta } = Card;

const Search3 = () => {
    return (
        <div className="common-top-margin">
            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{}}>
                    <p className="common-text">SEARCH</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "-35px" }} >
                    <div className="common-input" >
                        <Input placeholder="Sal" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins", color: "#2D2D2D", fontSize: "14px", lineHeight: "21px", }} />
                        <img src="./image/vector4.png" alt='error' style={{ position: "relative", top: "-38px", left: "42%" }} />
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "30px", display: "flex" }} >
                    <div className="lunch-button">
                        <p>Dinner  <img src="./image/vector5.png" style={{ marginLeft: "10px" }} /></p>
                    </div>

                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "30px", display: "flex" }} >
                    <div style={{ flexGrow: "12", color: "#2D2D2D", fontSize: "14px", fontWeight: "400", lineHeight: "14px" }}>
                        <p>Search Result</p>
                    </div>
                    <div style={{ flexGrow: "4", textAlign: "right" }}>
                        <img src="./image/vector7.png"  />
                    </div>
                    <div style={{ flexGrow: "2", textAlign: "right" }}>
                        <img src="./image/vector6.png"  />
                    </div>

                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{  }} >
                    <p className="sorted-style">Sorted: Price (Low - High)</p>

                </Col>


                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "10px" }} >

                    <Row>


                        {ProductData.map((product, index) => {
                            return (

                                <Col xs={{ span: 12 }} style={{ marginTop: " 10px" }}>
                                    <Card
                                        hoverable
                                        style={{ width: "95%", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignSelf: "stretch" }}
                                        cover={<img alt="example" src={product.img} />}

                                    >

                                        <Meta title={product.name} style={{ position: "relative", top: "-15px", left: "-10px", fontFamily: "Poppins", color: "#2D2D2D", fontSize: "14px", lineHeight: "21px" }} />

                                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                                            <p className="price-style">${product.price}</p>
                                            <img src={product.subImage} style={{ width: "22px", height: "22px", marginRight: "-10px" }} />
                                        </div>
                                    </Card>

                                </Col>
                            )
                        })}
                    </Row>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px", textAlign: "center" }} >
                    <p className="you-style">You've reached the end of the list</p>

                </Col>
            </Row>
        </div >
    );
};

export default Search3;