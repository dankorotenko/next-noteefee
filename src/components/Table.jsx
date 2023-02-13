import React from "react";
import exclamation from '../assets/icons/la_exclamation.svg';

export default function Table({ className, data }) {
  return (
    <>
      <table className={className}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Trigger context</th>
            <th>Action Outcome</th>
            <th>Trigger Error</th>
          </tr>
        </thead>
        {data.length ? (
          <tbody>
            {data.map((l, i) => (
              <tr key={i}>
                <td>{l.date}</td>
                <td>{l.triggerContext}</td>
                <td>{l.actionOutcome}</td>
                <td>{l.triggerErr}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          ""
        )}
      </table>
      {!data.length ? <div className="no-data"><img src={exclamation} alt="!" /> You currently have no messages<div className="triangle"></div></div> : ""}
    </>
  );
}
