import React from "react";
import "./feedbacks.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
    {
        avatar: AVTR1,
        name: "Tina Snow",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere officia rem, ex maxime eius dolores ipsa impedit non! Sapiente porro aliquid modi consequatur voluptatibus impedit ad quas culpa suscipit?"
    },
    {
        avatar: AVTR2,
        name: "Julia Johns",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere officia rem, ex maxime eius dolores ipsa impedit non! Sapiente porro aliquid modi consequatur voluptatibus impedit ad quas culpa suscipit?"
    },
    {
        avatar: AVTR3,
        name: "Tina Snow",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere officia rem, ex maxime eius dolores ipsa impedit non! Sapiente porro aliquid modi consequatur voluptatibus impedit ad quas culpa suscipit?"
    },
    {
        avatar: AVTR4,
        name: "Alex Snow",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere officia rem, ex maxime eius dolores ipsa impedit non! Sapiente porro aliquid modi consequatur voluptatibus impedit ad quas culpa suscipit?"
    },

]



const Feedbacks = () => {
    return (
        <section id="feedbacks">
            <h5>Review From Clients</h5>
            <h2>Feedbacks</h2>
            <Swiper className="container feedbacks__container" 
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                         return (
                            <SwiperSlide key={index} className="feedback">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className="client__name">{name} </h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                         )
                    })
                }



            </Swiper>
        </section>
    );
};

export default Feedbacks;
