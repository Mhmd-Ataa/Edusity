import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import "./Navbar.css"

const Navbar = () => {

const [resp, setResp] = useState(false)
    function ShowMenu(){
        resp?setResp(false):setResp(true)

    }


    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setSticky(true) : setSticky(false)
        })

    }, [])
    return <>

        <nav className={` py-3 w-100   ${sticky ? "darkenNav" : ""}`}>
            <div className=" d-flex align-items-center  justify-content-between">
                <div className="logo">
                    Edusity
                </div>

                <div className={`nav d-flex align-items-center ${resp?"":"showMenu"} `}>
                    <ul className=" d-flex align-align-items-center  m-0">
                        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                        <li><Link to='program' smooth={true} offset={-130} duration={500}>Program</Link></li>
                        <li><Link to='about' smooth={true} offset={-110} duration={500}>About Us</Link></li>
                        <li><Link to='campus' smooth={true} offset={-80} duration={500}>Campus</Link></li>
                        <li><Link to='Testimonial' smooth={true} offset={-100} duration={500}>Testimonials</Link></li>
                    </ul>

                    <div className="btns">
                        <Link to='contacts' smooth={true} offset={0} duration={500} className="btn ">Contact Us</Link>

                    </div>

                </div>


            </div>

            <i class="fa-solid fa-bars ham" onClick={()=>ShowMenu()}></i>

        </nav>




    </>
}


export default Navbar;