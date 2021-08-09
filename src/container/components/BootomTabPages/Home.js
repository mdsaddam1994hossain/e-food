import React, { useState } from 'react';
import './BootmTab.css'
import { Row, Col, Card, Input, Space } from 'antd';
import ProductData from '../../../ProductData.json'
import CompanyData from '../../../CompanyData.json'
import Cart from '../CartAndBusket/Cart';
import { Link } from 'react-router-dom';


const { Meta } = Card;

const Home = (props) => {



    const [selectedProduct, setSelectedProduct] = useState({});

    console.log(selectedProduct,'////////////')


    return (
        <div className="common-top-margin" style={{ background: "#F7F7F7" }}>

            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} >
                    <div className="hello-style">
                        <p className="jhone">Hello!<span style={{ color: "#2FDBBC" }}> Jhon</span> </p>
                        <div style={{ display: "flex", marginTop: "2px" }}>
                            <p className="home">Home</p>
                            <img src="./image/vector2.png" className="location-icon" />
                        </div>
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <div className="get-discount">

                        <Row>
                            <Col offset={2} span={20} style={{ paddingTop: "15px" }}>
                                <p className="discount" >GET  <span style={{ color: "#2D2D2D", lineHeight: "43px", fontSize: "36px" }}> 50%</span> AS A JOINING BONUS</p>
                            </Col>

                            <Col offset={2} span={20} >

                                <Row>
                                    <Col style={{ width: "45%", marginTop: "10px", marginRight: "5%" }}>
                                        <p className="use-code" >USE CODE OF CHECKOUT </p>
                                    </Col>
                                    <Col style={{ width: "50%", marginTop: "10px", textAlign: "right" }}>
                                        <img src="./image/hand.png" width="200px" height="100px" style={{ position: "relative", right: "0", top: "-50px", left: "-20px" }} />
                                    </Col>
                                    <Col style={{ width: "45%", marginTop: "-70px", marginRight: "5%" }}>
                                        <div >
                                            <p style={{ color: "#2D2D2D", lineHeight: "43px", fontSize: "36px", marginTop: "-20px" }} >NEW50 </p>
                                        </div>
                                    </Col>
                                </Row>

                            </Col>

                        </Row>

                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "40px" }}>
                    <div className="reco-style">
                        <p>RECOMMENDED FOR YOU</p>
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "20px" }} >





                    <Row>



                        {ProductData.map((product, index) => {
                            return (

                                <Col span={12} style={{}}>
                                    <Card
                                        onClick={() => props.setDisplay(false)}
                                        key={index}
                                        hoverable
                                        style={{ width: "100%", borderRadius: "10px" }}
                                        cover={<img alt="example" src={product.img} height="150px" style={{ borderRadius: "10px" }} />}

                                    >
                                        <img src="./image/loveVector.png" className="loveVector" />

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


                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "25px" }}>
                    <div className="reco-style">
                        <p>RESTAURANTS</p>

                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "2px" }}>
                    <Row>
                        {
                            CompanyData.map((com) => {
                                return (
                                    <Col xs={{ span: 6 }} style={{ width: "100%", marginTop: " 20px" }}>
                                        <div style={{ width: "80px", height: "80px", borderRadius: "20px", background: "white", display: "flex", justifyContent: "center", alignSelf: "center" }}>
                                            <img src={com.logo} />
                                        </div>

                                    </Col>

                                )
                            })
                        }
                    </Row>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "25px" }}>
                    <div className="reco-style">
                        <p>POPULAR IN YOUR AREA</p>
                    </div>
                </Col>


            </Row>
        </div>
    );
};

export default Home;