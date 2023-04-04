import React, { useState } from "react";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import "../../Society/Society_Add/Society_Add.css";
import "./QuestionPaperAdd.css"
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import axios from "axios";
import imageCompression from 'browser-image-compression';

const QuestionPaperAdd = () => {
  const [societUpdate, setSocieUpdate] = useState({
    course: "",
    Year: "",
    Semester: "",
  });
  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  }

  const SocietyAdd = async () => {
    try {
      let formData = new FormData();
      const compressedFile = await imageCompression(filedata, options);
      console.log(compressedFile);
      formData.append("file", compressedFile,filedata.name);
      formData.append("course", societUpdate.course);
      formData.append("Year", societUpdate.Year);
      formData.append("Semester", societUpdate.Semester);
      const data1 = (
        await axios.post(
          "http://localhost:5000/QuestionPaper/Add",
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
              <h1>Add the Paper</h1>
            </div>
            <div className="SocietyForm">
              <select name="course" id="">
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="BBA B&I">BBA B&I</option>
                <option value="BCOM">BCOM</option>
              </select>
              <input
                type="text"
                name="Year"
                id=""
                placeholder="Year"
                onChange={Onchagetesdetail}
              />
              <select name="Semester" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <div className="Message_image">
                <input
                  type="file"
                  name="file"
                  id="ImageUpload"
                  multiple
                  onChange={(e) => {
                    setFileData(e.target.files[0]);
                  }}
                  style={{width: "200px",height:"150px"}}
                />
              </div>
              <button
                className="button-19"
                onClick={() => {
                    SocietyAdd();
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
}

export default QuestionPaperAdd