import React, { useEffect, useState } from "react";

import { actions } from '../data/dummy'

import ActionCard from "./ActionCard";

export default function Actions({ handleActionsProps }) {
  const [open, setOpen] = useState(null);
  const [closeCard, setCloseCard] = useState(null);


  const handleOpen = (i) => {
    setOpen(i);
    handleActionsProps({ actionDescription: actions[i].desc });
  };

  useEffect(() => {
    setOpen(null);
    handleActionsProps({ actionDescription: null });
  }, [closeCard]);

  return (
    <div className="cards-container__body action-cards">
      {actions.map((card, i) => (
        <ActionCard
          card={card}
          open={open}
          key={i}
          isOpen={i === open}
          isHidden={i !== open && open !== null}
          onClick={() => handleOpen(i)}
          setCloseCard={setCloseCard}
        />
      ))}
    </div>
  );
}
