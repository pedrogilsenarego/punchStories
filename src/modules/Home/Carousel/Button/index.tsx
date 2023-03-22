import { Box } from "@mui/material"
import { useState } from "react"

interface Props {
  pos: number;
  index: number;
  setIndex: (index: number) => void
}

const Button = ({ pos, index, setIndex }: Props) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setIndex(pos)}
      key={pos}
      style={{
        width: "15px",
        height: "15px",
        backgroundColor: hover || index === pos ? "white" : "#ffffff66",
        borderRadius: "50%",
        cursor: "pointer"
      }}
    />
  )
}

export default Button