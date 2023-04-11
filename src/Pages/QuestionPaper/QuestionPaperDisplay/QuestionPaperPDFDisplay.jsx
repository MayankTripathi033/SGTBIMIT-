import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const QuestionPaperPDFDisplay = () => {
    const { _id,name,index } = useParams();

  const [embedHeight, setEmbedHeight] = useState(600); // default height
  useEffect(() => {
    function updateEmbedHeight() {
      setEmbedHeight(window.innerHeight - 100); // adjust as needed
    }
    window.addEventListener("resize", updateEmbedHeight);
    updateEmbedHeight(); // initialize height on first render
    return () => window.removeEventListener("resize", updateEmbedHeight);
  }, []);

  return (
    <div>
      <embed
        src={`http://localhost:5000/QuestionPaper/Display/${_id}/${index}`}
        type="application/pdf"
        width="100%"
        download ={name}
        height={embedHeight}
      />
    </div>
  );
  }
export default QuestionPaperPDFDisplay;
