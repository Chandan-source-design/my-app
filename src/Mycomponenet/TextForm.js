import React, { useState } from "react";
import "./TextForm.css"; // Import your CSS file for component-specific styles

const TextForm = (props) => {
  const [text, setText] = useState("");

  // Function to convert text to uppercase
  const textUpper = () => {
    const upper = text.toUpperCase();
    setText(upper);
  };

  // Function to convert text to lowercase
  const textLower = () => {
    const lower = text.toLowerCase();
    setText(lower);
  };

  // Function to capitalize the first letter of each word
  const textCapitalized = () => {
    const capitalizedText = text.toLowerCase().replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
    setText(capitalizedText);
  };

  // Function to download text as a file
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
  };

  // Function to copy text to clipboard
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard");
  };

  // Function to clear the text area
  const clearText = () => {
    setText("");
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-12 ">
            <h1 className="f-family">{props.title}</h1>
            <textarea
              className="form-control text-area"
              placeholder="Enter The Text Here"
              id="myBox"
              rows="8"
              value={text}
              onChange={handleInputChange}
            ></textarea>
            <div className="button-group">
              <button
                type="button"
                className="btn btn-primary mx-2 my-2 text-btn"
                onClick={textUpper}
              >
                UPPER CASE
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-2 text-btn"
                onClick={textLower}
              >
                lower case
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-2 text-btn"
                onClick={textCapitalized}
              >
                Capitalized Case
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-2 text-btn"
                onClick={downloadTxtFile}
              >
                Download Text
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-2 text-btn"
                onClick={handleCopyText}
              >
                Copy Text
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 my-2 text-btn"
                onClick={clearText}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container summary">
        <div className="row">
          <div className="col-lg-12">
            <h1>Your Text Summary</h1>
            <div className="summary-info">
              <span>
                {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words{" "}
                {text.length} characters
              </span>
               
              <span>
                {text.trim() === "" ? 0 : text.trim().split(".").length - 1}{" "}
                sentences
              </span>
              <span>
                {text.trim() === "" ? 0 : text.trim().split(/\r\n|\r|\n/).length}{" "}
                lines
              </span>
              <span>{0.008 * text.trim().split(/\s+/).length} Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextForm;
