import React, { useState } from 'react';

export default function Textform(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setTest(newtext);
    props.showAlert("converted to uppercase" ,"success");
  };

  const handlelowclick = () => {
    let newtext = text.toLowerCase();
    setTest(newtext);
    props.showAlert("converted to lowercase","success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.showAlert("ai repeated the text you entered","success");
  };

  const handleonchange = (event) => {
    setTest(event.target.value);
  };

  const [text, setTest] = useState('enter text here');

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleonchange} value={text} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleupclick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handlelowclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={speak}>Speak</button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} average minutes to read it</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
