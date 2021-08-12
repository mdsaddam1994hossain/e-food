import React from 'react';
import './CartAndBusket.css'
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom'
import useGlobal  from '../../../store'


const Busket = (props) => {
    const [globalState, globalActions] = useGlobal();

    console.log(globalState.total,'total')

    return (
        <div className="common-top-margin">

            <Row>
                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <p className="basket">BASKET</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ flexGrow: "2" }}>
                        <img src='./image/egg.png' width="80px" height="80px" />
                    </div>
                    <div style={{ flexGrow: "10", marginTop: "2px" }}>
                        <p className="name-style"> Egg Salad</p>
                        <p className="pric-style">$ 10.00</p>
                    </div>
                    <div style={{ flexGrow: "4", textAlign: "right", marginTop: "2px" }}>
                        <p>  <img src="./image/deleteIcon.png" alt="erron" width="22px" height="22px" /> </p>
                        <p className="amount"> 2 + </p>
                    </div>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ flexGrow: "2" }}>
                        <img src='./image/fast.png' width="80px" height="80px" />
                    </div>
                    <div style={{ flexGrow: "10", marginTop: "2px" }}>
                        <p className="name-style"> Grilled Salmon</p>
                        <p className="pric-style">$ 45.00</p>
                    </div>
                    <div style={{ flexGrow: "4", textAlign: "right", marginTop: "2px" }}>
                        <p>  <img src="./image/deleteIcon.png" alt="erron" width="22px" height="22px" /> </p>
                        <p className="amount"> 3 + </p>
                    </div>
                </Col>


                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ position: "relative", marginTop: "200px", }} >
                    <p className="total-text">TOTAL</p>
                    <p className="total">$ 65.00</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ position: "relative", marginTop: "-40px" }} >
                   
                        <div className="register-button" onClick={()=> props.setDisplay(false)} >
                            proceed to checkout
                        </div>
                    
                </Col>
            </Row>
        </div>
    );
};

export default Busket;