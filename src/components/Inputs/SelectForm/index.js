import { MenuItem, Box, Typography } from "@mui/material";
import { useField, useFormikContext } from "formik";
import * as Styled from "./styles";

const SelectWrapper = ({ name, options, label, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,

    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <>
      <Box display='flex' justifyContent='start'>
        <Typography>{label}</Typography>
      </Box>
      <Styled.TextField {...configSelect} InputLabelProps={{ shrink: false }}>
        {Object.keys(options).map((item, pos) => {
          return (
            <MenuItem key={pos} value={item}>
              {options[item]}
            </MenuItem>
          );
        })}
      </Styled.TextField>
    </>
  );
};

export default SelectWrapper;
