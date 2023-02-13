import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import Link from 'next/link'

import InfoCard from "../../components/InfoCard";
import Triggers from "../../components/Triggers";
import Actions from "../../components/Actions";
import Wallet from "../../components/icons/Wallet";
import Bell from '../../components/icons/Bell'



export default function Home() {
  const [trigger, setTrigger] = useState(null);
  const handleChildProps = (childProps) => {
    setTrigger(childProps);
  };
  return (
    <main className={`main container ${trigger && trigger.trigger}`}>
      <div className="wallet">
        <Wallet />
        <p className="wallet__id">
          0xafb6e14fe47d850fd0a7395bcfb997ffacf4715e0f895cc162c218e4a7564bc6
        </p>
      </div>
      <section className="info">
        <InfoCard title="Active Notifications" percent={1} max={3} />
        <InfoCard
          title="Delivered Notifications / Month"
          percent={0}
          max={300}
        />
      </section>

      <section className="trigger">
        <h3 className="trigger__title">
          <img src='../bolt.svg' /> Trigger
        </h3>
        <p className="trigger__text">When this happens...</p>
        <Triggers handleChildProps={handleChildProps} />
        <div className="some-btn"><Bell /></div>
      </section>

      <div className="arrow">
        <BsArrowDown size="2.5em" color="#8C5AE8" />
      </div>

      <section className="action">
        <h3 className="action__title">
          <img src='../bell.svg' /> Action
        </h3>
        <p className="action__text">Then do this...</p>
        {/* <button className="btn bordered">Create Action</button> */}
        <Actions />
        <div className="some-btn"><Bell /></div>
      </section>
      <hr />
      <div className="submit-wrapper">
        <input type="text" className="submit-input" placeholder="Name" />
        <button className="btn filled submit-button">Save Notification</button>
      </div>
    </main>
  );
}
