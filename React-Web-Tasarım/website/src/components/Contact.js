import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  actions.resetForm();
};
export const Contact = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",

        password: "",
        confirmPassword: "",
        tel: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="form-title">Üye Ol</h1>

        <input
          value={values.email}
          id="email"
          type="email"
          placeholder="E-posta Adresi*"
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        ></input>
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          id="tel"
          value={values.tel}
          type="tel"
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          className={errors.tel ? "input-error" : ""}
        ></input>
        {errors.tel && <p className="error">{errors.tel}</p>}

        <input
          id="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Şifre Girin*"
          type="password"
          className={errors.password ? "input-error" : ""}
        ></input>
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          id="confirmPassword"
          value={values.confirmPassword} // Değiştirilmesi gereken yer
          onChange={handleChange} // Ekleme gereken yer
          placeholder="Şifreyi Tekrar Girin*"
          type="password"
          className={errors.confirmPassword ? "input-error" : ""}
        ></input>
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button disabled={isSubmitting} type="submit" className="btn">
          Üye Ol
        </button>
      </form>
    </div>
  );
};
