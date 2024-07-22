import React from 'react';
import styled from "./products.module.scss"
import ProductCard from '../../ui/product-card/ProductCard';

const Products: React.FC = () => {
    return (
        <div className={styled.container}>
            <h2 className={styled.container_title}>Похожие товары</h2>
            <div className={styled.container_products}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Products;