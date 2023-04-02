import React, { useState } from "react";
import "../../Society/Society_Add/Society_Add.css"
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD.css";
import imageCompression from 'browser-image-compression';
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import axios from "axios";

const RecruitersAdd = () => {
    const [recruitersUpdate, setRecruitersUpdate] = useState({
        Name: "",
        image: "",
      });
      const [filedata, setFileData] = useState();
    
      const Onchagetesdetail = (e) => {
        setRecruitersUpdate({ ...recruitersUpdate, [e.target.name]: e.target.value });
      };
    
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      }
    
      const RecruitersAdd = async () => {
        try {
          let formData = new FormData();
          const compressedFile = await imageCompression(filedata, options);
          console.log(compressedFile);
          formData.append("image", compressedFile);
          formData.append("Name", recruitersUpdate.Name);
          const data1 = (
            await axios.post(
              "http://localhost:5000/Recruiters/recruiters_Add",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
          ).data;
          // console.log(data1);
        } catch (error) {
          console.log(error);
        }
      };
      return (
        <>
          <div className="societyAddConatiner">
            <div className="SideBar">
              <AdminMenu />
            </div>
            <div className="SocietyDetailContainer">
              <AdminHeader />
              <div className="SocietyFormContainer">
                <div className="Society_Heading">
                  <h1>Add Our New Recruiters</h1>
                </div>
                <div className="SocietyForm">
                  <input
                    type="text"
                    name="Name"
                    id=""
                    placeholder="Name"
                    onChange={Onchagetesdetail}
                  />
                  <div className="Message_image">
                    <input
                      type="file"
                      name="image"
                      id="ImageUpload"
                      onChange={(e) => {
                        setFileData(e.target.files[0]);
                      }}
                      style={{width: "200px",height:"150px"}}
                    />
                  </div>
    
                  <button
                    className="button-19"
                    onClick={() => {
                        RecruitersAdd();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>)
}

export default RecruitersAdd