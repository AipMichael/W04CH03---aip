import { useContext } from "react";
import Context from "../../components/Context/Context";

const Action = ({ className, text }) => {
  const { callActive, hangUp } = useContext(Context);
  return (
    <>
      <a
        href="google.com"
        className={className}
        onClick={
          text === "Call"
            ? (event) => callActive(event)
            : (event) => hangUp(event)
        }
      >
        {text}
      </a>
    </>
  );
};

export default Action;
