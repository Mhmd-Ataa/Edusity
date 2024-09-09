import React from 'react';
import "./Program.css"

const Program = () => {
    return <>
        <div className="program pb-5 px-5">
            <div className="title text-center mb-5">
                <p className=" m-0" >OUR PROGRAM</p>
                <h2>What We Offer</h2>
            </div>
            <div className="row  justify-content-center">
                <div className="col-md-4 col-sm-6 ">
                    <div className="cardd bg-primary position-relative">

                        <div className="overlay position-absolute d-flex align-items-center justify-content-center ">
                            <div className="text-center">
                                <i class="fa-solid fa-book-open-reader mb-3"></i>
                                <h5>Gradution Degree</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-4 col-sm-6 ">
                    <div className="cardd bg-success position-relative">
                        <div className="overlay position-absolute d-flex align-items-center justify-content-center ">
                            <div className="text-center">
                                <i class="fa-solid fa-medal mb-3"></i>
                                <h5>Master Degree</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="cardd bg-info position-relative">
                        <div className="overlay position-absolute d-flex align-items-center justify-content-center ">
                            <div className="text-center">
                                <i class="fa-solid fa-user-graduate mb-3"></i>
                                <h5>Post Graduation</h5>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </>
}



export default Program;