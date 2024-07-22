import React from 'react';
import styled from "./reviewCard.module.scss"
import BasicRating from '../rating/Rating';

const ReviewCard = () => {
    return (
        <div className={styled.container}>
            <div className={styled.container_info}>
                <div className={styled.container_info_profile}>
                    <span></span>
                    <div>
                        <h3>Сайкал</h3>
                        <p>17 мая 2023, 20:46</p>
                    </div>
                </div>
                <div className={styled.container_info_rating}>
                    <BasicRating rating={5}/>
                </div>
            </div>
            <div className={styled.container_text}>
                <p>Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый. По сути отжим в ней это просто кружение в этом барабане для отдима.</p>
            </div>
            <div className={styled.container_complaint}>
                <a href="#">Пожаловаться на отзыв </a>
            </div>
        </div>
    );
};

export default ReviewCard;