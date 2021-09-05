import React, { useEffect, useState } from "react";
import NavbarCs from "../component/NavbarCs";
import { readHistory } from "../config/firebase/firebase";

const History = () => {
    const [state, setstate] = useState([]);
    useEffect(()=>{
        const firstLoad = () => {
            readHistory().then(res => setstate(res));
        }
        firstLoad();
    },[]);
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
                                        <li className="list-group-item" key={index}>{data.date} - {data.item}</li>
                                    )
                                    })
                                }
                            </>
                            : <li className="list-group-item">Tidak ada history.</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
  }

export default History;
