import React, { useEffect } from "react";
import useFetch from "../../useFetch";
import { Carousel } from "react-responsive-carousel";
import "./adminis.css";
import { Header, Navbar, Footer, Loader } from '../../Components'
export default function AdminisCarousel() {

  const { data: adminisArray, isPending, error } = useFetch("http://localhost:5000/Administration/Administration_Display")

  useEffect(() => {
    document
      .querySelector(".about-nav-link")
      .classList.remove("dropdown-active-item");
  }, []);

    const numAscending = adminisArray ? [...adminisArray].sort((a, b) => a.Index - b.Index) : adminisArray
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <section className="adminis-section">
        {isPending && <Loader />}
        {error && <div className="error">{error}</div> }
        <Carousel

          interval={4000}
          className="adminis-carousel"
          autoPlay={true}
          selectedItem={0}
        >
          {
            numAscending?.map((adminis) => (
              <div className="adminis" key={adminis?.Index}>
                <img
                  src={`http://localhost:5000/Administration/AdministrationImageDisplay/${adminis._id}`}
                  alt="cant load"
                  className="adminis-img"
                />
                <h2 className="adminis-heading">
                  {adminis?.name}
                  <strong className="position"> {adminis?.position}</strong>
                </h2>
                <strong className="short-note">
                  WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!
                  <strong>{adminis.shortNote}</strong>
                </strong>
                <p className="long-note"> {adminis?.longNote} </p>
              </div>
            ))}
        </Carousel>
      </section>
      <Footer></Footer>
    </>
  );
}
