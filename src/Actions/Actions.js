import Action from "./Action/Action";
import Display from "./Display/Display";

const Actions = ({ dialedNumber }) => {
  const actionsNeeded = [
    //considerar si esta array debería estar en App*
    {
      className: "call",
      text: "Call",
    },
    {
      className: "hang active",
      text: "Hang",
    },
  ];
  return (
    <>
      <div className="actions">
        <Display dialedNumber={dialedNumber} />
        {actionsNeeded.map(({ className, text }) => (
          <Action className={className} text={text} key={text} />
        ))}
      </div>
    </>
  );
};

export default Actions;
