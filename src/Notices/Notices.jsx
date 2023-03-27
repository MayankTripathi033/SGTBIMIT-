import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Notices.css";
import anti_ragging_poster from "../Assets/anti_ragging_poster.pdf";

export default function Notice(){

    return(
        <>
            <Header />
            <Navbar />
            <>
            <div className="n_container">
                <h1>IMPORTANT NOTICES</h1>
                <div className="newsbox">
                    <div className="col">
                        <div className="b1">
                            <div className="nt">
                                <a href={anti_ragging_poster} download>Anti Ragging Posters</a>
                            </div>
                            <div className="nc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Natus asperiores aliquid, mollitia sit ullam cupiditate 
                                    qui quam ab fuga suscipit quod possimus perferendis enim 
                                    reiciendis error, laborum unde velit. Eius.
                                </p>
                            </div>
                        </div>
                        <div className="b2">
                            <div className="nt">
                                <a href={anti_ragging_poster} download>Topic 2</a>
                            </div>
                            <div className="nc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Natus asperiores aliquid, mollitia sit ullam cupiditate 
                                    qui quam ab fuga suscipit quod possimus perferendis enim 
                                    reiciendis error, laborum unde velit. Eius.
                                </p>
                            </div>
                        </div>
                        <div className="b3">
                            <div className="nt">
                                <a href={anti_ragging_poster} download>Topic 3</a>
                            </div>
                            <div className="nc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Natus asperiores aliquid, mollitia sit ullam cupiditate 
                                    qui quam ab fuga suscipit quod possimus perferendis enim 
                                    reiciendis error, laborum unde velit. Eius.
                                </p>
                            </div>
                        </div>
                        <div className="b4">
                            <div className="nt">
                                <a href={anti_ragging_poster} download>Topic 4</a>
                            </div>
                            <div className="nc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Natus asperiores aliquid, mollitia sit ullam cupiditate 
                                    qui quam ab fuga suscipit quod possimus perferendis enim 
                                    reiciendis error, laborum unde velit. Eius.
                                </p>
                            </div>
                        </div>
                        <div className="b5">
                            <div className="nt">
                                <a href={anti_ragging_poster} download>Topic 5</a>
                            </div>
                            <div className="nc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Natus asperiores aliquid, mollitia sit ullam cupiditate 
                                    qui quam ab fuga suscipit quod possimus perferendis enim 
                                    reiciendis error, laborum unde velit. Eius.
                                </p>
                            </div>
                        </div>
                        <div className="b6">
                            <div className="nt">
                                <a href={anti_ragging_poster} download>Topic 6</a>
                            </div>
                            <div className="nc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Natus asperiores aliquid, mollitia sit ullam cupiditate 
                                    qui quam ab fuga suscipit quod possimus perferendis enim 
                                    reiciendis error, laborum unde velit. Eius.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            <Footer />
        </>
    )
}