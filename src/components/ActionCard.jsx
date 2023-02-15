import React, { useState, useEffect, useRef } from "react";
import { SlArrowRight } from "react-icons/sl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Select from "./Select";
import Modal from "./Modal";

import { MdClose } from "react-icons/md";
import { slackNoBg, twitterNoBg } from "public/logos";

import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function ActionCard({
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
    discordUrl: "",
    botToken: "",
    chatId: "",
    emailAddress: "",
    endpoint: "",
    headers: "",
    messageFormat: "HTML",
    type: "Below",
    floorPrice: "",
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: "#8c5ae8",
      },
    },
  });

  const label = { inputProps: { "aria-label": "Link Preview" } };

  const cardClass = isOpen ? "open" : "";
  const hiddenClass = isHidden ? "closed" : "";

  const handleClose = (i) => {
    setCloseCard(i);
  };
  const handleSelectProps = (props) => {
    setFormData({ ...formData, type: props.selected });
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
            <div className="field-wrapper discord-url">
              <label htmlFor="discord-url">Discord Webhook URL</label>
              <input
                type="text"
                placeholder="http:// discord.com/api/webhooks/..."
                id="discordd-url"
                name="discordUrl"
                onChange={handleChange}
                value={formData.userAddress}
              />
            </div>
            <div className="message-block">
              <p>Message</p>
              <div className="message-block__message">
                The flor price for the collection <span>Collection</span> has
                changed <br />
                The Floor Price is now <span>Floor Price in APT</span> APT.{" "}
                <br />
                Find out more on OpenSea: <span>OpenSea URL</span>
              </div>
            </div>
            <div className="cards-container__card_body__btns">
              <button className="btn bordered">Test</button>
              <button className="btn filled">Continue</button>
            </div>
          </>
        )}
        {isOpen && open == 1 && (
          <>
            <div className="connect-block">
              <p>Slack channel</p>
              <button className="btn bordered">
                <img src={slackNoBg.src} width="24" />
                Connect with Slack
              </button>
              <p className="tip">Not connected yet</p>
            </div>
            <div className="message-block">
              <p>Message</p>
              <div className="message-block__message">
                The flor price for the collection <span>Collection</span> has
                changed <br />
                The Floor Price is now <span>Floor Price in APT</span> APT.{" "}
                <br />
                Find out more on OpenSea: <span>OpenSea URL</span>
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
            <div className="field-wrapper email-address">
              <label htmlFor="email-address">Email Address</label>
              <input
                type="text"
                placeholder="234567890:ertywujdewiuhIBIih7373e92"
                id="email-address"
                name="emailAddress"
                onChange={handleChange}
                value={formData.userAddress}
              />
            </div>
            <div className="field-wrapper subject">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="234567890:ertywujdewiuhIBIih7373e92"
                id="subject"
                name="subject"
                onChange={handleChange}
                value={formData.userAddress}
              />
              <p className="tip" style={{ color: "var(--black2-clr)" }}>
                This can be a list of comma and space separated
              </p>
            </div>
            <div className="message-block">
              <p>Message</p>
              <div className="message-block__message">
                The flor price for the collection <span>Collection</span> has
                changed <br />
                The Floor Price is now <span>Floor Price in APT</span> APT.{" "}
                <br />
                Find out more on OpenSea: <span>OpenSea URL</span>
              </div>
            </div>
            <div className="cards-container__card_body__btns">
              <button className="btn bordered">Test</button>
              <button className="btn filled">Continue</button>
            </div>
          </>
        )}
        {isOpen && open == 3 && (
          <>
            <div className="field-wrapper bot-token">
              <label htmlFor="bot-token">Bot Token</label>
              <input
                type="text"
                placeholder="234567890:ertywujdewiuhIBIih7373e92"
                id="bot-token"
                name="botToken"
                onChange={handleChange}
                value={formData.userAddress}
              />
            </div>
            <div className="field-wrapper chat-id">
              <label htmlFor="bot-token">Chat Id</label>
              <input
                type="text"
                placeholder="234567890:ertywujdewiuhIBIih7373e92"
                id="chat-id"
                name="chatId"
                onChange={handleChange}
                value={formData.userAddress}
              />
            </div>
            <div className="field-wrapper message-format">
              <label htmlFor="message-format">Message Format</label>
              <div className="inputs-wrapper">
                <Select
                  className={"select"}
                  options={["HTML", "JSON", "XML"]}
                  value={formData.messageFormat}
                  handleSelectProps={handleSelectProps}
                />
                <div className="link-preview">
                  <ThemeProvider theme={theme}>
                    <FormControlLabel
                      value="link-preview"
                      control={<Switch color="primary" />}
                      label="Enable Link Preview"
                      labelPlacement="start"
                    />
                  </ThemeProvider>
                </div>
              </div>
            </div>
            <div className="message-block">
              <p>Message</p>
              <div className="message-block__message">
                The flor price for the collection <span>Collection</span> has
                changed <br />
                The Floor Price is now <span>Floor Price in APT</span> APT.{" "}
                <br />
                Find out more on OpenSea: <span>OpenSea URL</span>
              </div>
            </div>
            <div className="cards-container__card_body__btns">
              <button className="btn bordered">Test</button>
              <button className="btn filled">Continue</button>
            </div>
          </>
        )}
        {isOpen && open == 4 && (
          <>
            <div className="connect-block">
              <p>Twitter account</p>
              <button className="btn bordered">
                <img src={twitterNoBg.src} width="24" />
                Connect with Twitter
              </button>
              <p className="tip">Not connected yet</p>
            </div>
            <div className="message-block">
              <p>Message</p>
              <div className="message-block__message">
                The flor price for the collection <span>Collection</span> has
                changed <br />
                The Floor Price is now <span>Floor Price in APT</span> APT.{" "}
                <br />
                Find out more on OpenSea: <span>OpenSea URL</span>
              </div>
            </div>
            <div className="cards-container__card_body__btns">
              <button className="btn bordered">Test</button>
              <button className="btn filled">Continue</button>
            </div>
          </>
        )}
        {isOpen && open == 5 && (
          <>
            <div className="field-wrapper endpoint">
              <label htmlFor="eendpoint">Choose your endpoint</label>
              <input
                type="text"
                placeholder="https://..."
                id="endpoint"
                name="endpoint"
                onChange={handleChange}
                value={formData.endpoint}
              />
            </div>
            <div className="field-wrapper headers">
              <label htmlFor="headers">
                Headers<i>*</i>
              </label>
              <div>
                <input
                  type="text"
                  placeholder="text"
                  id="headers"
                  name="headers"
                  onChange={handleChange}
                  value={formData.headers}
                />
                <button className="btn bordered">Add header</button>
              </div>
              <p className="tip" style={{ color: "var(--black2-clr)" }}>
                * Optional
              </p>
            </div>
            <div className="message-block">
              <p>
                Message<i>*</i>
              </p>
              <div className="message-block__message">
                The flor price for the collection <span>Collection</span> has
                changed <br />
                The Floor Price is now <span>Floor Price in APT</span> APT.{" "}
                <br />
                Find out more on OpenSea: <span>OpenSea URL</span>
              </div>
              <p className="tip" style={{ color: "var(--black2-clr)" }}>
                * Optional
              </p>
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
