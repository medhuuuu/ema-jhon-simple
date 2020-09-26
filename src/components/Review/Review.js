import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ItemsReview from '../ItemsReview/ItemsReview';
import HappyImage from'../../images/giphy.gif'
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();

    const handlePlaceOrder = () => {
        history.push('/shipment');
    }

    const removeProduct = (productKey) => {
        // console.log('remove cliked', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedItems = getDatabaseCart();
        const productKeys = Object.keys(savedItems);
        const counts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedItems[key];
            return product;
        });
        setCart(counts);
    }, [])

    let thankYou; 
    if(orderPlaced){
        thankYou = <img src={HappyImage} alt=""/>
    } 
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <ItemsReview product={pd} removeProduct={removeProduct} key={pd.key}></ItemsReview>)
                }
                {thankYou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="main-button"
                    onClick={handlePlaceOrder}> Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;