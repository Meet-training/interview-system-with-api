import * as Yup from "yup";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const schema = Yup.object().shape({
  date: Yup.date().nullable().required("Please Select Date!"),

  name: Yup.string()
    .min(4, "Name at least 4 character required!")
    .required("Please Enter Candidate Name!"),

  interviewer: Yup.string().required("Please Select Interviewer Name!"),

  technology: Yup.array()
    .min(1, "Select Atleast One Technology")
    .required("Please Select Technology!"),

  experienceInYear: Yup.number()
    .integer()
    .typeError("Please Enter Valid Year!")
    .required("Please Enter experience In Year!"),

  experienceInMonth: Yup.number()
    .min(0, "Minimum Value 0!")
    .max(11, "Max Value 11!")
    .integer()
    .typeError("Please Enter Valid Month!")
    .required("Please Enter experience In Month!"),

  round: Yup.string().optional().required("Please Select Round!"),

  communication: Yup.string().when("round", {
    is: (round) => round === "Technical",
    then: Yup.string().required("Please Select Communication level!"),
  }),

  practical: Yup.number().when("round", {
    is: (round) => round === "Practical",
    then: Yup.number()
      .typeError("Please Enter Only Digit!")
      .required("Please Enter Practical Completion!"),
  }),

  coding: Yup.number().when("round", {
    is: (round) => round === "Practical",
    then: Yup.number()
      .typeError("Please Enter Only Digit!")
      .required("Please Enter Coding Standard!"),
  }),

  technical: Yup.number().when("round", {
    is: (round) => round === "Technical",
    then: Yup.number()
      .typeError("Please Enter Only Digit!")
      .required("Please Enter Technical Completion!"),
  }),

  notes: Yup.string().required("Please Write Feedback Of Interview!"),

  firstName: Yup.string()
    .min(4, "FirstName at least 4 character required!")
    .required("Please Enter FirstName!"),

  lastName: Yup.string()
    .min(4, "LastName at least 4 character required!")
    .required("Please Enter LastName!"),

  email: Yup.string()
    .matches(emailRegex, "Must be a valid email!")
    .required("Please Enter Email!"),

  birthdate: Yup.date()
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Please Select Date! "),

  password: Yup.string()
    .matches(
      passwordRegex,
      "one lowercase, uppercase, number, special character required!"
    )
    .min(8, "Minimun 8 Character Required!")
    .required("Please Enter Password!"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must be same!")
    .required("Required Field!"),
});

export default schema;

// .matches(lowercaseRegex, "one lowercase required!")
//     .matches(uppercaseRegex, "one uppercase required!")
//     .matches(numericRegex, "one number required!")
