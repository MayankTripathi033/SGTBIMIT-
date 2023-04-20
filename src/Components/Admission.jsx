import React from 'react'


export default function Admission() {
    const closeHandle = (e) => {
        e.target.parentElement.classList.remove("show")
        document.querySelector(".admission-bg").classList.remove("show-bg")
    }

    return (
        <>
            <div className="admission-bg"></div>
            <div className='admission-dialog'>

                <img src={require("../images/cancel.png")} alt="cant load" className='close-btn' onClick={(e) => closeHandle(e)} />
                <h1 className='admission-title'>ADMISSION FORM</h1>
                <div className='hurry'>Hurry, Fill your Admission Form right now</div>
                <form action="http://localhost:5000/Admission/Request" method="post" className='admission-form'>
                    <input type="text" placeholder='Name' className="admission-name" name='Name'/>
                    <input type="email" placeholder='Email Address' className="admission-email" name='Email'/>
                    <input type="text" placeholder='Phone Number' className="admission-number" name='PNumber' />
                    <label htmlFor="courses">Course interested in:</label>
                    <select name="Course" id="courses">
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="BBA B&I">BBA(B&I)</option>
                        <option value="BCOM">BCOM</option>
                    </select>
                    <input type="submit" value="SUBMIT" />

                </form>
            </div>
        </>
    )
}
