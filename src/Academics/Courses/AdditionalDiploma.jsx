import React, { useEffect, useState } from 'react'


export default function AdditionalDiploma() {
    /* const showHide = (e) => {
        document.querySelectorAll(".content").forEach((content) => {
            if (content.style.display === "none") {
                content.style.display = "block"
                return
            }
            content.style.display = "none"
        })
    }
    const showHideOne = (e) => {
        document.querySelectorAll(".content-1").forEach((content) => {
            if (content.style.display === "none") {
                content.style.display = "block"
                return
            }
            content.style.display = "none"
        })
    }
    const showHideTwo = (e) => {
        document.querySelectorAll(".content-2").forEach((content) => {
            if (content.style.display === "none") {
                content.style.display = "block"
                return
            }
            content.style.display = "none"
        })
    } */
    const [isMarketingActive, setIsMarketingActive] = useState(false)
    const [isCloudActive, setIsCloudActive] = useState(false)
    const [isMobileActive, setIsMobileActive] = useState(false)
    return (
        <>
            <div className='diploma'>
                <h1>Additional Diplomas / Certification Courses</h1>
                <div className="list-wrapper">
                    <button onClick={() => {setIsMarketingActive(!isMarketingActive)}} >
                        DIGITAL MARKETING
                    </button>
                    {isMarketingActive && (
                        <>
                            <h1 class='content'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</h1>

                            <p class="content">–Interdum velit euismod in pellentesque. <br />
                                –Tristique et egestas quis ipsum suspendisse. <br />
                                –Nibh nisl condimentum id venenatis. <br />
                                –Diam volutpat commodo sed egestas egestas fringilla.
                            </p>
                        </>
                    )}
                    <button onClick={() => {setIsCloudActive(!isCloudActive)}}>
                        CLOUD COMPUTING
                    </button>

                    {isCloudActive && (
                        <>
                            <p class="content-1">–Interdum velit euismod in pellentesque. <br />
                                –Tristique et egestas quis ipsum suspendisse. <br />
                                –Nibh nisl condimentum id venenatis. <br />
                                –Diam volutpat commodo sed egestas egestas fringilla.
                            </p>
                        </>
                    )}
                    <button onClick={() => {setIsMobileActive(!isMobileActive)}}>
                        MOBILE APP DEVELOPMENT
                    </button>

                    {isMobileActive && (
                        <>
                            <p class="content-2">–Interdum velit euismod in pellentesque. <br />
                                –Tristique et egestas quis ipsum suspendisse. <br />
                                –Nibh nisl condimentum id venenatis. <br />
                                –Diam volutpat commodo sed egestas egestas fringilla.
                            </p>
                        </>
                    )}


                </div>
            </div>
        </>
    )
}
