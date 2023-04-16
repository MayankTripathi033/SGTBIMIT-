import React from 'react'
import Loader from '../Components/Loader'
import useFetch from '../useFetch'
import { motion } from 'framer-motion'


export default function Placements() {
  const { data: placementArray, isPending } = useFetch("http://localhost:5000/Placement_Intership/PlacementInterships_Display")

  return (

    <section className='placements'>
      <div className="placements-container">
        <motion.h1
          initial={{
            opacity: 0,
            x: 400,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            type: "spring"
          }}
        >
          Placements and Internships.

        </motion.h1>
        <div className="placement-bg"></div>
        {isPending && <Loader />}
        <motion.div className="placement-grid"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            type: "spring"
          }}>
          {placementArray &&
            placementArray.map((placement, i) => {
              return (
                <div className="place-card" key={placement._id}>
                  <img src={`http://localhost:5000/Placement_Intership/PlacementInterships_Image_Display/${placement._id}`} alt="cant load" className='placement-img' />
                  <div className='place-heading'> {placement.name}  </div>
                  <p> {placement.companyName} </p>
                </div>
              )
            })
          }
          <div className="place-card blank"></div>
        </motion.div>
      </div>


    </section>

  )
}
