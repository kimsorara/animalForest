import { useState } from "react";
import ListCard from "../style/ListCard";
import { AnimalInfo } from "../type/character";
import AnimalCard from "../style/AnimalCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Species = () => {
  const [open, setOpen] = useState<string>("");
  const [data, setData] = useState<AnimalInfo[] | []>([]);

  const animalList = [
    "alligator",
    "anteater",
    "bear",
    "bear cub",
    "bird",
    "bull",
    "cat",
    "cub",
    "chicken",
    "cow",
    "deer",
    "dog",
    "duck",
    "eagle",
    "elephant",
    "frog",
    "goat",
    "gorilla",
    "hamster",
    "hippo",
    "horse",
    "koala",
    "kangaroo",
    "lion",
    "monkey",
    "mouse",
    "octopus",
    "ostrich",
    "penguin",
    "pig",
    "rabbit",
    "rhino",
    "rhinoceros",
    "sheep",
    "squirrel",
    "tiger",
    "wolf",
  ];
  const backBtn = () => {
    setOpen((cur) => "");
  };

  return (
    <>
      <ul className={`list-box ${open}`}>
        {animalList.map((animal) => (
          <ListCard
            key={animal}
            name={animal}
            openFc={setOpen}
            dataFc={setData}
          ></ListCard>
        ))}
      </ul>
      {open === "open" && (
        <div className="animal-card-wrap">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="animal-back"
            onClick={backBtn}
          />
          <AnimalCard data={data} />
        </div>
      )}
    </>
  );
};

export default Species;
