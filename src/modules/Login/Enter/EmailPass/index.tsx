import { Form, Formik } from "formik";
import { FORM_VALIDATION } from "./validation";
import TextField from "../../../../components/Inputs/TextFieldForm";
import { i18n } from "../../../../translations/i18n";
import Button from "../../../../components/Buttons/ButtonFormik";
import { Colors } from "../../../../constants/pallette";
import { useDispatch } from "react-redux";
import { emailSignInStart } from "../../../../slicer/user/user.actions";

interface FORM {
  email: string;
  password: string;

}

const EmailPass = () => {
  const INITIAL_STATE: FORM = {
    email: "",
    password: "",

  };
  const dispatch = useDispatch()
  const handleSubmit = (values: FORM) => {
    dispatch(
      emailSignInStart(values)
    );
  };
  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_STATE }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={FORM_VALIDATION}
      >
        <Form>
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
          >

            <TextField label="E-mail" name='email' />
            <TextField
              password
              label="Password"
              name='password'
            />
            <Button
              backgroundColor='white'
              color={Colors.tealc}
              borderColor={Colors.tealc}
              label="Login"
            />
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default EmailPass;
