import React, { useEffect, useState } from "react";

import { triggers } from "../data/dummy.js";

import TriggerCard from "./TriggerCard";
import saved from "../../public/saved.png";
export default function Triggers({ handleChildProps, savedTrigger, setSavedTrigger }) {
  const [open, setOpen] = useState(null);
  const [closeCard, setCloseCard] = useState(null);

  const [triggerDesc, setTriggerDesc] = useState("When this happens...");


  const handleOpen = (i) => {
    setOpen(i);
    handleChildProps({
      trigger: triggers[0].title.toLowerCase(),
      triggerDescription: triggers[i].desc,
    });
  };

  useEffect(() => {
    setOpen(null);
    handleChildProps({ trigger: null, triggerDescription: null });
  }, [closeCard]);

  useEffect(() => {
    console.log("trigger saved");
    console.log(savedTrigger);
  }, [savedTrigger]);

  return (
    <section className={`trigger ${savedTrigger.id !== -1 ? "saved" : ""}`}>
      <div className="trigger__head">
        <h3 className="trigger__title">
          <img
            src={
              savedTrigger.id == -1
                ? "../bolt.svg"
                : triggers[savedTrigger.id].img
            }
          />
          Trigger
        </h3>
        <p className="trigger__text">
          {savedTrigger.id == -1 ? (
            triggerDesc
          ) : (
            <>
              / {savedTrigger.when} <span>{savedTrigger.description}</span>
            </>
          )}
        </p>
      </div>
      {savedTrigger.id == -1 ? (
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
              setSavedTrigger={setSavedTrigger}
            />
          ))}
        </div>
      ) : (
        <div className="trigger__change">
          <button
            className="btn bordered"
            onClick={() => setSavedTrigger({ id: -1 })}
          >
            Change
          </button>
          <img src={saved.src} alt="ok" width={24} height={24} />
        </div>
      )}
      {/* <div className="some-btn"><Bell /></div> */}
    </section>
  );
}
