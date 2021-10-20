const Key = ({ number }, actionOnClick, isEnabled) => {
  <li>
    <button
      className={`{typeof number === "number" ? "key" : "big key"} ${isEnabled}`}
      onClick={actionOnClick}
    >
      {number}
    </button>
  </li>;
};
