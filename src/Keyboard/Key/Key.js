const Key = ({ number }) => {
  <li>
    <button class={typeof number === "number" ? "key" : "big key"}>
      {number}
    </button>
  </li>;
};
