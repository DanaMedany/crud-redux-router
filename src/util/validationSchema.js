import * as Yup from "yup";

export const postSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Character is to Short")
    .max(30, "Character is to Long")
    .required("This field is Required"),
  description: Yup.string().required("This field is Required"),
});
