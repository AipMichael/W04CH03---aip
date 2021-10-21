import { useContext } from "react";
import Context from "../../components/Context/Context";

const Key = ({ number }) => {
  const { displayDialedNumber, deleteNumbers, isCalling } = useContext(Context);
  return (
    <>
      <li>
        <button
          className={typeof number === "number" ? "key" : "big key"}
          onClick={
            number === "delete"
              ? (event) => deleteNumbers(event)
              : (event) => displayDialedNumber(event)
          }
          disabled={isCalling}
        >
          {number}
        </button>
      </li>
    </>
  );
};

export default Key;
