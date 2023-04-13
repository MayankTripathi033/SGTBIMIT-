import axios from "axios";
import React, { useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";

const CalenderAdd = () => {
  const [calenderUpdate, setCalenderUpdate] = useState({
    Date: "",
    Event: "",
  });

  const Onchagetesdetail = (e) => {
    setCalenderUpdate({ ...calenderUpdate, [e.target.name]: e.target.value });
  };

  const EResourcesAdd = async () => {
    try {
      await axios.post("http://localhost:5000/E_Resources/EResources_Add", {
        calenderUpdate,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="TestimonailAddContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="TestimonialDetailContainer">
          <AdminHeader />
          <div className="TesHeadingFormContainer">
            <div className="Testimonial_Heading">
              <h1>Add a new Academic Detail</h1>
            </div>
            <div className="TestimonialForm">
              <input
                type="text"
                name="Date"
                id=""
                placeholder="Date"
                onChange={Onchagetesdetail}
              />
              <input
                type="text"
                name="Event"
                id=""
                placeholder="Event"
                onChange={Onchagetesdetail}
              />
              <button
                className="button-19"
                onClick={() => {
                  EResourcesAdd();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderAdd;
