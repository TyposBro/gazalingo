import { useDispatch, useSelector } from "react-redux";

import { start, stop, next, check } from "context/testSlice";

import { celebrate, lightning } from "assets/icons/";
import {
  ModalContainer,
  ModalMain,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalImage,
  ModalStatsList,
  ModalStatsItem,
  ModalStatsTitle,
  ModalStatsValue,
  ModalStatsIcon,
  ModalTimeIcon,
  ModalCheckIcon,
  ModalButton,
} from "../styles/CheckModal";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { setScore } from "context/profileSlice";

const CheckModal = () => {
  const { questionList, currentQuestion, wrongQuestionList, score } = useSelector(
    (state) => state.test
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reward = Math.round((score / questionList.length) * 10) * 10;

  useEffect(() => {
    dispatch(setScore(reward));
  }, []);

  const handleContinue = () => {
    dispatch(stop());
    navigate("/");
  };

  return (
    <ModalContainer>
      <ModalMain>
        <ModalImage src={celebrate} />
        <ModalHeader>
          <ModalTitle>Good job</ModalTitle>
          <ModalDescription>You scored higher than 97% of students!</ModalDescription>
        </ModalHeader>
        <ModalStatsList>
          <ModalStatsItem color="#feca00">
            <ModalStatsTitle>Total XP</ModalStatsTitle>
            <ModalStatsValue color="#feca00">
              <ModalStatsIcon src={lightning} />
              {reward}
            </ModalStatsValue>
          </ModalStatsItem>
          <ModalStatsItem color="#49c0f8">
            <ModalStatsTitle>Quick</ModalStatsTitle>
            <ModalStatsValue color="#49c0f8">
              <ModalTimeIcon />
              03:08
            </ModalStatsValue>
          </ModalStatsItem>
          <ModalStatsItem color="#91d436">
            <ModalStatsTitle>Good</ModalStatsTitle>
            <ModalStatsValue color="#91d436">
              <ModalCheckIcon />
              {(score / questionList.length) * 100}%
            </ModalStatsValue>
          </ModalStatsItem>
        </ModalStatsList>
      </ModalMain>
      <ModalButton onClick={handleContinue}>Continue</ModalButton>
    </ModalContainer>
  );
};

export default CheckModal;
