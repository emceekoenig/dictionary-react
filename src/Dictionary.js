import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [newWord, setNewWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
    console.log(response.data);
  }

  function search(keyword) {
    let apiKey = "50f181fb5atco86d3e4e13e20785aa08";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${newWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setNewWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h4>What word do you want to look up?</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Search for a word"
            className="form-control"
          />
        </form>
        <p className="mt-3">
          <small>
            <em>i.e. gumption, perquisite, zenith</em>
          </small>
        </p>
      </section>

      <Results results={results} />
    </div>
  );
}
