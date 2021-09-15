import React,{useState}  from 'react'

export default function About() {

const [mystyle, setMystyle] = useState({
    backgroundColor:'white',
    color:'black'
})

const [btnText, setbtntext] = useState("enable dark mode")
const toggleStyle = ()=>{
    if(mystyle.color === 'white'){
        setMystyle({
            color:'black',
            background:'white'
        })
        setbtntext("Enable dark mode")
    }else{
        setMystyle({
            color:'white',
            background:'#313131ed',
            border:'1px solid white'
        })
        setbtntext("Enable light mode")

    }
}


    return (
        <div className="container my-4" style={mystyle}>
        <h1 className="my-3">Enable Dark mode using UseState </h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     1. Use of props
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                         <p>Propes:- props ak type se propities hoti hai ydi aap ne koi component create kiya or us component me aap kuch pass krna caahty hai ya fir usme koi variables hai jo ke aap decide krygy ke un variables ko aap kya pass krna caahty hai</p> 
                        <p>Proptypes:-proptype ke help se aap props ka type decleard kr skte ho ke aapko props ka type string rkna hai ya nhi iska use krne kai ley aapko props ko import krna hota hai uske ley (impt) cmd ka use kiya jaata hai </p> 
                        <p >defaultProps:-isme jo props ke value hoti hai wo deni hoti hai jo aap defalut pr rkna caahty hai mtlb ydi aap ne koi component ke props ko koi value assign nhi ke hai to defalut pr jo value hogi wo show kr degi</p>
                    
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                     2.Use of UseState
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                        <strong> Usestate hook </strong> :- iske use se aap bina page ko reload kiya apne text ko update kr skte hai iska use krne ke ley starting me ise import krna hota hai after that ak const me array bnaaya jata hai or uske value me usestate ka use kiya jata hai isko is text area ke example se eassly smj skte hai iske ley ak event ko 
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      3. React.js Router 
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                          <strong>Router :</strong>Router ke use se multiple pages ke website ko single page me convert kr skte hai iske use se page reload nhi hote hai or ak page se dusre page pr essy ja skty hai <br /><code>How to implement router in react app </code>: first code in terminal just like npm install react-router-dom, after that import react router from react router.com after that copy switch tag from react router website and after that replace the 'a' with 'Link' in navbar component and 'href'with 'to' and the whole code import to router tag.   
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
          </div> 
          <div className="container">
          <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>         
          </div>
    </div>
    )
}
