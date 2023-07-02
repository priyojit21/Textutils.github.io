import React, { useState } from 'react'

export default function Textform(props) {

    const handleupclick = () => {
        console.log("clicked");
        let newText = text.toLocaleUpperCase();
        setText(newText);
    }

    const handlelowclick = () => {
        console.log("clicked");
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }


    // copy to clipboard functionality(copied from w3 schools)
    const handlecopyclick = () => {
        let copytext = document.getElementById("myBox");
        copytext.select();
        copytext.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copytext.value);
        alert("copied " + copytext.value);
    }


    const handleSpaceclick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // ebar amra text type korte parbo
    const handleOnChange = (event) => {
        // nije theke likhte gele event.target.value likhte hobe value comes from line 21 and onChnage function is called
        setText(event.target.value);
    }

    // default a textarea te "enter text here" dekhabe
    const [text, setText] = useState("enter text here");
    return (
        <>
            <div style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>{props.head}</h1>
                <div className="mb-3">
                    {/* onChange ta syntax ota likhte hobe  */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <div className="mr">
                    <button className="btn btn-primary" onClick={handleupclick}>Convert to Uppercase</button>
                    <button className="btn btn-primary" onClick={handlelowclick}>Convert to Lowercase</button>
                    <button className="btn btn-primary" onClick={handlecopyclick}>Copy to Clipboard</button>
                    <button className="btn btn-primary" onClick={handleSpaceclick}>Remove Spaces</button>
                </div>

                <div className="container my-3">
                    <h3>Your text summary</h3>
                    <p>{text.split(" ").length}words and {text.length} characters</p>
                </div>
            </div>
        </>
    )
}
