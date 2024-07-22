import React, { FC } from 'react';
import styled from "./productinfo.module.scss"
import { ReactComponent as MarketIcon } from "../../assets/icons/market.svg"
import { ReactComponent as StartIcon } from "../../assets/icons/star.svg"
import PaymentBlog from '../payment-blog/PaymentBlog';
import SwiperUI from '../../ui/swiper/Swiper';

const ProductInfo:FC = () => {
    return (
        <section className={styled.container}>
            <div className={styled.container_image}>
                <SwiperUI/>
            </div>
            <div className={styled.container_info}>
                <h2>Стиральная машина Atlant на 7 кг</h2>
                <div className={styled.container_info_nameMarket}>
                    <MarketIcon />
                    <p>Название магазина</p>
                </div>
                <p className={styled.container_info_brand}>Бренд</p>
                <div className={styled.container_info_rating}>
                    <div className={styled.container_info_rating_line}>
                        <StartIcon />
                        <p>4.9</p>
                    </div>
                    <span>60 отзывов</span>
                </div>
                <div className={styled.container_info_description}>
                    <h3>Описание</h3>
                    <p>Промышленная швейная машина «Jack JK-H2» выполнена с увеличенным челноком и двойным транспортом ткани. Ось челнока расположена горизонтально. Двойной механизм подачи ткани позволяет предотвратить посадку материала.
                        Модель явлется усовершенствованным вариантом машины Jack JK6380BCQ но имеет ряд доработок: Латунные втулки на механизме продвижения.</p>
                    <a href="#">Смотреть характеристики</a>
                </div>
            </div>

            <div className={styled.container_payment}>
                <PaymentBlog />
            </div>

        </section>
    );
};

export default ProductInfo;