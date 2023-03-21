import React from 'react'

export default function Map() {
  return (
    <section className="map-section">
      <div className="map">
        <div className='address' data-aos="fade-right" data-aos-offset="300">
          <div className="map-btns">
            <button type='button' className='upper-btns'> RESEARCH AND PUBLICATION</button>
            <button type='button' className='upper-btns'>CAMPUS TOUR</button>
            <button type='button' className='upper-btns'>DOWNLOAD BROCHURE</button>
          </div>
          <h1> GET IN TOUCH: </h1>
          <p className='address-content'>Sri Guru Tegh Bahadur Institute Of Management and Information Technology <br />
            Add:Adjacent to Gurudwara Nanak Piao, State Bank Colony, Near Model Town Metro Station, Delhi-110009 <br />
            Tel:+91-9899333224, <br />
            Email:sgtbimit@hotmail.com</p>
          <p>Subscribe to our newsletter:</p>
          <div className="lower">
          <input placeholder="Email" name="" id="" className='lower-input' />
          <button type='button' className='lower-btn'>SUBMIT</button>
          </div>
        </div>
        <div className='map-loc' data-aos="fade-left">
          <iframe className='map-location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.913782445779!2d77.18919345053924!3d28.69222558230785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d020b038fd133%3A0xf8adb1d0f49de35b!2sShri%20Guru%20Tegh%20Bahadur%20Institute%20of%20Management%20and%20Information%20Technology!5e0!3m2!1sen!2sin!4v1679125833960!5m2!1sen!2sin" title='map-frame'></iframe>
        </div>

      </div>
    </section>
  )
}
