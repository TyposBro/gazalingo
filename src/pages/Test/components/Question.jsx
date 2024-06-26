import { useDispatch, useSelector } from "react-redux";

import { start, stop, next, check } from "context/testSlice";
import { girl2 } from "assets/icons/";

import { QuestionContainer, Title, Text, Image, Wrapper } from "../styles/Question";

const Question = () => {
  const { questionList, currentQuestion, wrongQuestionList } = useSelector((state) => state.test);
  const dispatch = useDispatch();

  const { question } = questionList[currentQuestion];

  return (
    <QuestionContainer>
      <Title>Choose the correct option</Title>
      <Wrapper>
        <Image src={questionList[currentQuestion]?.icon ?? girl2} alt="boy1" />
        <Text>{question}</Text>
      </Wrapper>
    </QuestionContainer>
  );
};

export default Question;
