import React,{useEffect,useState} from "react";
import { MdDateRange } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import "./AdminHeader.css"

const AdminHeader = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
          setTime(new Date());
        }, 1000);
      }, []);
  return (
    <>
      <div className="AdminHeaderContainer">
        <div className="Dashboardtopbar">
          <p className="clock">
            <MdDateRange />
            {new Date().toLocaleDateString("en-EN")}
          </p>
          <p className="clock">
            <GiSandsOfTime />
            {time.toLocaleTimeString("en-EN")}
          </p>
          {/* <button onClick={logoutaccount}>Logout</button> */}
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
