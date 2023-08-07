import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleWaveformLines } from "@fortawesome/pro-duotone-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        rel="noreferrer"
        className="ms-2"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faCircleWaveformLines}
          style={{
            "--fa-primary-color": "#f6f4ef",
            "--fa-secondary-color": "#000000",
            "--fa-secondary-opacity": "0.6",
          }}
        />
      </a>
    </div>
  );
}
