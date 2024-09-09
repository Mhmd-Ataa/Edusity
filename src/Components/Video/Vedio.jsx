import React, { useRef } from 'react';
import vedio from '../../Assets/WhatsApp Video 2023-11-05 at 6.38.02 AM.mp4';
import "./Vedio.css"

const Vedio = ({setPlay , play}) => {

    const auto = useRef(null);
    const CloseVedio = (e) =>{
        if(e.target === auto.current){
            setPlay(false)
        }
    }

    return <>
    <div className={`vedio ${play?"":"hide"}`}  ref={auto} onClick={CloseVedio} >
        <video src={vedio} autoPlay muted controls></video>
    </div>
    </>
}



export default Vedio;