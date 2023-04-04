import React, { useEffect, useState } from "react";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import "../../Society/Society_Display/Society_Display.css";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import FileData from "./FileData";

const QuestionPaperDisplay = () => {
  const [render, setRender] = useState(0);
  const [getSociety, setSociety] = useState([]);
  const navigator = useNavigate("");

  useEffect(() => {
    const TestimonialsDataGet = async () => {
      try {
        const data = (
          await axios.get(
            "http://localhost:5000/QuestionPaper/Question_Paper_Display_All"
          )
        ).data;
        setSociety(data);
        setRender(0);
      } catch (error) {
        console.log(error);
      }
    };
    TestimonialsDataGet();
  }, [render]);



  const SocietyDelete = async (value) => {
    try {
      const _id = value;
      console.log(_id);
      await axios.post(`http://localhost:5000/QuestionPaper/Year_Delete/${_id}`);
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="SocietyDisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Prev Year Papers</h1>
            </div>
            <div className="TesDisplayCardContainer">
              {getSociety.map((value) => {
                return (
                  <div className="Society_Card">
                    <h3>
                      {value.course}
                      <span>
                        <BiEditAlt
                          style={{
                            paddingRight: "10px",
                            width: "32px",
                            color: "#adb5bd",
                          }}
                          onClick={() => {
                            navigator(`/admin/Society_Update/${value._id}`);
                          }}
                        />
                        <RiDeleteBin6Line
                          className="TestBin"
                          onClick={() => {
                            SocietyDelete(value._id);
                          }}
                          style={{ color: "#d00000" }}
                        />
                      </span>
                    </h3>
                    <div className="Society_Card_ImageDescription">
                        {value ? <FileData
                            course = {value?.course}
                            Year = {value?.Year}
                            Semester = {value?.Semester}
                            _id = {value?._id}
                        /> : "  "}
                      <div className="Society_Describe">
                        <h4>{value.Year}</h4>
                        <h4> Semester : {value.Semester}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPaperDisplay;
