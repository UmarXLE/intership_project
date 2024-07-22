import React from 'react';
import styled from "./productCard.module.scss"
import Button from '../button/Button';
import productIcon from "../../assets/images/product.png"
import BasicRating from '../rating/Rating';

const ProductCard: React.FC = () => {
    return (
        <div className={styled.container}>
            <div className={styled.container_images}>
                <img src={productIcon} alt="product-image" />
            </div>
            <div className={styled.container_info}>
                <h4>Jack JK - F4</h4>
                <p>Швейная машина</p>
                <div className={styled.container_info_rating}>
                    <BasicRating rating={0} />
                    <p>0 отзывов</p>
                </div>
                <h3>50 900 сом</h3>
                <Button>Купить</Button>
            </div>
        </div>
    );
};

export default ProductCard;