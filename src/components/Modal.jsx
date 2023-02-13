import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { BsExclamationTriangle, BsChevronDown } from "react-icons/bs";
import Select from "./Select";

export default function Modal({ showModal, setShowModal }) {
  const options = ["Block number", "Tx Hash"];
  const [runTest, setRunTest] = useState(false);
  const [openCode, setOpenCode] = useState(false)
  const toggleCode = (e) => {
    if(!openCode){
      e.target.style = 'transform: rotate(180deg)'
      e.target.closest('.code').style = 'height: 500px';
      setOpenCode(true)

    } else {
      e.target.style = 'transform: rotate(0deg)'
      setOpenCode(false)
      e.target.closest('.code').style = 'height: 250px';
    }
  }
  return (
    <div className={`modal`}>
      <div className="modal__inner">
        <div className="modal__inner_head">
          <h3 className="modal__inner_title">
            <BsExclamationTriangle color="#FFA300" /> Test Notify trigger
          </h3>
          <GrClose
            className="close-button"
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className="modal__inner_body">
          <p className="modal__inner_body__desc">
            Will use the lastest block when left empty
          </p>
          <div className="modal__inner_body__input">
            <Select className="modal__inner_body__select" options={options} value={options[0]}/>
            <input type="text" placeholder="Test block #001" />
          </div>
          <div className="modal__inner_body__btns">
          <button className="btn filled" onClick={() => setRunTest(true)}>
            Start Test {runTest ? "Again" : ""}
          </button>
          {runTest && <button className="btn bordered" onClick={() => setRunTest(false)}>Close Test</button>}
          </div>
        </div>
        {runTest && (
          <div className="modal__inner_test">
            <p>Results found on block 1234567</p>
            <div className="code">
              <div className="pre-wrapper">
                <pre>{`
{
  "authentication_key": "0x9d2e527d2f1e0869fc4d1c322e5b4d60784c300096c7211c1b3f0cac1d9b3a22",
  "coin_register_events": {
    "counter": "1",
    "guid": {
      "id": {
        "addr": "0x9d2e527d2f1e0869fc4d1c322e5b4d60784c300096c7211c1b3f0cac1d9b3a22",
        "creation_num": "0"
      }
    }
  },
  "guid_creation_num": "8",
  "key_rotation_events": {
    "counter": "0",
    "guid": {
      "id": {
        "addr": "0x9d2e527d2f1e0869fc4d1c322e5b4d60784c300096c7211c1b3f0cac1d9b3a22",
        "creation_num": "1"
      }
    }
  },
  "rotation_capability_offer": {
    "for": {
      "vec": []
    }
  },
  "sequence_number": "43",
  "signer_capability_offer": {
    "for": {
      "vec": []
    }
  }
}
              `}</pre>
              </div>
              <BsChevronDown color="#8c5ae8" onClick={(e) => toggleCode(e)}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
