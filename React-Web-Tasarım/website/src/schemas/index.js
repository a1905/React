import * as yup from "yup";
var re = {
  full: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@#]{6,}$/, // En az 6 karakter uzunluğunda, ve belirtilen koşulları sağlayan bir şifre
};

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  tel: yup
    .string()
    .required("Telefon numarası zorunludur")
    .matches(
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Geçerli bir telefon numarası giriniz"
    ),
  password: yup
    .string()
    .min(6, "Lütfen minimum 6 karakter giriniz")
    .matches(re, "Lütfen en az 1 büyük harf 1 küçük harf ve 1 rakam girin")
    .required("Şifreyi girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur"),
});
