import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div
            key={index}
            className="ms-4"
          >
            <p>
              {definition.definition}
              <br />

              <em className="text-muted ms-3">{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
