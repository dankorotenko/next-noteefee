import React from "react";


import Sidebar from "../../components/Sidebar";

export default function Streams() {

  return (
    <div className="dashboard">
      <Sidebar tab={'streams'}/>
      <section className="content">
        <h1>Streams</h1>
      </section>
    </div>
  );
}
