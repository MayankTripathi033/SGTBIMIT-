import React from 'react'
import '../society.css'
export default function Nss() {
  return (
    <div className='society'>
        <h1>NSS CELL</h1>
        <img src={require("../../images/NSS.jpg")} alt="cant load"  data-aos="fade-up"/>
        <p>Sri Guru Tegh Bahadur Institute of Management and Information Technology started NSS Cell (National Service Scheme) with the aim to encourage students to engage in social welfare activities, and to provide service to society without bias. It creates a sense of social responsibility through teacher and student involvement in constructive service with the motto of “Not Me But You”.In order to achieve this goal and with a thought of well being of mankind in our minds and hearts We (NSS- SGTBIMIT) readily invites the various non-governmental organizations (NGOs) to collaborate with us in order to carry out the various events for the upliftment of the poor, the society and the environment. The various NGOs can organize various events such as blood donation camps, health, and education camps to various orphanages and old age homes, litter-free campaigns, various awareness drives, etc along with our 100-plus volunteers who will readily volunteer in these events with their complete devotion and with their full positive attitude. All the NGOs are requested to take initiative for the betterment of the same and the NSS volunteers will give more than 100% to make that event a success.</p>
        <a className="nsslink"href="mailto:nssipu.sgtbimit@gmail.com">For any query contact:</a>
    </div>
  )
}
