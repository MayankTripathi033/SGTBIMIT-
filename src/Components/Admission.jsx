import React from 'react'


export default function Admission() {
    const closeHandle = (e) => {
        e.target.parentElement.classList.remove("show")
    }

    return (

        <div className='admission-dialog'>
            <img src={require("../images/cancel.png")} alt="cant load" className='close-btn' onClick={(e) => closeHandle(e)} />
            <h1 className='admission-title'>ADMISSION FORM</h1>
            <form action="/AdmissionDetails" method="post" className='admission-form'>
                <input type="text" placeholder='Name' className="admission-name" />
                <input type="email" placeholder='Email Address' className="admission-email" />
                <input type="text" placeholder='Phone Number' className="admission-number" />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>

    )
}
