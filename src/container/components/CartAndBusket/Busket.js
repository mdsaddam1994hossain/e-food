import React, { useEffect, useState } from 'react';
import './CartAndBusket.css'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import { useGlobalState } from '../../../store'







const Busket = (props) => {

    const [total, setTotal] = useGlobalState('total');
    const [basketItems, setBasketItems] = useGlobalState('basketItems');
    const [displayIncButton, setDisplayIncButton] = useState(false);
    // var [numberOfCard, setNumberOfCard] = useGlobalState('numberOfCard');

    let totals = 0;

    basketItems.forEach(element => {
        totals += element.subTotalPrice
    });


    //    console.log(numberOfCard,"card Item")

    const addingToBasket = () => {
        setTotal(totals);

    }



    const buttonDisplayHandaler = (id) => {

        setDisplayIncButton(!displayIncButton)

    }


    // quantity increment and deccrement functions


    const onAdd = (product) => {

        const exist = basketItems.find((x) => x.id === product.id);

        if (exist) {
            setBasketItems(
                basketItems.map((x) =>
                    x.id === product.id ? { ...exist, quantity: exist.quantity + 1, subTotalPrice: exist.subTotalPrice + product.perUnitPrice } : x
                )
            );
        }
    }
    
    const onRemove = (product) => {

        const exist = basketItems.find((x) => x.id === product.id);

        if (exist) {
            setBasketItems(
                basketItems.map((x) =>
                    x.id === product.id ? { ...exist, quantity: exist.quantity - 1, subTotalPrice: exist.subTotalPrice - product.perUnitPrice } : x
                )
            );
        }
    }




    return (
        <div className="common-top-margin">

            <Row>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }}>
                    <p className="basket">BASKET</p>
                </Col>

                {basketItems.map((item, index) => {
                    return (
                        <Col key={index} xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ flexGrow: "2" }}>
                                <img src={item.imgs} width="80px" height="80px" />
                            </div>
                            <div style={{ flexGrow: "10", marginTop: "2px" }}>
                                <p className="name-style"> {item.name}</p>
                                <p className="pric-style">$ {item.subTotalPrice}.00</p>
                            </div>
                            <div style={{ flexGrow: "4", textAlign: "right", marginTop: "2px" }}>
                                <p>  <img src="./image/deleteIcon.png" alt="erron" width="22px" height="22px" /> </p>
                                <div className="amount">  {item.quantity}<img src="./image/dropdownIcon.png" alt="erron" style={{ marginLeft: "10px" }} onClick={() => buttonDisplayHandaler(item.id)} />
                                    {displayIncButton ? <div>
                                        <button onClick={() => onAdd(item)}> + </button>
                                        <button onClick={() => onRemove(item)}> -</button>
                                    </div> : ''}
                                </div>

                            </div>
                        </Col>
                    )
                })}

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{}} >


                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ position: "relative", marginTop: "200px", }} >
                    <p className="total-text">TOTAL</p>
                    <p className="total">$ {totals}.00</p>
                </Col>

                <Col xs={{ offset: 2, span: 20 }} sm={{ offset: 4, span: 16 }} md={{ offset: 6, span: 12 }} lg={{ offset: 8, span: 8 }} style={{ position: "relative", marginTop: "-40px" }} >

                    <Link to='/checkout'>
                        <div className="register-button" onClick={() => setTotal(totals)}>
                            proceed to checkout
                        </div>
                    </Link>
                </Col>

            </Row>
        </div>
    );
};

export default Busket;