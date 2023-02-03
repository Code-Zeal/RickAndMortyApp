import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
const Nav = (props) => {
  return (
    <div>
      <div className={styles.divNav}>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
};

export default Nav;
