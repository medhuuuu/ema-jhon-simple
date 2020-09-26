import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const cartTotal = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);
    const total = Math.floor(cartTotal);
    let shipping;
    if (total <= 15) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = Math.ceil(total * (25 / 100));
    }

    const tax = (total / 10).toFixed(2);

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Odered: {cart.length}</p>
            <p>Items Price: {total}</p>
            <p>Shipping Price: {shipping}</p>
            <p>VAT: {tax}</p>
            <p>Total Price: {total + shipping + Number(tax)}</p>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;