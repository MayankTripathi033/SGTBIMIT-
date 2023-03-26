import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminMenu from "../../../Components/AdminMenu/AdminMenu";
import AdminHeader from "../../../Components/AdminHeader/AdminHeader";
import "./Testimonial_Display.css";
import { Card, Col, Row } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

const Testimonial_Display = () => {
  const [getTestimonials, setTestimonial] = useState([]);
  const navigator = useNavigate("");
  const [render, setRender] = useState(0);


  useEffect(() => {
    const TestimonialsDataGet = async () => {
      try {
        const data = (
          await axios.get(
            "http://localhost:5000/Testimonial/Testimonial_Display"
          )
        ).data;
        console.log(data);
        setTestimonial(data);
        setRender(0)
      } catch (error) {
        console.log(error);
      }
    };
    TestimonialsDataGet();
  }, [render]);

  const TestimonialDelete = async (value) => {
    try {
      const _id = value;
      await axios.post("http://localhost:5000/Testimonial/Testimonial_Delete", {
        _id,
      });
      setRender(1)
    } catch (error) {
      console.log(error);
    }
  };

  const detailStyle = {
    fontFamily: "'Abel', sans-serif",
  };
  console.log(getTestimonials);
  return (
    <>
      <div className="Testimonial_DisplayContainer">
        <div className="SideBar">
          <AdminMenu />
        </div>
        <div className="Testimonial_DetailContainer">
          <AdminHeader />
          <div className="TesHeaderCard">
            <div className="TesDisplayHeading">
              <h1>Testimonials</h1>
            </div>
            <div className="TesDisplayCardContainer">
              {getTestimonials.map((value, index) => {
                return (
                  <Row gutter={16}>
                    <Col span={8}>
                      <div className="TesDisplayCard">
                        <Card
                          title={value.name}
                          bordered={false}
                          extra={
                            <RiDeleteBin6Line
                              className="TestBin"
                              onClick={() => {
                                TestimonialDelete(value._id);
                              }}
                              style={{ color: "#d00000" }}
                            />
                          }
                          style={{ width: 300, marginTop: 16, detailStyle }}
                          actions={[
                            <EditOutlined
                              key="edit"
                              onClick={() => {
                                navigator(
                                  `/admin/Testimonials_Update/${value._id}`
                                );
                              }}
                            />,
                          ]}
                        >
                          {value.detail}
                        </Card>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial_Display;
