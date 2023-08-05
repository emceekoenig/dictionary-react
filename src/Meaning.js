import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div
            key={index}
            className="ms-2"
          >
            <p>
              <small>{definition.definition}</small>

              <br />

              <em className="text-muted ms-3">{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
