  import { useContext } from "react";
import Context from "../Context/Context";

const Info = ({ message }) => {
  const { isCalling } = useContext(Context);

  //se oculta con la clase off
  return <span className="message">{isCalling ? message : ""}</span>;
};

export default Info;
