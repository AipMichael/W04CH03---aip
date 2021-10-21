const Key = ({ number }, actionOnClick) => {
  return (
    <>
      <li>
        <button
          className={typeof number === "number" ? "key" : "big key"}
          onClick={actionOnClick}
        >
          {number}
        </button>
      </li>
    </>
  );
};

export default Key;
