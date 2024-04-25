import { useLocation, useNavigate } from "react-router-dom";

import { Container, Item, Icon } from "./styled";
import { challenge, console, profile, notification, gift } from "assets/icons";
import { useDispatch } from "react-redux";
import { setCurrent } from "context/profileSlice";

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
    icon: console,
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


const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {

    dispatch(setCurrent({ id }));
    navigate(`/profile/${id}`);
  };

  const checkLocation = (path) => {
    return location.pathname === `/${path}` ? "active" : "inactive";
  };

  return (
    <Container>
      <Item unstable_viewTransition active={checkLocation("quest")} to="/quest">
        <Icon src={gift} alt="quest" />
      </Item>
      <Item unstable_viewTransition active={checkLocation("rank")} to="/rank">
        <Icon src={challenge} alt="challenge" />
      </Item>
      <Item unstable_viewTransition active={checkLocation("")} to="/">
        <Icon src={console} alt="console" />
      </Item>
      <Item unstable_viewTransition active={checkLocation("profile")} to="/profile" onClick={() => handleClick(3)} >
        <Icon src={profile} alt="profile" />
      </Item>
      <Item unstable_viewTransition active={checkLocation("notification")} to="/notification">
        <Icon src={notification} alt="notification" />
      </Item>
    </Container>
  );
};

export default NavBar;
