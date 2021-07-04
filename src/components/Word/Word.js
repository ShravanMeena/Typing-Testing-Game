import { Correct, InCorrect, Active, Text } from "./Word.style";
export default function Word(props) {
  const { text, active, correct } = props;
  if (correct === true) {
    return <Correct>{text} </Correct>;
  }

  if (correct === false) {
    return <InCorrect>{text} </InCorrect>;
  }
  if (active) {
    return <Active>{text} </Active>;
  }
  return <Text>{text} </Text>;
}
