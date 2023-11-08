import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AnimalInfo } from "../type/character";
import axios from "axios";
import { useState } from "react";
type NameProps = {
  name: string;
  openFc: React.Dispatch<React.SetStateAction<string>>;
  dataFc: React.Dispatch<React.SetStateAction<AnimalInfo[]> | []>;
};
const ListCard = ({ name, openFc, dataFc }: NameProps) => {
  const [throttle, setThrottle] = useState<boolean>(false);

  const getAnimal = async () => {
    if (throttle) {
      return console.log("로딩중");
    } else {
      setThrottle(true);
      const result = await axios.get(
        `https://api.nookipedia.com/villagers?species=${name}`,
        {
          headers: {
            "X-API-KEY": process.env.REACT_APP_API_KEY,
            "Accept-Version": "1.0.0",
          },
        }
      );
      openFc("open");
      if (!result) throw new Error("값이 불러올 수 없습니다");
      dataFc(result.data);
      setTimeout(() => {
        setThrottle(false);
      }, 1500);
    }
  };
  return (
    <li className="list-card">
      <div>{name}</div>
      <FontAwesomeIcon onClick={getAnimal} icon={faChevronRight} />
    </li>
  );
};

export default ListCard;
