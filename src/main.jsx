import React, { useRef, useState } from "react";
import { flushSync } from "react-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import GlobalStyles from "styles/";
import { StyledEngineProvider } from "@mui/material/styles";
import store from "./context/";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { challenge, console, profile, notification, gift } from "assets/icons";
import { Container, Item, Icon, Active } from "./styled";
import { Quest, Notification, Profile } from "pages/";
import { CoursesRouter, ProfileRouter } from "./router";

const Wrapper = () => {
  const routes = [
    {
      id: 0,
      icon: gift,
      path: "quest",
      alt: "quest",
    },
    {
      id: 1,
      icon: challenge,
      path: "rank",
      alt: "challenge",
    },
    {
      id: 2,
      icon: console,
      path: "",
      alt: "console",
    },
    {
      id: 3,
      icon: profile,
      path: "profile",
      alt: "profile",
    },
    {
      id: 4,
      icon: notification,
      path: "notification",
      alt: "notification",
    },
  ];

  const [current, setCurrent] = useState(2);

  const ref = useRef(null);

  // useEffect(() => {
  //   ref.current.swiper.slideTo(current);
  // }, [current]);

  const handleSlideChange = (swiper) => {
    const activeRoute = routes[swiper.activeIndex].id;
    document.startViewTransition(() => flushSync(() => setCurrent(activeRoute)));
  };

  return (
    <>
      <Swiper
        ref={ref}
        initialSlide={current}
        modules={[Pagination]}
        onSlideChange={handleSlideChange}
      >
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

      <Container>
        {routes.map((item) => (
          <Item
            key={item.id}
            onClick={async () => {
              const temp = document.startViewTransition(() =>
                flushSync(() => {
                  setCurrent(item.id);
                })
              );
              await temp.finished;
              ref.current.swiper.slideTo(item.id);
            }}
          >
            <Icon src={item.icon} alt={item.alt} />
            {current === item.id && (
              <Active
                style={{
                  viewTransitionName: "marker",
                }}
              />
            )}
          </Item>
        ))}
      </Container>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <GlobalStyles />
      <Wrapper />
    </StyledEngineProvider>
  </Provider>
);
