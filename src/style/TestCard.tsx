import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import answers from "../data/testList.json";
type TestProps = {
  list: string[];
  setAnswerList: React.Dispatch<React.SetStateAction<number[]>>;
  answerList: number[];
  idx: number;
};

const TestCard = ({ list, setAnswerList, answerList, idx }: TestProps) => {
  const seletCheckbox = useCallback(
    (num: number) => {
      const newAnswer = [...answerList];
      newAnswer[idx] = newAnswer[idx] === num ? 0 : num; // 값 토글
      setAnswerList(newAnswer);
    },
    [answerList, setAnswerList]
  );
  const navigater = useNavigate();
  let status = answerList.every((el) => el > 0);
  const submitHandler = () => {
    const info = answers.answers.filter((item) =>
      item.answer.includes(answerList.join(""))
    )[0];
    navigater("/test-result", { state: { info } });
  };
  return (
    <div className="test-card">
      {list.map((item, index) => (
        <div key={index === 0 ? index : item}>
          {index === 0 ? (
            <div className="test-title">{item}</div>
          ) : (
            <div className="test-body">
              <input
                id={item}
                type="checkbox"
                checked={answerList[idx] === index}
                onChange={() => seletCheckbox(index)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          )}
        </div>
      ))}
      {status && <button onClick={submitHandler}>제출하기</button>}
    </div>
  );
};

export default TestCard;
