import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Typography, Grid, TextField, Button, Paper } from "@mui/material";
import schema from "../../Validation/UserFormSchema";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import actions from "../../redux/Users/actions";
// import DatePicker from "react-date-picker";
// import moment from "moment";

const UserForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  };

  const exitHandler = (e) => {
    e.preventDefault();
    history.push("/users");
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 5,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",

        mb: 4,
        mx: 5,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        User Form
      </Typography>
      <Formik
        initialValues={{
          ...initialValue,
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          dispatch(actions.createUsersReport(values));
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,

          isValid,

          touched,
          values,
        }) => (
          <form
            autoComplete="on"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid sx={{ mb: 2 }} item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="firstName"
                  label="First Name"
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.firstName && errors.firstName)}
                  variant="outlined"
                  required
                />
                <ErrorMessage
                  component="div"
                  name="firstName"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid sx={{ mb: 3 }} item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%" }}
                  type="text"
                  name="lastName"
                  label="Last Name"
                  value={values.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.lastName && errors.lastName)}
                  variant="outlined"
                  required
                />
                <ErrorMessage
                  component="div"
                  name="lastName"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid sx={{ mb: 4 }}>
              <TextField
                sx={{ width: "100%" }}
                type="email"
                name="email"
                label="Email Id"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.email && errors.email)}
                variant="outlined"
                required
              />
              <ErrorMessage
                component="div"
                name="email"
                className="invalid-feedback"
              />
            </Grid>
            <Grid sx={{ mb: 4 }}>
              {/* <DatePicker
                className="form-control"
                onChange={onChange}
                value={dob}
                minDate={moment().subtract(150, "years")._d}
                maxDate={moment().subtract(18, "years")._d}
              /> */}

              <TextField
                sx={{ width: "100%" }}
                type="date"
                name="birthdate"
                label="Birth Date"
                value={values.birthdate}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.birthdate && errors.birthdate)}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <ErrorMessage
                component="div"
                name="birthdate"
                className="invalid-feedback"
              />
            </Grid>
            <Grid sx={{ mb: 4 }}>
              <TextField
                sx={{ width: "100%" }}
                type="text"
                name="password"
                label="Password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.password && errors.password)}
                variant="outlined"
                required
              />
              <ErrorMessage
                component="div"
                name="password"
                className="invalid-feedback"
              />
            </Grid>
            <Grid sx={{ mb: 3 }}>
              <TextField
                sx={{ width: "100%" }}
                type="text"
                name="confirmPassword"
                label="Confirm Password"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
                variant="outlined"
                required
              />
              <ErrorMessage
                component="div"
                name="confirmPassword"
                className="invalid-feedback"
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "row",
                pt: 3,
                mx: "1rem",
              }}
            >
              <Button
                variant="outlined"
                onClick={exitHandler}
                sx={{
                  mr: 1,
                  borderColor: "error.main",
                  borderRadius: 2,
                  color: "#e30909",
                  "&.MuiButtonBase-root:hover": {
                    borderColor: "error.main",
                    bgcolor: "#e30909",
                    color: "#fff",
                  },
                }}
              >
                Exit
              </Button>
              <Button
                sx={{ borderRadius: 2 }}
                color="primary"
                disabled={Boolean(!isValid)}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </Paper>
  );
};
export default UserForm;
