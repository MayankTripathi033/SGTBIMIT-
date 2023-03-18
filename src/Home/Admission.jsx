import React, { useEffect } from 'react'


export default function Admission() {
    useEffect(() => {
        document.querySelector(".admission-btn").addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".admission-dialog").showModal()
        })
        document.querySelector(".close-btn").addEventListener("click", () => {
            document.querySelector(".admission-dialog").close()
        })
    }, [])
    return (
        <div>
            <dialog className='admission-dialog'>
                <img src={require("../images/cancel.png")} alt="cant load" className='close-btn' />
                <h1 className='admission-title'>ADMISSION FORM</h1>
                <form action="/AdmissionDetails" method="post" className='admission-form'>
                    <input type="text" placeholder='Name' className="admission-name" />
                    <input type="email" placeholder='Email Address' className="admission-email" />
                    <input type="text" placeholder='Phone Number' className="admission-number" />
                    <input type="submit" value="SUBMIT" />
                </form>
            </dialog>
        </div>
    )
}
