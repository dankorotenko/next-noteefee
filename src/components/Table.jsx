import React from "react";

export default function Table({ className, data }) {
  return (
    <>
      <div className={`table ${className}`}>
        <div className="table__head">
            <div>Date</div>
            <div>Trigger context</div>
            <div>Action Outcome</div>
            <div>Trigger Error</div>
        </div>
        {data.length ? (
          <div className="table__body">
            {data.map((l, i) => (
              <div className="table__body_line" key={i}>
                <div>{l.date}</div>
                <div>{l.triggerContext}</div>
                <div>{l.actionOutcome}</div>
                <div>{l.triggerErr}</div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      {!data.length ? <div className="no-data"><img src="../icons/exclamation.svg" alt="!" /> You currently have no messages<div className="triangle"></div></div> : ""}
    </>
  );
}
