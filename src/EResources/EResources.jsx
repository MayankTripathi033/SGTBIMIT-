import React from 'react'
import './eresources.css'
import {Link} from 'react-router-dom'

export default function EResources() {
    return (
        <section className='e-resources'>
            <div className="e-resources-container">
                <h1>SGTBIMIT Digital Liberary (E-Resources)</h1>
                <div className="e-resources-flex">
                    <div className="resources-headings">
                        <div className="publisher-heading">
                            Publisher
                        </div>
                        <div className="url-heading">
                            URL
                        </div>
                    </div>
                    {[...Array(13)].map((x, i) => {
                        return (
                            <div className="e-resources-item" key={i}>
                                <div className="publisher-item">
                                    SGTBIMIT
                                </div>
                                <div className="url-item">
                                    <Link to = {"http://sciencecongress.nic.in/institutional_members.php"}>http://sciencecongress.nic.in/institutional_members.php</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}
