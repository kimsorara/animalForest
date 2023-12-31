import { AnimalInfo } from "../type/character";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarsStrokeUp } from "@fortawesome/free-solid-svg-icons";
import { faVenus } from "@fortawesome/free-solid-svg-icons";
import { monthConvert } from "../utill/monthConvert";
import QRCode from "react-qr-code";
import { useState, useRef, useEffect } from "react";
import LoadingSpiner from "../style/LoadingSpiner";
type Info = {
  data: AnimalInfo[];
};

const AnimalCard = ({ data }: Info) => {
  const [showQR, setShowQR] = useState<number>(-1);

  const convertClass = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    setShowQR((pre) => index);
  };

  const imgRef = useRef<HTMLImageElement>(null);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  useEffect(() => {
    const imgLoadHandler = () => {
      setIsImgLoaded(true);
    };

    if (imgRef.current && !isImgLoaded) {
      imgRef.current.addEventListener("load", imgLoadHandler);
    }

    return () => {
      if (imgRef.current) {
        imgRef.current.removeEventListener("load", imgLoadHandler);
      }
    };
  }, [imgRef, isImgLoaded]);

  return (
    <div className="animal-card">
      {!isImgLoaded && <LoadingSpiner />}
      {data.map((item, index) => (
        <div className="animal-frame" key={item.name}>
          <div className="img-area">
            <div className="inner-area">
              <img src={item.image_url} alt={item.name} ref={imgRef} />
            </div>
          </div>
          <div className="description">
            <h2>{item.name}</h2>
            <div
              style={{ color: item.gender.includes("male") ? "red" : "blue" }}
            >
              {item.gender.includes("male") ? (
                <FontAwesomeIcon icon={faVenus} />
              ) : (
                <FontAwesomeIcon icon={faMarsStrokeUp} />
              )}
              {` ${item.gender} `}
            </div>
            <div>
              {`${monthConvert(item.birthday_month)} / ${item.birthday_day}`}
            </div>
            <div>{item.quote} </div>
          </div>
          <div>
            정보가 더 궁금하다면?
            {(showQR as number) < 0 && (
              <button
                className="qr-btn"
                onClick={(e) => convertClass(e, index)}
              >
                click!
              </button>
            )}
          </div>
          <div className={`qr ${showQR === index ? "show" : ""}`}>
            <button onClick={(e) => convertClass(e, -1)}>x</button>
            <QRCode value={item.url} viewBox={`0 0 256 256`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimalCard;
