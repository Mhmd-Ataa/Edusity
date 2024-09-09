import React from 'react';
import "./About.css";
import img from '../../Assets/Capture.PNG'

const About = ({setPlay}) => {
    return <>
        <div className="about px-5 my-5">
            <div className="row align-items-center ">
                <div className="col-md-5   pe-5 position-relative">
                    <div className="play position-absolute d-flex align-items-center justify-content-center" onClick={()=>setPlay(true)}>
                        <i class="fa-solid fa-play "></i>
                    </div>

                    <div className="img">
                        <img src={img} alt="" srcset="" className="w-100" />
                    </div>
                </div>
                <div className="col-md-7 ">
                    <div className="info">
                        <div className="title  mb-3">
                            <p className=" mb-1" >ABOUT UNIVERSITY</p>
                            <h2>Nurturing Tomorrow's <br /> Leaders Today</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam, aut et dolorum commodi, officiis tempore porro accusamus iure mollitia, pariatur ipsa cumque quasi? Sequi ullam aspernatur soluta veritatis eius error, laborum, laboriosam voluptatibus ipsa praesentium qui, modi vero pariatur.</p>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum libero, iure, necessitatibus at saepe quidem expedita, quam optio repellendus consectetur non corrupti dolores explicabo natus ipsam ea magnam deserunt iste.</p>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt provident itaque ex sit, atque minus, officiis modi quos omnis distinctio praesentium odio? Molestiae qui quaerat animi recusandae sit numquam quisquam hic corporis!</p>
                    </div>

                </div>
            </div>
        </div>

    </>
}



export default About;