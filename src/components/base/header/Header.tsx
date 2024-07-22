import React from 'react';
import styled from "./header.module.scss"
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile.svg"
import { ReactComponent as BasketIcon } from "../../../assets/icons/basket.svg"
import InputSearch from '../../../ui/input-search/InputSearch';

const Header = () => {
    return (
        <header className={styled.container}>
            <div className={styled.wrapper}>
                <div className={styled.logo}>
                    <Logo />
                </div>
                <div className={styled.search}>
                    <InputSearch width='700px' />
                </div>
                <div className={styled.navigation}>
                    <div className={styled.navigation_item}>
                        <ProfileIcon />
                        <p>Войти</p>
                    </div>
                    <div className={styled.navigation_item}>
                        <BasketIcon className={styled.navigation_item_icon } />
                        <p>Корзина</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;