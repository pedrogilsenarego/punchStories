import { Ellipsis } from "react-spinners-css";

interface Props {
  size?: number
}

const Loader = ({ size = 100 }: Props) => {
  return (
    <Ellipsis
      size={size}
      color='#ffffff66'
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        marginTop: "auto",
        marginBottom: "auto",
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  )
}

export default Loader