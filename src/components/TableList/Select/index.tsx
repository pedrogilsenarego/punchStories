import { MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import * as Styled from "./styles";

interface Config {
  maxWidth?: string;
  fullWidth?: boolean;
  select?: boolean;
  variant: "outlined";
  onChange?: any;
}
interface Props {
  maxWidth?: string;
  onAction?: any
  options: string[];
  initialValue: string;

}

const Select = ({
  options,

  initialValue,
  onAction,

  maxWidth = "auto",
  ...otherProps
}: Props) => {
  const [selected, setSelected] = useState<any>(initialValue);

  useEffect(() => {
    if (selected !== initialValue)
      onAction(selected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setSelected(value);

  };



  const configSelect: Config = {
    ...otherProps,
    select: true,
    maxWidth,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  return (
    <>
      <Styled.TextField
        {...configSelect}
        InputLabelProps={{ shrink: false }}
        value={selected}

        maxWidth="80px"
      >
        {Object.keys(options).map((item: any, pos) => {
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

export default Select;
