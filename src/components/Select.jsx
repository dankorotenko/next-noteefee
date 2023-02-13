import React, { useState, useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";

import useClickOutside from "../hooks/useClickOutside";
export default function Select({ className, options, value, ...props }) {
  const ref = useRef(null);
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const handleOpen = () => {
    opened ? setOpened(false) : setOpened(true);
  };

  const handleOption = (option, e) => {
    setSelectedOption(option);
    setOpened(false);

  };
  useEffect(() => {
    props.handleSelectProps && props.handleSelectProps({ selected: selectedOption })
  },[selectedOption])

  useClickOutside(ref, () => setOpened(false));

  return (
    <div className={`${className}`} ref={ref}>
      <div className="select-outside" onClick={() => handleOpen()}>
        {selectedOption}
        <BsChevronDown
          color="#8c5ae8"
          style={opened ? { transform: "rotateZ(180deg)" } : ""}
        />
      </div>
      <ul className={`select-inside ${opened && "opened"}`}>
        {options.map((option) => (
          <li
            className={`${selectedOption === option ? "active" : ""}`}
            key={option}
            value={option}
            onClick={() => handleOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
