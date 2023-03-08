import React, { useEffect, useState } from "react";

import { actions } from "../data/dummy.js";

import ActionCard from "./ActionCard";
import saved from "../../public/saved.png";
export default function Actions({ handleActionsProps, savedAction, setSavedAction }) {
  const [open, setOpen] = useState(null);
  const [closeCard, setCloseCard] = useState(null);

  const [actionDesc, setActionDesc] = useState("Then Do This...");


  const handleOpen = (i) => {
    setOpen(i);
    handleActionsProps({ actionDescription: actions[i].desc });
  };

  useEffect(() => {
    setOpen(null);
    handleActionsProps({ actionDescription: null });
  }, [closeCard]);

  useEffect(() => {
    console.log("action saved");
  }, [savedAction]);

  return (
    <section className={`action ${savedAction.id !== -1 ? "saved" : ""}`}>
      <div className="action__head">
        <h3 className="action__title">
          <img
            src={
              savedAction.id == -1
                ? "../bell.svg"
                : actions[savedAction.id].img
            }
          />
          Action
        </h3>
        <p className="action__text">
          {savedAction.id == -1 ? (
            actionDesc
          ) : (
            <>
              {savedAction.then} <span>{savedAction.description}</span>
            </>
          )}
        </p>
      </div>
      {savedAction.id == -1 ? (
        <div className="cards-container__body">
          {actions.map((card, i) => (
            <ActionCard
              card={card}
              open={open}
              key={i}
              isOpen={i === open}
              isHidden={i !== open && open !== null}
              onClick={() => handleOpen(i)}
              setCloseCard={setCloseCard}
              setSavedAction={setSavedAction}
            />
          ))}
        </div>
      ) : (
        <div className="action__change">
          <button
            className="btn bordered"
            onClick={() => setSavedAction({ id: -1 })}
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
