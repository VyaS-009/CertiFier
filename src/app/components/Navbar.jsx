import React from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

import certifierLogo from "../images/certifierLogo.png";
import rguktLogo from "../images/rguktLogo.png";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Image
          src={certifierLogo}
          alt="CertiFier Logo"
          width={50}
          height={50}
        />
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <BsSearch className={styles.searchIcon} />
        </div>
      </div>
      <button className={styles.connectWalletButton}>Connect Wallet</button>
      <Image
        src={rguktLogo}
        alt="RGUKT Logo"
        width={50}
        height={50}
        className={styles.rguktLogo}
      />
    </div>
  );
};

export default Navbar;
