import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Rank, Quest, Notification, Profile } from "pages/";

import "swiper/css";
import "swiper/css/pagination";
import { useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRoute } from "context/routerSlice";
import { CoursesRouter, ProfileRouter } from "../router";

export const SwiperComponent = () => {
  const ref = useRef(null);
  const { routes, current } = useSelector((state) => state.router);
  const dispatch = useDispatch();

  useEffect(() => {
    ref.current.swiper.slideTo(current.id);
  }, [current]);

  const handleSlideChange = (swiper) => {
    const activeRoute = routes[swiper.activeIndex];
    document.startViewTransition(() => flushSync(() => dispatch(setRoute(activeRoute))));
  };

  return (
    <Swiper ref={ref} initialSlide={2} modules={[Pagination]} onSlideChange={handleSlideChange}>
      <SwiperSlide>
        <Quest />
      </SwiperSlide>
      <SwiperSlide>
        <ProfileRouter />
      </SwiperSlide>
      <SwiperSlide>
        <CoursesRouter />
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
