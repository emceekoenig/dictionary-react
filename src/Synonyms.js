import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          <li>{props.synonyms.syns[0]}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
