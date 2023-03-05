
import * as Yup from 'yup';
const validateYupSchema = Yup.object({
    email: Yup.string()
        .email("Geçerli bir e-mail giriniz...!")
        .required("Lütfen email' kısmını boş bırakmayınız..!"),
    password: Yup.string()
        .min(5,"5 karakterden büyük olmalıdır").max(10,"Paralo 5-10 Arasında olmalıdır")
        .required("Password kutucuğunu boş bırakmayınız...!"),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password")],"Password eşleşmiyor")
        .required("Lütfen tekrar şifreyi yazınız.."),
});


export default validateYupSchema
