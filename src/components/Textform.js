import React, {useState} from 'react'

export default function Textform(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    settext(newText)
    props.showAlert("Converted to UpperCase", "success")
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    settext(newText)
    props.showAlert("Converted to LowerCase", "success")
  }
  const handleOnChange =(event)=>{
      settext(event.target.value)
  }

  const handleCopy =(event)=>{
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("text copied to clipboard", "success")
}
const handleClear = ()=>{
  let newText = '';
  settext(newText)
  props.showAlert("Text cleared ", "success")
}
 
 

    const[text, settext] = useState("")
    return (
       <>
       <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'#313131ed':'white',color:  props.mode==='light'?'black':'white'}} id="mybox" rows="8"></textarea>
                <button className="btn btn-primary mt-2 mx-2" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={handleLoClick}>convert to lowercase</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={handleCopy}>copy text</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={handleClear}>clear text</button>
            </div>
        </div>
       <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
           <h1>Your Text Sumary</h1>
           <p>{text.split(" ").length-1} words and {text.length} characters</p>
           <p>{0.008 * text.split("").length} minutes read</p>
           <h2>preview</h2>
           <p>{text.length>0?text:"Enter Somethng to preivew it here"}</p>
       </div>
       <hr />
       </>
    )
}
