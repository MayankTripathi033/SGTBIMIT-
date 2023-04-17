import React from 'react'
import './registration.css'
import { Header, Navbar, Footer } from '../../Components'

export default function Registration() {
    return (
        <>
            <Header />
            <Navbar />
            <div className='Alumniform'>

                <form className="personal-details">
                    <h1>Alumni Registration Form</h1>
                    <h2>Personal Details</h2>
                    <label for="fname">First Name</label>
                    <input type="text" name="" id="" />
                    <label for="lname">Last Name</label>
                    <input type="text" />
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label for="Mobile">Mobile No.</label>
                    <input type="text" name="" id="" />
                    <label for="Address">Address</label>
                    <input type="text" name="" id="" />
                    <label for="Adhaar">Adhaar No.</label>
                    <input type="text" name="" id="" />

                    <h2>Higher Education Details</h2>

                    <label for="higher-studies">Higher Studies</label>
                    <select name="select" id="">
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="BBA (B&I)">BBA(B&I)</option>
                        <option value="BCOMM">BCOMM</option>
                    </select>
                    <label for="Year">Year</label>
                    <input type="text" />
                    <label for="Employed">Employed</label>
                    <div>
                        <div>
                            <input type="radio" id='yes' name='employed' value="Yes" />
                            <label for="yes">YES</label>
                        </div>
                        <div>
                            <input type="radio" id="No" name='employed' value="No" />
                            <label for="No">NO</label>
                        </div>
                    </div>

                    <h2>Current Working Details</h2>

                    <label for="Placement">Placement Provided by SGTBIMIT</label>
                    <div>
                        <div>
                            <input type="radio" id='yes' name='placement' value="Yes" />
                            <label for="yes">YES</label>
                        </div>
                        <div>
                            <input type="radio" id="No" name='placement' value="No" />
                            <label for="No">NO</label>
                        </div>
                    </div>
                    <label for="Organization"> Present Organization</label>
                    <input type="text" />
                    <label for="Designation">Current Designation</label>
                    <input type="text" />
                    <button>Submit</button>


                </form>

            </div>
            <Footer />
        </>
    )
}
