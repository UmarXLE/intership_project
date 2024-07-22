import React from 'react';
import styled from "./footer.module.scss"
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg"
import { ReactComponent as InstagramIcon } from "../../../assets/icons/instagram.svg"
import { ReactComponent as WhatsappIcon } from "../../../assets/icons/whatsapp.svg"

const Footer = () => {
    return (
        <footer className={styled.container}>
            <div className={styled.container_wrapper}>
                <div className={styled.container_item}>
                    <Logo />
                    <div className={styled.container_item_icons}>
                        <InstagramIcon />
                        <WhatsappIcon />
                    </div>
                </div>

                <div className={styled.container_item}>
                    <h3>Компания</h3>
                    <p>О нас</p>
                    <p>Способы оплаты</p>
                    <p>Доставка</p>
                    <p>Политика конфиденциальности</p>
                    <p>Персональные данные</p>
                </div>

                <div className={styled.container_item}>
                    <h3>Партнерам</h3>
                    <p>Продавайте на UNO</p>
                    <p>Курьерам</p>
                </div>

                <div className={styled.container_item}>
                    <h3>Контакты</h3>
                    <p>unokg@gmail.com</p>
                    <p>+996 700 000 000</p>
                    <p>+996 500 000 000</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;