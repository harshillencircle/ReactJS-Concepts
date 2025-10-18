import * as Yup from "yup";

export const validationStep1 = Yup.object({
    name: Yup.string().required("Name Is Required"),
    email: Yup.string().email("Invalid Email Address").required("Email Is Required"),
    username: Yup.string().required("UserName Unique And Required"),
    password: Yup.string().min(6, "Minimun 6 Character Required").required("Password Is Required")
});

export const validationStep2 = Yup.object({
    address: Yup.string().required("Address Is Required"),
    city: Yup.string().required("CityIs Required"),
    zip: Yup.string().required("ZIP Is Required")
})