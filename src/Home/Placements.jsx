import React from 'react'
import useFetch from '../useFetch'

export default function Placements() {
  const { data: placementArray, isPending } = useFetch("http://localhost:5000/Placement_Intership/PlacementInterships_Display")


  return (

    <section className='placements'>
      <div className="placements-container">
        <h1>PLACEMENTS AND INTERNSHIPS</h1>
        {isPending && <div className="loading">Loading...</div> }
        {placementArray && <div className="placement-grid">
          {placementArray.map((placement, i) => {
            return <div className="place-card">
              <img src={`http://localhost:5000${placement.image}`} alt="cant load" className='placement-img' data-aos="zoom-out" data-aos-delay={`${i}00`}/>
              <h1> {placement.name} </h1>
              <p> {placement.companyName} </p>
            </div>
          })}
        </div>}
      </div>


    </section>

  )
}
