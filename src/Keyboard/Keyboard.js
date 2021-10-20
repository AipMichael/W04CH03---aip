import Key from "./Key/Key";

const Keyboard = ({ myKeys }, actionOnClick) => {
  return (
    <>
      <ol className="keyboard">
        {myKeys.map((number) => (
          <Key number={number} actionOnClick={actionOnClick} />
        ))}
      </ol>
    </>
  );
};

export default Keyboard;
