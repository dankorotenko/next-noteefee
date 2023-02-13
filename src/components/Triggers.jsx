import React, { useEffect, useState } from "react";

import { triggers } from '../data/dummy'

import TriggerCard from "./TriggerCard";

export default function Triggers({ handleChildProps }) {
  const [open, setOpen] = useState(null);
  const [closeCard, setCloseCard] = useState(null);


  const handleOpen = (i) => {
    setOpen(i);
    handleChildProps({ trigger: triggers[0].title.toLowerCase() });
  };

  useEffect(() => {
    setOpen(null);
    handleChildProps({ trigger: null });
  }, [closeCard]);

  return (
    <div className="cards-container__body">
      {triggers.map((card, i) => (
        <TriggerCard
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
