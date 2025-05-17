import * as Yup from "yup";

export const SentMeSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .test(
      "min-two-words",
      "Message must contain at least two words",
      (value) => value && value.trim().split(/\s+/).length >= 2
    ),
  name: Yup.string().required("Name is required").min(2,'The name must contain at least two letters.'),
});
