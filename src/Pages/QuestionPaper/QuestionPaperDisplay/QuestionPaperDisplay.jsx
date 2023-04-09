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
  const [dataReset, setDataReset] = useState(true);
  const [getPaperFilter, setPaperfilter] = useState({
    course: "",
    Year: "",
    Semester: "",
  });

  const Onchagetesdetail = (e) => {
    setPaperfilter({ ...getPaperFilter, [e.target.name]: e.target.value });
  };
  const navigator = useNavigate("");

  const QuestionPaperDataGet = async () => {
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

  useEffect(() => {
    QuestionPaperDataGet();
  }, [render]);

  const paperDataRecover = async () => {
    try {
      const data = await axios.get(
        `http://localhost:5000/QuestionPaper/Display/${getPaperFilter.course}/${getPaperFilter.Year}/${getPaperFilter.Semester}`
      );
      setPaperfilter({
        course: data.data.Data.course,
        Year: data.data.Data.Year,
        Semester: data.data.Data.Semester,
      });
      setDataReset(false);
    } catch (error) {
      console.log(error);
    }
  };

  const PaperDelete = async (value) => {
    try {
      const _id = value;
      // console.log(_id);
      await axios.get(`http://localhost:5000/QuestionPaper/Year_Delete/${_id}`);
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };

  const ResetPaperData = async () => {
    if (dataReset) {
      setDataReset(true);
      QuestionPaperDataGet();
      setPaperfilter({
        course: " ",
        Year: " ",
        Semester: " ",
      });
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
            <div className="filterContainer">
              <select
                name="course"
                id=""
                placeholder="course"
                onChange={Onchagetesdetail}
              >
                <option value=" ">Select Course</option>
                {getSociety.map((value) => {
                  return <option value={value.course}>{value.course}</option>;
                })}
              </select>
              <select
                name="year"
                id=""
                placeholder="year"
                onChange={Onchagetesdetail}
              >
                <option value=" ">Select Year</option>
                {getSociety.map((value) => {
                  return <option value={value.Year}>{value.Year}</option>;
                })}
              </select>
              <select
                name="Semester"
                id=""
                placeholder="Semester"
                onChange={Onchagetesdetail}
              >
                <option value=" ">Select Semester</option>
                {getSociety.map((value) => {
                  return (
                    <option value={value.Semester}>{value.Semester}</option>
                  );
                })}
              </select>
              <button onClick={paperDataRecover}>Search</button>
              <button onClick={ResetPaperData}>Reset</button>
            </div>
            {dataReset ? (
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
                              PaperDelete(value._id);
                            }}
                            style={{ color: "#d00000" }}
                          />
                        </span>
                      </h3>
                      <div className="Society_Card_ImageDescription">
                        <FileData
                          course={value?.course}
                          Year={value?.Year}
                          Semester={value?.Semester}
                          _id={value?._id}
                        />
                        <div className="Society_Describe">
                          <h4>{value.Year}</h4>
                          <h4> Semester : {value.Semester}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="TesDisplayCardContainer">
                <div className="Society_Card">
                  <h3>
                    {getPaperFilter.course}
                    <span>
                      <BiEditAlt
                        style={{
                          paddingRight: "10px",
                          width: "32px",
                          color: "#adb5bd",
                        }}
                        onClick={() => {
                          navigator(
                            `/admin/Society_Update/${getPaperFilter._id}`
                          );
                        }}
                      />
                      <RiDeleteBin6Line
                        className="TestBin"
                        onClick={() => {
                          PaperDelete(getPaperFilter._id);
                        }}
                        style={{ color: "#d00000" }}
                      />
                    </span>
                  </h3>
                  <div className="Society_Card_ImageDescription">
                    {getPaperFilter ? (
                      <FileData
                        course={getPaperFilter?.course}
                        Year={getPaperFilter?.Year}
                        Semester={getPaperFilter?.Semester}
                        _id={getPaperFilter?._id}
                      />
                    ) : (
                      "  "
                    )}
                    <div className="Society_Describe">
                      <h4>{getPaperFilter.Year}</h4>
                      <h4> Semester : {getPaperFilter.Semester}</h4>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPaperDisplay;
