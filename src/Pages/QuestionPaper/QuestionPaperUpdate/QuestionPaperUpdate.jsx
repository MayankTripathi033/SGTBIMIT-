import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import { useParams } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "../QuestionPaperAdd/QuestionPaperAdd.css";
import "../../Society/Society_Add/Society_Add.css";
import "../../Testimonials/Testimonials_ADD/Testimonials_ADD";
import imageCompression from "browser-image-compression";

const QuestionPaperUpdate = () => {
  const [societUpdate, setSocieUpdate] = useState({
    course: "",
    Year: "",
    Semester: "",
  });
  
  const { Year, Semester, course } = useParams();

  const [filedata, setFileData] = useState();

  const Onchagetesdetail = (e) => {
    setSocieUpdate({ ...societUpdate, [e.target.name]: e.target.value });
  };

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  //   useEffect(() => {
  //     const TestSingleData = async () => {
  //       try {
  //         const data = (
  //           await axios.get(
  //             `http://localhost:5000/Society/Single_Society_Display/${_id}`
  //           )
  //         ).data;
  //         setSocieUpdate({
  //           title: data?.title,
  //           detail: data?.detail,
  //           subdetail: data?.subdetail,
  //         });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     TestSingleData();
  //   }, [_id]);

  // console.log(societUpdate);
  const compresFile = async () => {
    if (filedata) {
      const compressedFile = await imageCompression(filedata, options);
      return compressedFile;
    } else {
      return filedata;
    }
  };
//   const SocietyUpdate = async () => {
//     try {
//       let formData = new FormData();
//       let Imagefile = await compresFile();
//       formData.append("image", Imagefile, filedata.name);
//       formData.append("title", societUpdate.title);
//       formData.append("detail", societUpdate.detail);
//       formData.append("subdetail", societUpdate.subdetail);
//       const data1 = (
//         await axios.post(
//         //   `http://localhost:5000/Society/Society_Update/${_id}`,
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           }
//         )
//       ).data;
//       console.log(data1);
//     } catch (error) {
//       console.log(error);
//     }
//   };

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
              <select name="course" id="" onChange={Onchagetesdetail}>
                <option value=" ">Select Course</option>
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
              <select name="Semester" id="" onChange={Onchagetesdetail}>
                <option value=" ">Select Semester</option>
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
                //   onChange={handleFileInputChange}
                  style={{ width: "200px", height: "150px" }}
                />
              </div>
              <button
                className="button-19"
                onClick={async () => {
                //   SocietyAdd();
                }}
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPaperUpdate;
