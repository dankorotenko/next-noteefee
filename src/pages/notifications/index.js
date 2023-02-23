import React, { useEffect } from "react";

import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";

import InfoCard from "../../components/InfoCard";
import Sidebar from "../../components/Sidebar";
import Sms from "../../components/icons/Sms";
import { notifications } from "../../data/dummy";



export default function Notifications() {

  return (
    <div className="dashboard">
      <Sidebar tab={"notifications"} />
      <section className="content">
        <div className="content__preheader">
          <Sms />
          Notifications
        </div>
        <div className="content__header">
          <h2 className="content__header_title">
            Notifications <AiOutlineInfoCircle color="#A8A8A8" />
          </h2>
          <div className="content__header_btns">
            <Link
              href="/notifications/create"
              className="btn filled"
              style={{ paddingInline: "2.25rem", paddingBlock: ".625rem" }}
            >
              Create a New notification
            </Link>
          </div>
        </div>
        <div className="content__subheader">
          <InfoCard
            title="Active Notifications"
            percent={notifications.length}
            max={10}
          />
          <InfoCard
            title="Delivered Notifications"
            percent={notifications.reduce(
              (sum, obj) => sum + obj.history.length,
              0
            )}
            max={100}
            tip="*month"
          />
        </div>
        <div className="content__body">
          {notifications.length != 0 ? (
            notifications.map((n, i) => (
              <Link
                href={"/notifications/" + n.id}
                className="notification-card"
                key={i}
              >
                <div className="notification-card__left">
                  <div className="notification-card__logos">
                    <img src={n.logos[0]} />
                    <img src={n.logos[1]} />
                  </div>
                  <div className="notification-card__info">
                    <h3 className="notification-card__title">{n.title}</h3>
                    <p className="notification-card__desc">{n.description}</p>
                  </div>
                </div>

                <div className="notification-card__right">
                  <div
                    className={`notification-card__status ${
                      !n.active && "no-active"
                    }`}
                  >
                    {n.active ? "Active" : "No Active"}
                  </div>
                  <div className="notification-card__amount">
                    {n.history.length} Delivered
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <Link
              href="/notifications/create"
              className="notification-card add"
            >
              <div className="wrapper">
                <BsPlusCircle color="#8C5AE8" size={32} />
                Create Notification
              </div>
            </Link>
          )}
        </div>
        <Link
          href="/notifications/create"
          className="btn filled create-btn--mobile"
        >
          Create a New notification
        </Link>
      </section>
    </div>
  );
}
