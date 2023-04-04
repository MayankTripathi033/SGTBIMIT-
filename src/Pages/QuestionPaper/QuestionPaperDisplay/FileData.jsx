import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

const FileData = (props) => {
  const [getPaperName, setPaperName] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const paperDataRecover = async () => {
      try {
        const data = await axios.get(
          `http://localhost:5000/QuestionPaper/Display/${props.course}/${props.Year}/${props.Semester}`
        );
        setPaperName(data.data.FileNames);
        setRender(0);
      } catch (error) {
        console.log(error);
      }
    };
    paperDataRecover();
  }, [render]);

  const SocietyDelete = async (value,Index) => {
    try {
      const _id = value;
      console.log(_id);
      await axios.get(`http://localhost:5000/QuestionPaper/Paper_Delete/${_id}/${Number(Index)}`);
      setRender(1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="FileNames">
      {getPaperName.map((value,Index) => {
        return (
          <div className="FileName">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "30px",
              }}
            >
              <h4 style={{ fontFamily: "'Edu NSW ACT Foundation', cursive" }}>
                {value}
              </h4>
              <RiDeleteBin6Line
                className="TestBin"
                onClick={() => {
                  SocietyDelete(props._id,Index);
                }}
                style={{ color: "#d00000" }}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FileData;
