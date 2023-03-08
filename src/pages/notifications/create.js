"use client";
import React, { useState, useEffect } from "react";
import { BsArrowDown } from "react-icons/bs";

import { useRouter } from "next/router";

import InfoCard from "../../components/InfoCard";
import Triggers from "../../components/Triggers";
import Actions from "../../components/Actions";
import Wallet from "../../components/icons/Wallet";

import { notifications } from "../../data/dummy.js";
export default function Home() {
  const router = useRouter();
  const [trigger, setTrigger] = useState(null);

  const [notification, setNotification] = useState({
    id: "",
    title: "",
    description: "",
    active: true,
    history: [],
  });
  const [savedTrigger, setSavedTrigger] = useState({
    id: -1,
    image: "",
    description: "",
    when: "",
  });
  const [savedAction, setSavedAction] = useState({
    id: -1,
    image: "",
    description: "",
  });

  const [actionDesc, setActionDesc] = useState("Then do this...");
  const handleChildProps = (childProps) => {
    setTrigger(childProps);
    // setTriggerDesc(
    //   childProps.triggerDescription
    //     ? childProps.triggerDescription
    //     : "When this happens..."
    // );
  };
  const handleActionsProps = (childProps) => {
    setActionDesc(
      childProps.actionDescription
        ? childProps.actionDescription
        : "Then do this..."
    );
  };

  const handleChange = (e) => {
    setNotification({ ...notification, title: e.target.value });
  };
  useEffect(() => {
    setNotification({
      ...notification,
      id: "new1234",
      logos: [savedTrigger.image, savedAction.image],
      description: savedTrigger.when + " " + savedTrigger.description,
      active: true,
      history: [],
    });
  }, [notification.title])

  const saveNotification = () => {

    //push to database
    notifications.push(notification);

    router.push('/notifications')
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

      <Triggers
        handleChildProps={handleChildProps}
        savedTrigger={savedTrigger}
        setSavedTrigger={setSavedTrigger}
      />

      <div className="arrow">
        <BsArrowDown size="2.5em" color="#8C5AE8" />
      </div>

      <Actions
        handleActionsProps={handleActionsProps}
        savedAction={savedAction}
        setSavedAction={setSavedAction}
      />
      <hr />
      <div className="submit-wrapper">
        <input
          type="text"
          className="submit-input"
          placeholder="Name"
          name="title"
          onChange={handleChange}
          value={notification.title}
        />
        <button className="btn filled submit-button" onClick={saveNotification}>
          Save Notification
        </button>
      </div>
    </main>
  );
}
