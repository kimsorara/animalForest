import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
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
      </Link>
    </header>
  );
};

export default Header;
