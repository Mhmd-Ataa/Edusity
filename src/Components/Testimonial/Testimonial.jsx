import React, { useRef } from 'react';
import "./Testimonial.css"

const Testimonial = () => {

    const slide = useRef();
    let tx = 0;

    function SlideForward() {

        if (tx > -60) {
            tx -= 25
        }
        slide.current.style.transform = `translateX(${tx}%)`
    }
    function SlideBackword() {
        if (tx < 0) {
            tx += 25
        }
        slide.current.style.transform = `translateX(${tx}%)`
    }
    return <>
        <div className="Testimonial position-relative px-5 py-5">

            <div className="title text-center mb-5">
                <p className=" m-0" >TESTIMONIAL</p>
                <h2>What Student Say </h2>
            </div>

            <div className="prev position-absolute" onClick={() => SlideBackword()}>
                <i className="fa fa-arrow-left"></i>
            </div>
            <div className="next position-absolute" onClick={() => SlideForward()}>
                <i className="fa fa-arrow-right"></i>
            </div>

            <div className="slider">
                <ul className="d-flex p-0" ref={slide}>
                    <li>
                        <div className="slide ">
                            {/* contents */}
                            <div className="userInfo d-flex align-items-center mb-4 ">
                                <img src="" alt="" />
                                <div>
                                    <h3>William Jackson1</h3>
                                    <span>Edusity , USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ut, illo aspernatur architecto rerum non esse quos tenetur dolorem inventore nemo neque eveniet sed eligendi at officia. Architecto necessitatibus beatae, obcaecati, aliquid omnis rerum impedit perspiciatis harum perferendis iusto ex!</p>
                            {/* contents */}
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            {/* contents */}
                            <div className="userInfo d-flex align-items-center mb-4">
                                <img src="" alt="" />
                                <div>
                                    <h3>William Jackson2</h3>
                                    <span>Edusity , USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ut, illo aspernatur architecto rerum non esse quos tenetur dolorem inventore nemo neque eveniet sed eligendi at officia. Architecto necessitatibus beatae, obcaecati, aliquid omnis rerum impedit perspiciatis harum perferendis iusto ex!</p>
                            {/* contents */}
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            {/* contents */}
                            <div className="userInfo d-flex align-items-center mb-4">
                                <img src="" alt="" />
                                <div>
                                    <h3>William Jackson3</h3>
                                    <span>Edusity , USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ut, illo aspernatur architecto rerum non esse quos tenetur dolorem inventore nemo neque eveniet sed eligendi at officia. Architecto necessitatibus beatae, obcaecati, aliquid omnis rerum impedit perspiciatis harum perferendis iusto ex!</p>
                            {/* contents */}
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            {/* contents */}
                            <div className="userInfo d-flex align-items-center mb-4">
                                <img src="" alt="" />
                                <div>
                                    <h3>William Jackson4</h3>
                                    <span>Edusity , USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ut, illo aspernatur architecto rerum non esse quos tenetur dolorem inventore nemo neque eveniet sed eligendi at officia. Architecto necessitatibus beatae, obcaecati, aliquid omnis rerum impedit perspiciatis harum perferendis iusto ex!</p>
                            {/* contents */}
                        </div>
                    </li>
                </ul>
            </div>
        </div>


    </>
}


export default Testimonial;