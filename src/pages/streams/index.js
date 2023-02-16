import React from "react";

import Sidebar from "../../components/Sidebar";
import Puzzle from "../../components/icons/Puzzle"
export default function Streams() {
  return (
    <div className="dashboard">
      <Sidebar tab={"streams"} />
      <section className="content">
        <div className="content__preheader">
          <Puzzle />
          Streams
        </div>
      </section>
    </div>
  );
}
