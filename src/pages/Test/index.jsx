import { boy1, boy3, boy4, boy5, girl2, heart } from "assets/icons/";

import { QuestionContainer, Title, Text, Image, Wrapper } from "./styles/Question";

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
} from "./styles/CheckModal";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { setScore } from "context/profileSlice";

import { Container } from "./styles/";
import {
  DismissIconContainer,
  DismissIcon,
  ProgressBar,
  HeartIconContainer,
  HeartIcon,
  ProgressContainer,
} from "./styles/Progress";
import { useState } from "react";

import {
  OptionContainer,
  Option,
  List,
  Submit,
  Feedback,
  FeedbackWrapper,
} from "./styles/OptionList";
import { unstable_useViewTransitionState } from "react-router-dom";
import { flushSync } from "react-dom";

const list = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    answer: "Paris",
    icon: boy1,
  },
  {
    id: 2,
    question: "Who is CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
    answer: "Elon Musk",
    icon: boy3,
  },
  {
    id: 3,
    question: "The iPhone was created by which company?",
    options: ["Apple", "Intel", "Amazon", "Microsoft"],
    answer: "Apple",
    icon: boy4,
  },
  {
    id: 4,
    question: "How many Harry Potter books are there?",
    options: ["1", "4", "6", "7"],
    answer: "7",
    icon: boy5,
  },
  {
    id: 5,
    question: "Where is Palestine located on the map, and what countries surround it",
    options: ["Europe", "South America", "Middle East", "Africa"],
    answer: "Middle East",
    icon: girl2,
  },
];

export const Test = () => {
  const [state, setState] = useState({
    list,
    current: 0,
    wrong: [],
    end: false,
    score: 0,
    isCorrect: null,
  });

  const start = (action) => setState((prev) => ({ ...prev, list: action.payload }));

  const stop = () =>
    setState({
      list: list,
      current: 0,
      wrong: [],
      end: false,
      score: 0,
      isCorrect: null,
    });

  const next = () =>
    setState((prev) => {
      if (prev.current === prev.list.length - 1) return { ...prev, end: true };

      return { ...prev, current: prev.current + 1, isCorrect: null };
    });

  const check = (action) => {
    setState((prev) => {
      // const { current, list } = prev;
      const correctAnswer = prev.list[state.current].answer;
      if (action === correctAnswer) {
        return { ...prev, score: prev.score + 1, isCorrect: true };
      }

      return {
        ...prev,
        isCorrect: false,
        wrong: [...prev.wrong, prev.current],
      };
    });
  };

  const handleDismiss = () => {
    stop();
    navigate("/");
  };

  const options = list[state.current].options;
  const [selected, setSelected] = useState(null);

  const getStatus = () => {
    if (state.isCorrect === null && selected === null) return "init";
    if (selected !== null && state.isCorrect === null) return "selected";
    if (state.isCorrect === true) return "correct";
    if (state.isCorrect === false) return "error";
    // return null;
  };

  const submit = () => {
    if (state.isCorrect === null)
      return document.startViewTransition(() => flushSync(() => check(selected)));
    setSelected(null);
    return document.startViewTransition(() => flushSync(() => next()));
  };

  const navigate = useNavigate();

  const reward = Math.round((state.score / list.length) * 10) * 10;

  // useEffect(() => setScore(reward), []);

  const handleContinue = () => {
    stop();
    navigate("/");
  };

  const isTransitioning = unstable_useViewTransitionState("/test");

  return (
    <Container
      style={{
        viewTransitionName: isTransitioning ? "cta-button" : "",
      }}
    >
      {state.end ? (
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
                  {(state.score / list.length) * 100}%
                </ModalStatsValue>
              </ModalStatsItem>
            </ModalStatsList>
          </ModalMain>
          <ModalButton onClick={handleContinue}>Continue</ModalButton>
        </ModalContainer>
      ) : (
        <>
          <ProgressContainer>
            <DismissIconContainer onClick={handleDismiss}>
              <DismissIcon />
            </DismissIconContainer>

            <ProgressBar
              style={{ viewTransitionName: "progress" }}
              status={state.current / list.length}
            />
            <HeartIconContainer>
              <HeartIcon src={heart} /> {5 - state.wrong.length}
            </HeartIconContainer>
          </ProgressContainer>
          <QuestionContainer>
            <Title>Choose the correct option</Title>
            <Wrapper>
              <Image src={list[state.current]?.icon ?? girl2} alt="boy1" />
              <Text>{list[state.current].question}</Text>
            </Wrapper>
          </QuestionContainer>
          <OptionContainer>
            <List>
              {options.map((option, index) => (
                <Option
                  onClick={() => setSelected(option)}
                  selected={selected}
                  value={option}
                  key={index}
                >
                  {option}
                </Option>
              ))}
            </List>
            <FeedbackWrapper>
              <Feedback status={String(state.isCorrect)}>Correct</Feedback>
              <Submit status={getStatus()} onClick={submit}>
                {state.isCorrect === null ? "Check" : "Next"}
              </Submit>
            </FeedbackWrapper>
          </OptionContainer>
        </>
      )}
    </Container>
  );
};

export default Test;
