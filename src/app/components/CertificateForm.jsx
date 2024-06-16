import React, { useState } from "react";
import styles from "./CertificateForm.module.css";

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    joiningDate: "",
    passingDate: "",
    certificateImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      certificateImage: imageFile,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Create Certificate</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>ID No:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Joining Date:</label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className={styles.formDateInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Passing Date:</label>
          <input
            type="date"
            name="passingDate"
            value={formData.passingDate}
            onChange={handleChange}
            className={styles.formDateInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Certificate Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.fileInput}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CertificateForm;
