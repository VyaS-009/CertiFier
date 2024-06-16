"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import styles from "./Home.module.css";
// import CreateCertificate from "../create_certificate/Createcertificate";
// import CreateCertificatePage from "../pages/create-certificate";
const Home = () => {
  const router = useRouter();

  const handleCreateCertificate = () => {
    router.push("/create-certificate");
  };

  return (
    <div className={styles.home}>
      <div
        className={styles.createCertificate}
        onClick={handleCreateCertificate}
      >
        <FaPlus className={styles.plusIcon} />
        <p>Create a Certificate</p>
      </div>
    </div>
  );
};

export default Home;
