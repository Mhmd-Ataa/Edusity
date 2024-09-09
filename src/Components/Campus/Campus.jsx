import React from 'react';
import "./Campus.css"

const Campus = () => {
    return <>
        <div className="campus py-5 px-5 ">
            <div className="title text-center mb-5">
                <p className=" m-0" >GALLERY</p>
                <h2>Campus Photos</h2>
            </div>
            <div className="row  justify-content-center mt-5">
                <div className="col-md-3 col-sm-6 ">
                    <div className="cardd bg-primary">
                        h
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 ">
                    <div className="cardd bg-success">
                        h

                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="cardd bg-info">

                        h
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="cardd bg-success">

                        h
                    </div>
                </div>

            </div>

            <div className="btns text-center mt-5">
                <a href="" className="  btn ">See more here <i className="fa fa-arrow-right ms-2"></i></a>
            </div>

        </div>

    </>
}



export default Campus;