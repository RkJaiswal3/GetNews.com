import React, {useState} from 'react'

export default function TextForm(props) {

    const addTextUp = () =>{
        let newText = text.toUpperCase();   
        setText(newText);
        props.alertshow("Convert to Uppercase", "success")
    }

    const clearText = () =>{
        let newText = '';
        setText(newText);
        props.alertshow("Text is Cleared !", "success")
    }
    const addTextLo = () =>{
        let newText = text.toLowerCase(); 
        setText(newText);
        props.alertshow("Convert to LowerCase", "success")
    }
    const changeTheText = (event) =>{
        setText(event.target.value);
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(text);
        props.alertshow("Text Copied !", "success");
        document.getSelection().removeAllRanges();
    }
    const removeSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState("Enter the text here..");
    //setText("Enter long text..");
    //you cannot change by providing properties to text like
    // text = "jfaksjdfk";
  return (
    <>
        <div className="container"> 
            <h1 className="text-center">{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="textBox" className="my-3">Fill the Text:</label>
            <textarea name="textArea" id="textBox" onChange={changeTheText} value={text} cols="30" rows="10" className="form-control"></textarea>
        </div>
            <button disabled={text.length ===0} className="btn btn-primary mb-2 mx-2" onClick={addTextUp}>Convert To Uppercase</button>
            <button disabled={text.length ===0} className="btn btn-primary mb-2 mx-2" onClick={addTextLo}>Convert To LowerCase</button>
            <button disabled={text.length ===0} className="btn btn-primary mb-2 mx-2" onClick={clearText}>Clear</button>
            <button disabled={text.length ===0} className="btn btn-primary mb-2 mx-2" onClick={copyText}>Copy Text</button>
            <button disabled={text.length ===0} className="btn btn-primary mb-2 mx-2" onClick={removeSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3">
            <h1>Our Text Summary</h1>
            <p>{text.trim().split(/\s+/).length} Words, {[...text].filter(char => char !== " ").length} Characters</p>
            <p>{0.008 * text.split(" ").filter(element => element.length !== 0).length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Nothing to Preview..."}</p>
        </div>
    </>
  );
}
