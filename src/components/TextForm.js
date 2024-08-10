import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
    // console.log("Upper Case was Clicked! " + text)
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("Converted to uppercase","success");
}
const handleLowClick = ()=>{
  // console.log("Upper Case was Clicked! " + text)
  let newText = text.toLowerCase()
  setText(newText);
  props.showAlert("Converted to lowercase","success");
}
const handleclearClick = ()=>{
  // console.log("Upper Case was Clicked! " + text)
  setText('');
  props.showAlert("Text Cleared","success");
}
const handleCopy = ()=>{
  var text = document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard","success");
}

const handleExtraSaces = ()=>{
  let newText = text.split(/[ ]+/); // This is regix it means that agr text ma aik ya aik sy ziada spaces hain to split kr do
  setText(newText.join(" ")); //then add one space
  props.showAlert("Extra Spaces Removed","success");
}

function speak() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(text);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}
const handleOnChange = (event)=>{
    // console.log("On change!")
    setText(event.target.value);
}

const [text, setText] = useState('');
// text = "Enter the text hehe"; Wrong way to change the state
// setText('Enter your name'); Correct way to change the state
  return (
    <>
    <div className = "container" style = {{color: props.mode ==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style = {{backgroundColor: props.mode ==='dark'? 'grey':'white', color: props.mode ==='dark'? 'white':'#042743'}} placeholder='Enter text here' value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upercase</button>   
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>   
    </div>
    <div className="container my-3" style = {{color: props.mode ==='dark'? 'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
    
  )
}
