import * as Styled from "./styles";
import { useField } from "formik";
import { Typography, Box } from "@mui/material";

interface Props {
  maxWidth?: string;
  placeholder?: string;
  name: string;
  label: string;
  multiline?: boolean;
  rows?: number;
  getvalue?: (value: string) => void;
}

interface Config {
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  variant?: 'outlined';
}

const Textfield = ({
  maxWidth = "auto",
  placeholder = "",
  name,
  label,
  multiline = false,
  rows = 0,
  getvalue,
  ...otherProps
}: Props) => {
  const [field, meta] = useField(name);

  const configTextField: Config = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  if (getvalue) {
    getvalue(meta.value);
  }



  return (
    <>
      <Box display="flex" justifyContent="start">
        <Typography>{label}</Typography>
      </Box>
      <Box >
        <Styled.TextField
          maxWidth={maxWidth}
          multiline={multiline}
          rows={rows ? rows : undefined}
          size="small"
          placeholder={placeholder}
          {...configTextField}
        />
      </Box>
    </>
  );
};

export default Textfield;
