import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { key } = useParams();
    const pdArray = fakeData.find(pd => pd.key === key);
    // console.log(pdArray);
    return (
        <div>
            <h1> {key} detail comming soon</h1>
            <Product showAddToCart={false} product={pdArray}></Product>
        </div>
    );
};

export default ProductDetail;