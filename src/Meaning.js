import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div className="ms-2">
        <div className="definition">
          <strong>Definition:</strong> {props.meaning.definition}
        </div>

        <div className="example">
          <strong>Example:</strong> {props.meaning.example}
        </div>

        <div className="synonyms">
          <strong>Synonyms:</strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    </div>
  );
}
