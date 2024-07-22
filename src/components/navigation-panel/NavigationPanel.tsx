import React from 'react';
import styled from "./navigation.module.scss"
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';

const NavigationPanel = () => {
    return (
        <nav className={styled.container}>
            <div className={styled.container_item}>
                <BurgerIcon />
                <p>Все категории</p>
            </div>
            <div className={styled.container_item}>
                <p>Стать продавцом</p>
            </div>
            <div className={styled.container_item}>
                <p>О нас</p>
            </div>
            <div className={styled.container_item}>
                <p>Курьерам</p>
            </div>
            <div className={styled.container_item}>
                <p>Контакты</p>
            </div>
            <div className={styled.container_item}>
                <p>Доставка</p>
            </div>
        </nav>
    );
};

export default NavigationPanel;