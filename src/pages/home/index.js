import React, { useState, useRef } from "react";
import {
  Container,
  Main,
  Heading,
  Text,
  Input,
  Congratulations,
} from "./Home.style";
import Timer from "../../components/Timer/Timer";
import Word from "../../components/Word/Word";
import { getData } from "../../data";

export default function Home() {
  const [userText, setUserText] = useState("");
  const [result, setResult] = useState(false);
  const data = useRef(getData());

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const [correctWordArray, setCorrectWordArray] = useState([]);

  function handleChange(value) {
    setStartCounter(true);

    if (value.endsWith(" ")) {
      if (activeWordIndex === data.current.length) {
        setUserText("");
        setResult(true);
        setStartCounter(false);
        return;
      }

      setActiveWordIndex((index) => index + 1);
      setUserText("");

      setCorrectWordArray((_data) => {
        const word = value.trim();
        const newResult = [..._data];
        newResult[activeWordIndex] = word === data.current[activeWordIndex];
        return newResult;
      });
    } else {
      setUserText(value);
    }
  }

  return (
    <Container>
      <Main>
        <Heading>Typing Speed Task</Heading>
        <Timer
          startCounter={startCounter}
          correctWords={correctWordArray.filter(Boolean).length}
        />
        {result ? null : (
          <Text>
            {data.current.map((word, index) => {
              return (
                <Word
                  text={word}
                  active={index === activeWordIndex}
                  correct={correctWordArray[index]}
                />
              );
            })}
          </Text>
        )}
        {result ? (
          <Congratulations>Congrats Buddy</Congratulations>
        ) : (
          <Input
            type='text'
            value={userText}
            onChange={(e) => handleChange(e.target.value)}
            placeholder='Start typing...'
          />
        )}
      </Main>
    </Container>
  );
}
