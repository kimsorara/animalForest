import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <h1 className="header">
      <span>모</span>
      <span>여</span>
      <span>봐</span>
      <span>요</span>
      <span>!</span>
      <span>동</span>
      <span>물</span>
      <span>의</span>
      <span>숲</span>
      <span>
        <FontAwesomeIcon icon={faTree} />
      </span>
    </h1>
  );
};

export default Header;
