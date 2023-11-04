import data from "../data/testList.json";
import TestCard from "../style/TestCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Psychological = () => {
  const leng = data.testList.length;
  const [answerList, setAnswerList] = useState<number[]>(
    Array.from({ length: leng }, () => 0)
  );

  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {data.testList.map((item, idx) => (
        <SwiperSlide>
          <TestCard
            list={item}
            key={idx}
            setAnswerList={setAnswerList}
            answerList={answerList}
            idx={idx}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Psychological;
