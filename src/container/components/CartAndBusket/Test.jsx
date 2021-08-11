import React from 'react';

const Test = (props) => {
    
  const productDetails = props.location.state || {};
    
    return (
        <div>

       {/* <span>{productDetails.id}</span>
      <span>{productDetails.name}</span>
      <span>{productDetails.price}</span>
      <img src={productDetails.img} /> */}
            
        </div>
    );
};

export default Test;