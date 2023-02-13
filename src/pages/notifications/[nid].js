import React, { useState } from "react";
import { useRouter } from "next/router";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Sidebar from "../../components/Sidebar";

import { notifications } from "../../data/dummy";
import Table from "../../components/Table";

export const getStaticPaths = () => {
  const paths = notifications.map((n) => {
    return {
      params: { nid: n.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const id = context.params.nid;
  const findOne = notifications.find((n) => n.id === id);
  return {
    props: {n: findOne}
  }
}

export default function SingleNotification({n}) {
  const router = useRouter();

  const [active, setActive] = useState(n.active);

  return (
    <div className="dashboard">
      <Sidebar tab={"notifications"} />
      <section className="content notification">
        <div className="content__header">
          <h2 className="content__header_title">{n.title}</h2>
          <div className="content__header_btns">
            <button className="btn bordered">Delete</button>
            <button className="btn bordered" onClick={() => setActive(!active)}>
              {active ? "Deactivate" : "Activate"}
            </button>
            <button className="btn filled">Edit notification</button>
          </div>
        </div>
        <div className="content__back">
          <BsArrowLeftCircleFill color="#8C5AE8" onClick={() => router.back()} />{" "}
          Back
        </div>
        <div className="content__subheader expanded-card">
          <div className="expanded-card__left">
            <div className="expanded-card__logos">
              <img src={n.logos[0]} />
              <img src={n.logos[1]} />
            </div>
            <div className="expanded-card__text">{n.description}</div>
          </div>
          <div className="expanded-card__right">
            <div className="expanded-card__delivered">
              {n.history.length} Delivered
            </div>
            <div className={`expanded-card__status ${!active && "no-active"}`}>
              {active ? "Active" : "No Active"}
            </div>
          </div>
        </div>
        <div className="content__body">
          <h3 className="content__body_title">Notification history</h3>
          <Table className="content__body_table" data={n.history} />
        </div>
      </section>
    </div>
  );
}
