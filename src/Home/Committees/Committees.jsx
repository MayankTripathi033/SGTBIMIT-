import React from 'react'
import { motion } from 'framer-motion'
import { committees } from './constant'
import { Link } from 'react-router-dom'

export default function Committees() {

  return (
    <section className="committees">
      <div className="committees-container" >
        {committees.map((committee, i) => (
          <motion.div
            className="committee-item"
            key={committee.name}
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
              delay: i * 0.1,
            }}
          >
            <div
              className="committee-img"
            >
              <motion.img
                src={committee.image}
                alt="cant load"
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.2,
                  delay: i * 0.15,
                }}
              />
            </div>
            <Link
            to={`/committees/${committee.id}`}
            target='_blank'
            >
              <motion.a
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                  delay: i * 0.15,
                }}
              >
                <img src={require("../../images/pdf-icon.png")} alt="" />
                <span>View PDF</span>
              </motion.a>
            </Link>
            <motion.div
              className="committee-content"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.2,
                delay: i * 0.15,
              }}
            >
              <h1>
                {committee.name}
              </h1>
              <p>
                {committee.detail}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
