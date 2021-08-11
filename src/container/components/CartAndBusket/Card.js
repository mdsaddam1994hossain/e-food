import React, { useState, useEffect } from 'react';
import './CartAndBusket.css'
import { Row, Col, Carousel } from 'antd';
import ProductData from '../../../ProductData'
import { useParams, Link } from 'react-router-dom';




const Card = (props) => {

    const productDetails = props.location.state || {};
    const [numberOfProduct, setNumberOfProduct] = useState(1);
    const [subTotalPrice, setSubTotalPrice] = useState(productDetails.price);

    console.log(productDetails.img)

    const handalIncreemnt = () => {
        setNumberOfProduct((prev) => prev + 1);


    }

    const handalDecreemnt = () => {
        setNumberOfProduct(numberOfProduct - 1);


    }

    return (

        <div >
            <Row>

                <Col xs={{ span: 24 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <Carousel >


                        <img src={productDetails.img} width="100%" height="360px" style={{ position: "absolute", top: "0px", }} />
                        <img src={productDetails.imgdetails} width="100%" height="360px" style={{ position: "absolute", top: "0px", }} />
                        <img src={productDetails.imgdetails2} width="100%" height="360px" style={{ position: "absolute", top: "0px", }} />


                    </Carousel>
                </Col>

                <Col xs={{ span: 24 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "30px 20px", zIndex: "99999" }}>
                        <Link to='/layout'>   <img src="./image/backBoxed.png" style={{ cursor: "pointer" }} /></Link>
                        <img src="./image/optionBoxed.png" />
                    </div>
                    <img src={productDetails.img} width="100%" height="320px" style={{ position: "absolute", top: "0px", zIndex: "-5" }} />
                </Col>


                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ display: "flex", justifyContent: "space-between", marginTop: "250px" }}>
                    <div>
                        <p className="slamon-style"> {productDetails.name} </p>
                        <p className="neutious">The Nautilus</p>
                    </div>
                    <div>
                        <img src="./image/watch.png" style={{ marginTop: "10px", position: "relative", left: "37px" }} />
                        <p className="times"> 34 mins</p>
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "20px" }}>

                    <p className="reco-style">DESCRIPTION</p>

                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} >

                    <p className="not-odit">Non odit iusto delectus maxime sit placeat voluptatum dolorem. Dolores quos rerum iusto.Beatae totam ab veritatis aliquid tenetur qui ut. Quia ut dolorum enim et. Exercitationem occaecati eum est ex qui harum aliquam.</p>

                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "50px" }} >
                    <Row>
                        <Col style={{ width: "45%", marginTop: "-30px", marginRight: "5%" }}>
                            <p className="common-text">ZIP CODE</p>
                        </Col>
                        <Col style={{ width: "45%", marginTop: "-30px", marginLeft: "5%" }}>

                        </Col>
                        <Col style={{ width: "45%", marginTop: "-30px", marginRight: "5%" }}>
                            <div className="item-dec-incr">
                                <p className="number-of-item">{numberOfProduct}</p>
                                <button style={{ background: "none", border: "none" }} className="increment" onClick={handalDecreemnt} disabled={numberOfProduct === 1 ? true : false}>-</button>
                                <button style={{ background: "none", border: "none" }} className="decrement" onClick={handalIncreemnt}>+</button>
                            </div>
                        </Col>

                    </Row>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "-30px", textAlign: "right" }}>

                    <p className="reco-style">SUB TOTAL</p>
                    <p className="price-style">$ {productDetails.price}</p>

                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "-10px", marginBottom: "10px" }} >
                    <div className="register-button">
                        ADD TO BASKET
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default Card;