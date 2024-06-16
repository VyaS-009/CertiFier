import React from "react";
import CertificateForm from "../components/CertificateForm";
import styles from "./CreateCertificate.module.css";

const CreateCertificate = () => {
  return (
    <div className={styles.createCertificateContainer}>
      <CertificateForm />
    </div>
  );
};

export default CreateCertificate;
