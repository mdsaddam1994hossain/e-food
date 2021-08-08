import React from 'react';
import './Search.css'
import { Row, Col, Input } from 'antd';


const Search = () => {
    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{}}>
                    <p className="common-text">SEARCH</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "-35px" }} >
                    <div className="common-input">
                        <Input placeholder="Cuisine/Dish" style={{ width: "100%", height: "40px", borderRadius: "20px", background: "none", paddingLeft: "20px", fontFamily: "Poppins", color: "#A3A3A3", fontSize: "14px", lineHeight: "21px" }} />
                    </div>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "30px", display: "flex", justifyContent: "space-between" }} >
                    <p className="catagoris">CATEGORIES</p>
                    <p className="view-all">VIEW ALL</p>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }} >
                    <div className="break-style">
                        <p>Breakfast</p>
                    </div>
                    <div className="fast-style">
                        <p>Fastfood</p>
                    </div>
                    <div className="lun-style">
                        <p>Lunch</p>
                    </div>
                </Col>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "10px", display: "flex" }} >
                    <div className="sou-india">
                        <p className="">South Indian</p>
                    </div>
                    <div className="nor-india">
                        <p className="">North Indian</p>
                    </div>

                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }} >
                    <div className="dinner">
                        <p>Dinner</p>
                    </div>
                    <div className="dinner">
                        <p>Pure Veg</p>
                    </div>
                    <div className="dinner">
                        <p>Non Veg</p>
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "30px", display: "flex", justifyContent: "space-between" }} >
                    <p className="catagoris">RECENTS</p>
                    <p className="view-all">CLEAR ALL</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "10px", display: "flex" }} >
                    <div style={{ width: "15%" }}>
                        <img src="./image/vector3.png" alt="error" />
                    </div>
                    <div style={{ width: "65%",color:"#A3A3A3",fontFamily:"Poppins",fontWeight:"500",fontSize:"14px",lineHeight:"21px" }}>
                        <p>Biryani</p>
                    </div>
                    <div style={{ width: "20%", textAlign: "right" }} >
                        <img src="./image/cross.png" alt="error" />
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ marginTop: "10px", display: "flex" }} >
                    <div style={{ width: "15%" }}>
                        <img src="./image/vector3.png" alt="error" />
                    </div>
                    <div style={{ width: "65%",color:"#A3A3A3",fontFamily:"Poppins",fontWeight:"500",fontSize:"14px",lineHeight:"21px" }}>
                        <p>Chiken Tikka</p>
                    </div>
                    <div style={{ width: "20%", textAlign: "right" }} >
                        <img src="./image/cross.png" alt="error" />
                    </div>
                </Col>
               

            </Row>

        </div>
    );
};

export default Search;