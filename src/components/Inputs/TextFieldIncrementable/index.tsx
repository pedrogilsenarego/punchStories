import * as Styled from "./styles";
import { useField } from "formik";
import { Typography, Box } from "@mui/material";
import { Colors } from "../../../constants/pallette";
import { useState } from "react";

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
  variant?: "outlined";
}

const TextfieldIncrementable = ({
  maxWidth = "auto",
  placeholder = "",
  name,
  label,
  multiline = false,
  rows = 0,
  getvalue,
  ...otherProps
}: Props) => {
  const [field, meta, helper] = useField(name);
  const [newValue, setNewValue] = useState<string>("");

  const configTextField: Config = {
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
      <Box display='flex' justifyContent='start'>
        <Typography>{label}</Typography>
      </Box>
      <Box display='flex' columnGap={2}>
        <Styled.TextField
          maxWidth={maxWidth}
          multiline={multiline}
          rows={rows ? rows : undefined}
          size='small'
          value={newValue}
          placeholder={placeholder}
          {...configTextField}
          onChange={(e) => setNewValue(e.currentTarget.value)}
        />
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: Colors.tealc,
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => {
            setNewValue("");
            helper.setValue(
              field.value === "" ? [newValue] : [...field.value, newValue]
            );
          }}
        >
          <Typography color='white' fontWeight={800} fontSize='1.5rem'>
            +
          </Typography>
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' rowGap={1} mt='10px'>

        {Array.isArray(field.value) && field?.value?.map((item: string, pos: number) => {
          return (
            <Box display='flex' columnGap={2}>
              <Box
                key={pos}
                style={{
                  backgroundColor: Colors.tealcTransparent,
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                }}
              >
                <Typography color='white'>{item}</Typography>
              </Box>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                style={{
                  height: "40px",
                  width: "40px",
                  backgroundColor: Colors.tealc,
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  const newArray = [...field.value]
                  newArray.splice(pos, 1)
                  helper.setValue(newArray);
                }}
              >
                <Typography color='white' fontWeight={800} fontSize='1.5rem'>
                  x
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default TextfieldIncrementable;
