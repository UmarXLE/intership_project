import React, { FC } from 'react';
import styled from "./paymentblog.module.scss"
import Button from '../../ui/button/Button';

const PaymentBlog:FC = () => {
    return (
        <div className={styled.container}>
            <div className={styled.container_price}>
                <p>32500 сом</p>
                <span>32500 сом</span>
            </div>
            <div className={styled.container_buttons}>
                <Button customVariant='blue_button'>Купить сейчас</Button>
                <Button customVariant='second_blue_button'>Оформить в кредит</Button>
            </div>
        </div>
    );
};

export default PaymentBlog;