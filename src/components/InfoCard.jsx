import React, { useState } from "react";

export default function InfoCard({ title, percent, max, ...props }) {
  const [progress, setProgress] = useState((percent / max) * 100);
  return (
    <div className="card">
      <h4 className="card__title">{title} <span className="card__title_tip">{props.tip}</span></h4>
      <div className="card__body">
        <div className="bar" style={{ "--progress": progress }}>
          <div className="progress"></div>
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L0.535899 -6.52533e-07L7.4641 -4.68497e-08L4 6Z"
              fill="#8C5AE8"
            />
          </svg>
        </div>
        <div className="progress__value">
          <span className="progress__value_active">{percent}</span>/{max}
        </div>
      </div>
    </div>
  );
}
