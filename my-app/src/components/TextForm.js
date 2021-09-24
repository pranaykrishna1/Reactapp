import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleClickEvent = ()=>{
        console.log("Clicked on press me!");
        let temp= text.toUpperCase();
        setText(temp)
    }

    const handleLowClickEvent = ()=>{
        let temp= text.toLowerCase();
        setText(temp)
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const[text,setText]= useState("Enter text here");
    return (
        <>
        <div className="container">
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="mybox" className="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="3"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleClickEvent}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClickEvent}>Convert to Lowercase</button>
        </div>
         <div className="container my-3">
         <h1>Text Summary</h1>
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>Can be read in {0.008 * text.split(" ").length} minutes</p>
         <h2>Preview</h2>
         <p>{text}</p>
         </div>
        </>
    )
}

TextForm.propTypes = { heading: PropTypes.string
}