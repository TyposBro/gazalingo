import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { start, stop, next, check } from "context/testSlice";

import {
  ProgressContainer,
  ProgressBar,
  HeartIcon,
  DismissIcon,
  HeartIconContainer,
  DismissIconContainer,
} from "../styles/Progress";

import { heart } from "assets/icons/";

const Progress = () => {
  const { questionList, currentQuestion, wrongQuestionList } = useSelector((state) => state.test);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDismiss = () => {
    dispatch(stop());
    navigate("/");
  };

  return (
    <ProgressContainer>
      <DismissIconContainer onClick={handleDismiss}>
        <DismissIcon />
      </DismissIconContainer>

      <ProgressBar status={currentQuestion / questionList.length} />
      <HeartIconContainer>
        <HeartIcon src={heart} /> {5 - wrongQuestionList.length}
      </HeartIconContainer>
    </ProgressContainer>
  );
};

export default Progress;
