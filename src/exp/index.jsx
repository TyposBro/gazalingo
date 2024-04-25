import { useNavigate, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { Header, Nav } from "components/";
import { Test, Menu, Rank, Quest, Notification, Profile } from "pages/";
import { Container, Item, Icon } from "components/Nav/styled";
import { challenge, console as Console, profile, notification, gift } from "assets/icons";

import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef } from 'react';
import { render } from 'react-dom';



const nav = [
    {
        id: 1,
        icon: gift,
        path: "quest",
        alt: "quest",
    },
    {
        id: 2,
        icon: challenge,
        path: "rank",
        alt: "challenge",
    },
    {
        id: 3,
        icon: Console,
        path: "",
        alt: "console",
    },
    {
        id: 4,
        icon: profile,
        path: "profile",
        alt: "profile",
    },
    {
        id: 5,
        icon: notification,
        path: "notification",
        alt: "notification",
    }
]




export const Courses = () => {
    return (
        <>
            <Header />
            <Menu />
        </>
    );
};



export const SwiperComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const ref = useRef(null);


    useEffect(() => {
        const currentSlide = nav.findIndex(item => item.path === location.pathname.slice(1));
        if (currentSlide !== -1 && ref.current) {
            ref.current.swiper.slideTo(currentSlide);
        }
    }, [location.pathname]);

    const handleSlideChange = (swiper) => {
        // Get the index of the active slide
        const activeSlideIndex = swiper.activeIndex;

        // Navigate to the corresponding route based on the active slide index
        switch (activeSlideIndex) {
            case 0:
                navigate('/quest');
                break;
            case 1:
                navigate('/rank');
                break;
            case 2:
                navigate('/');
                break;
            case 3:
                navigate('/profile');
                break;
            case 4:
                navigate('/notification');
                break;
            // Add more cases for other slide indices and routes
            default:
                break;
        }
    };

    return (
        <Swiper ref={ref} initialSlide={2} modules={[Pagination]} onSlideChange={handleSlideChange}>
            <SwiperSlide>
                <Quest />
            </SwiperSlide>
            <SwiperSlide>
                <Rank />
            </SwiperSlide>
            <SwiperSlide>
                <Courses />
            </SwiperSlide>
            <SwiperSlide>
                <Profile />
            </SwiperSlide>
            <SwiperSlide>
                <Notification />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperComponent;