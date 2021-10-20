import Action from "./Action/Action";
import Display from "./Display/Display";

const Actions = () => {
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
      <div class="actions">
        <Display dialedNumber={123456789} />
        {actionsNeeded.map(({ className, text }) => (
          <Action className={className} text={text} />
        ))}
      </div>
    </>
  );
};

export default Actions;
