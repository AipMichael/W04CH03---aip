import Key from "./Key/Key";

const Keyboard = ({ myKeys }, actionOnClick) => {
  return (
    <>
      <ol className="keyboard">
        {myKeys.map((number) => (
          <Key number={number} key={number} />
        ))}
      </ol>
    </>
  );
};

export default Keyboard;
