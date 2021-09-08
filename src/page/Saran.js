import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import NavbarCs from "../component/NavbarCs";
import { readSaran, statusLogin } from "../config/firebase/firebase";

const Saran = () => {
    const history = useHistory();
    const [state, setstate] = useState([]);
    useEffect(()=>{
        document.querySelector('body').style.overflow  = 'auto';
        if (!statusLogin()) {
            history.push('/');   
        }
        const firstLoad = () => {
            readSaran().then(res => setstate(res));
        }
        firstLoad();
    },[history]);
    return (
        <>
            <NavbarCs />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-5">
                        <ul className="list-group">
                            {state.length > 0 ?
                            <>
                                { state.map((data, index)=>{
                                    return(
                                        <li className="list-group-item" key={index}><h5>{data.judul}</h5><h6>{data.kritik} </h6>By : {data.nama} ({data.email} - {data.date})</li>
                                    )
                                    })
                                }
                            </>
                            : <li className="list-group-item">Tidak ada saran.</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
  }

export default Saran;
