import React from 'react'

function Alert(props) {
    // for first letter capitilize in alert box
    const capitialize =(word)=>{
     const lower = word.toLowerCase();
     return lower.charAt(0).toUpperCase() + lower.slice(1);
     
    }
    return (
        props.alert &&  <div>
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show` }role="alert">
            <strong>{capitialize(props.alert.type)} </strong> : {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert
