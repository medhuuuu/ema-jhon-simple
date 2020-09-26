import React from 'react';

const ItemsReview = (props) => {
    // console.log(props);
    const { name, quantity, key, price } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '100px'
    };
    return (
        <div style={reviewItemStyle}>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <button
                className="main-button"
                onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ItemsReview;