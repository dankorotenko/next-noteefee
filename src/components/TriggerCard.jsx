import React, { useState, useEffect, useRef } from "react";
import { SlArrowRight } from "react-icons/sl";
import BigSelect from "./BigSelect";
import Select from "./Select";
import Modal from "./Modal";

import { MdClose } from "react-icons/md";
import collection from "../../public/collection.png";
export default function TriggerCard({
  card,
  open,
  isOpen,
  isHidden,
  onClick,
  setCloseCard,
}) {
  const ref = useRef();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    userAddress: "",
    thresholdAmount: "",
    type: "Below",
    aptosPrice: "",
    userWalletAddress: "",
    floorPrice: "",
    collection: "Collection URL",
  });

  const collectionOptions = [
    {
      img: collection.src,
      name: "Collection #1",
    },
    {
      img: collection.src,
      name: "Collection #2",
    },
    {
      img: collection.src,
      name: "Collection #3",
    },
    {
      img: collection.src,
      name: "Collection #4",
    },
    {
      img: collection.src,
      name: "Collection #5",
    },
    {
      img: collection.src,
      name: "Collection #6",
    },
  ];

  const cardClass = isOpen ? "open" : "";
  const hiddenClass = isHidden ? "closed" : "";

  const handleClose = (i) => {
    setCloseCard(i);
  };
  const handleSelectProps = (props) => {
    setFormData({ ...formData, type: props.selected });
  };
  const handleBigSelectProps = (props) => {
    setFormData({ ...formData, collection: props.selected });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !event.target.closest(".cards-container__body")) {
        handleClose(Math.random);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`cards-container__card ${cardClass}${hiddenClass}`}
      onClick={onClick}
      ref={ref}
    >
      <div className="cards-container__card_title">
        <h4>
          {card.img}
          {card.title}
          {isOpen && <span>/ {card.desc}</span>}
        </h4>

        <div className="cards-container__card_btns">
          {isOpen && (
            <>
              <button
                className="btn bordered close-button"
                onClick={() => handleClose(Math.random)}
              >
                <MdClose color="#8c5ae8" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className={`cards-container__card_body ${isOpen ? "opened" : ""}`}>
        {isOpen && open == 0 && (
          <>
            <div className="field-wrapper user-address">
              <label htmlFor="user-address">User Address</label>
              <input
                type="text"
                placeholder="0*123456789..."
                id="user-address"
                name="userAddress"
                onChange={handleChange}
                value={formData.userAddress}
              />
              <p className="tip">Enter the address that you use on Compount</p>
            </div>
            <div className="field-wrapper threshold-amound">
              <label htmlFor="threshold-amound">Threshold Amound</label>
              <div className="inputs-wrapper">
                <Select
                  className={"select"}
                  options={["Below", "Above", "Equal to"]}
                  value={formData.type}
                  handleSelectProps={handleSelectProps}
                />
                <div className="input-wrapper">
                  <input
                    type="number"
                    placeholder="0.00"
                    id="threshold-amound"
                    name="thresholdAmount"
                    onChange={handleChange}
                    value={formData.thresholdAmount}
                  />
                  <p>USD</p>
                </div>
              </div>
            </div>
            <div className="cards-container__card_body__btns">
              <button
                className="btn bordered"
                onClick={() => setShowModal(true)}
              >
                Test
              </button>
              <button className="btn filled">Continue</button>
            </div>
          </>
        )}
        {isOpen && open == 1 && (
          <>
            <p>
              This task will be disabled once fired to prevent spam from high
              fluctuations.
            </p>
            <div className="field-wrapper threshold-amound">
              <label htmlFor="threshold-amound">Aptos Price</label>
              <div className="inputs-wrapper">
                <Select
                  className={"select"}
                  options={["Below", "Above", "Equal to"]}
                  value={formData.type}
                  handleSelectProps={handleSelectProps}
                />
                <div className="input-wrapper">
                  <input
                    type="number"
                    placeholder="0.00"
                    id="aptos-price"
                    name="aptosPrice"
                    onChange={handleChange}
                    value={formData.aptosPrice}
                  />
                  <p>USD</p>
                </div>
              </div>
            </div>
            <div className="cards-container__card_body__btns">
              <button className="btn bordered">Test</button>
              <button className="btn filled">Continue</button>
            </div>
          </>
        )}
        {isOpen && open == 2 && (
          <>
            <div className="field-wrapper user-address">
              <label htmlFor="user-wallet-address">User Wallet Address</label>
              <input
                type="text"
                placeholder="0*123456789..."
                id="user-waller-address"
                name="userWalletAddress"
                onChange={handleChange}
                value={formData.userWalletAddress}
              />
              <p className="tip">Enter the address that you use on Compount</p>
            </div>
            <div className="cards-container__card_body__btns">
              <button className="btn bordered">Test</button>
              <button className="btn filled">Continue</button>
            </div>
          </>
        )}
        {isOpen && open == 3 && (
          <>
            <div className="field-wrapper user-address">
              <label htmlFor="user-address">Collection</label>
              <BigSelect
                className={"collection-select"}
                options={collectionOptions}
                value={formData.collection}
                handleBigSelectProps={handleBigSelectProps}
              />
              <p className="topaz-tip">
                Provide a collection URL from <a href="#">topaz.co</a>, or
                choose from the list <br />
                Example format: <br />
                <span>
                  <a target="_blank" href="https://www.topaz.so/collection">
                    https://www.topaz.so/collection/
                  </a>
                  &lt;collection-name&gt;
                </span>
              </p>
            </div>
            <div className="field-wrapper threshold-amound">
              <label htmlFor="floor-price">Floor Price</label>
              <div className="inputs-wrapper">
                <Select
                  className={"select"}
                  options={["Below", "Above", "Equal"]}
                  value={formData.type}
                  handleSelectProps={handleSelectProps}
                />
                <div className="input-wrapper">
                  <input
                    type="number"
                    placeholder="0.00"
                    id="floor-price"
                    name="floorPrice"
                    onChange={handleChange}
                    value={formData.floorPrice}
                  />
                  <p>APT</p>
                </div>
              </div>
            </div>
            <div className="cards-container__card_body__btns">
              <button className="btn bordered">Test</button>
              <button className="btn filled">Continue</button>
            </div>
          </>
        )}
        {!isOpen && (
          <>
            <p className="cards-container__card_desc">{card.desc}</p>
            <SlArrowRight />
          </>
        )}
      </div>

      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}
