import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Changed", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Changed", "success");
    }

    const cleardefault = (event) => {
        if(!clear){
            setClear(true);
            setText("");
        }
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
        
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Extra spaces removed", "success");
    }

    const handleCopy =() =>{
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().RemoveAllRanges();
        props.showAlert("Copied to Clipborad", "success");
    }
    const [text,setText] = useState('Enter text here');
    const [clear,setClear] = useState(false);

  return (
    <>
    <div className='container' style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className = 'mb-2'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} onClick ={cleardefault} value={text} id="myBox" rows="8" style = {{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
        </div>
        <button disabled = {text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Upper Case</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To Lower Case</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <p>{text.length} characters and {text.split(" ").filter((element)=>{return element.length!==0}).length} words</p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text to preview it here" }</p>
    </div>
    </>
  )
}
