import React from 'react';
// in this file all i had to do was add + props.additionaPrice so that it should update the price of the vehicle
const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price + props.additionalPrice}</p>
    </>
  );
};

export default Header;
