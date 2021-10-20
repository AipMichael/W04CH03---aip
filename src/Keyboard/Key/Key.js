const Key = ({ number }, actionOnClick) => {
  return (
    <>
      <li key={`key ${number}`}>
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
