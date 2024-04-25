import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "context/profileSlice";
import { Container, Wrapper, Avatar, Icon, Text, Span, Number } from "../styles/Item";
import { first, second, third } from "assets/icons/";
import { useNavigate } from "react-router";
import { unstable_useViewTransitionState } from "react-router-dom";

const Item = ({ name, id, score, rank }) => {
  const { account } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = `/profile`;
  const isTransitioning = unstable_useViewTransitionState(url);

  const src = `https://api.dicebear.com/7.x/personas/svg?seed=${name}&&backgroundColor=b6e3f4,c0aede,d1d4f9`;

  const getAvatar = () => {
    switch (parseInt(rank)) {
      case 0:
        return <Icon src={first} />;
      case 1:
        return <Icon src={second} />;
      case 2:
        return <Icon src={third} />;
      default:
        return <Number>{parseInt(rank) + 1} </Number>;
    }
  };

  const handleClick = () => {
    dispatch(setCurrent({ id, name, score }));
    navigate(`/profile/${id}`);
  };

  return (
    <Container onClick={handleClick} status={account.id === id && "active"}>
      <Wrapper>{getAvatar()}</Wrapper>
      <Avatar src={src} style={{
        viewTransitionName: isTransitioning ? "avatar" : "",
      }} />
      <Text style={{
        viewTransitionName: isTransitioning ? "name" : "",
      }} >{name}</Text>
      <Span style={{
        viewTransitionName: isTransitioning ? "score" : "",
      }} >{score} XP</Span>
    </Container>
  );
};

export default Item;
