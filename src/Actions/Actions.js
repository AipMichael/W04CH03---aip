import Action from "./Action/Action";

const Actions = () => {
  const actionsNeeded = [
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
        {actionsNeeded.map(({ className, text }) => (
          <Action className={className} text={text} />
        ))}
      </div>
    </>
  );
};

export default Actions;
