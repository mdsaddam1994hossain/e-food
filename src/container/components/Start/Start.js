import React from 'react';
import { Row, Col } from 'antd'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div  >

            <Row className="e-food">
                <Col >
                    <div >
                    <Link to='/page2'> 
                      <p className="food"> FOOD-<psam style={{ color: "#2FDBBC" }}>E</psam> </p>
                    </Link> 
                    </div>
                </Col>
            </Row>
            
           <div className="botton">
               <div className="rkd">RKFD</div>
               <div className="underline"></div>
           </div>

        </div>
    );
};

export default Home;