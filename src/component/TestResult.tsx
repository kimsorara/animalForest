import React from "react";
import { useLocation } from "react-router-dom";
import "../style/card.css";
const TestResult = () => {
  const {
    state: { info },
  } = useLocation();
  const { comment, image_url, personality_trait, species } = info;
  console.log(personality_trait, comment, species, image_url);
  return (
    <div className="card">
      {info && (
        <>
          <div className="card_img_wrap">
            <img src={image_url} alt={species} />
          </div>
          <div className="info-wrap">
            <div>{personality_trait}</div>
            <div>{comment}</div>
            <div>{species}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default TestResult;
