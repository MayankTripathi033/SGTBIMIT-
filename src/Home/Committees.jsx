import React from 'react'
import { motion } from 'framer-motion'
export default function Committees() {
  const committees = [
    {
      name: "ANTI-RAGGING",
      image: require("../images/anti-ragging.png"),
      pdf: "../Assets/anti_ragging_poster.pdf",
      detail: "Ragging is a punishable offence as per Hon'ble Supreme Court order."
    },
    {
      name: "QUALITY POLICY",
      image: require("../images/quality-policy.png"),
      pdf: "../Assets/anti_ragging_poster.pdf",
      detail: "Top Recruiters having placement drives at SGTBIMIT."
    },
    {
      name: "SEXUAL HARRASMENT",
      image: require("../images/sexual-harrassment.png"),
      pdf: "../Assets/anti_ragging_poster.pdf",
      detail: "Ragging is a punishable offence as per Hon'ble Supreme Court order."
    },
    {
      name: "FEMALE FOETICIDE COMMITTEE",
      image: require("../images/foeticide.png"),
      pdf: "../Assets/anti_ragging_poster.pdf",
      detail: "Caste Discrimination Complaint."
    }

  ]
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
            <motion.a
              href={committee.pdf}
              download
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
              <img src={require("../images/pdf-icon.png")} alt="" />
              <span>Download PDF</span>
            </motion.a>
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
