import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="WordAlternative">
        {props.meaning.hwi.hw}
        <span className="PartsOfSpeech text-muted">({props.meaning.fl})</span>
      </h3>

      {props.meaning.shortdef.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li className="text-muted">{definition}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
