import React from 'react';
import styled from "./reviews.module.scss"
import ReviewCard from '../../ui/review-card/ReviewCard';
import Button from '../../ui/button/Button';
import BasicRating from '../../ui/rating/Rating';
import { ReactComponent as ActionIcon } from "../../assets/icons/action.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Reviews = () => {
    return (
        <section className={styled.container}>
            <h2 className={styled.container_title}>Отзывы</h2>
            <div className={styled.container_info}>
                <div className={styled.container_info_rating}>
                    <h2>4.9</h2>
                    <BasicRating rating={4.9} />
                    <p>60 отзывов</p>
                </div>
                <div className={styled.container_info_action}>
                    <ActionIcon />
                    <p>Написать отзыв</p>
                </div>
            </div>
            <div className={styled.container_cards}>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={15}
                    className="mySwiper">
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Button width='25%' customVariant='second_blue_button'>Смотреть все отзывы</Button>
        </section>
    );
};

export default Reviews;