import Action from "./Action/Action";
import Display from "./Display/Display";
import { useContext } from "react";
import Context from "../components/Context/Context";

const Actions = ({ dialedNumber }, { active }) => {
  const { isDisabled } = useContext(Context);

  const actionsNeeded = [
    //considerar si esta array debería estar en App*
    {
      className: isDisabled ? "call active" : "call ",
      text: "Call",
    },
    {
      className: isDisabled ? "hang" : "hang active",
      text: "Hang",
    },
  ];
  return (
    <>
      <div className="actions">
        <Display dialedNumber={dialedNumber} />
        {actionsNeeded.map(({ className, text }) => (
          <Action
            className={className}
            text={text}
            key={text}
            disabled={isDisabled}
          />
        ))}
      </div>
    </>
  );
};

export default Actions;
