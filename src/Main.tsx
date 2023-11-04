import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="cartegory-wrap">
      <div className="cartegory">
        <img
          className="cartegory-img"
          src={process.env.PUBLIC_URL + "/category1.jpg"}
          alt="동물"
        />
        <div className="cartegory-content">
          <p>
            동물들의 정보가
            <br /> 궁금하다면?
          </p>
          <Link to="/species">
            <button className="custom-btn cartegory-btn">
              <span>들어가기</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="cartegory">
        <img
          className="cartegory-img"
          src={process.env.PUBLIC_URL + "/category2.jpg"}
          alt="사무실"
        />
        <div className="cartegory-content">
          <p>
            심리테스트를 <br />
            해보고 싶다면??
          </p>
          <Link to="/psychological">
            <button className="custom-btn cartegory-btn">
              <span>들어가기</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
