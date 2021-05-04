import ProductsSummary from './ProductsSummary';
import AvailableProducts from './AvailableProducts';
import React from 'react';

const Products = () => {
    return (
        <React.Fragment>
            <ProductsSummary />
            <AvailableProducts />
        </ React.Fragment>
    )
}

export default Products;