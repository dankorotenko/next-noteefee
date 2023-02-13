import React, { useState, useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";

import useClickOutside from "../hooks/useClickOutside";
export default function BigSelect({ className, options, value, ...props }) {
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
    props.handleBigSelectProps &&
      props.handleBigSelectProps({ selected: selectedOption });
  }, [selectedOption]);

  useClickOutside(ref, () => setOpened(false));

  return (
    <div className={`big-select ${className} ${opened && "opened"}`} ref={ref}>
      <div className="select-outside" onClick={() => handleOpen()}>
        {selectedOption}
        <BsChevronDown
          color="#8c5ae8"
          style={opened ? { transform: "rotateZ(180deg)" } : ""}
        />
      </div>
      <ul className={`select-inside ${opened && "opened"}`}>
        {options.map((option, i) => (
          <li
            className={`${selectedOption === option.name ? "active" : ""}`}
            key={i}
            value={option.name}
            onClick={() => handleOption(option.name)}
          >
            <img src={option.img} alt={i} />
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
