import React, { useState, useEffect } from "react";
import { Container, Speed, Wpm, Span } from "./Timer.style";

export default function Timer({ startCounter, correctWords }) {
  const [time, setTime] = useState(0);

  const [intervalId, setIntervalId] = useState(undefined);

  useEffect(() => {
    if (startCounter) {
      const id = setInterval(() => {
        setTime((oldTime) => oldTime + 1);
      }, 1000);

      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startCounter]);

  const min = time / 60;
  return (
    <Container>
      <Speed>
        Time: <Span>{time}</Span>
      </Speed>
      <Wpm>
        WPM: <Span>{(correctWords / min || 0).toFixed(2)}</Span>
      </Wpm>
    </Container>
  );
}
