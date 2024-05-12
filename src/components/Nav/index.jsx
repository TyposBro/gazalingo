import { Container, Item, Icon } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setRoute } from "context/routerSlice";
import { flushSync } from "react-dom";
import { useRef } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { routes, current } = useSelector((state) => state.router);

  const check = (id) => {
    if (id > current.id) return "nav-right";
    if (id < current.id) return "nav-left";
    return "nav-active";
  };

  const animate = (id) => {
    const { current } = ref;

    current.children[id].style.viewTransitionName = check(id);
  };

  return (
    <Container ref={ref}>
      {routes.map((item) => (
        <Item
          key={item.id}
          onClick={() => dispatch(setRoute({ id: item.id }))}
          active={item.id === current.id ? "active" : "inactive"}
        >
          <Icon src={item.icon} alt={item.alt} />
        </Item>
      ))}
    </Container>
  );
};

export default NavBar;
