import React, { useEffect } from "react";
import NavbarCs from "../component/NavbarCs";

const Home = () => {
    useEffect(()=>{
        document.querySelector('body').style.overflow  = 'auto';
    },[]);
    return (
        <>
            <NavbarCs />
            <div className="container">
                <div className="row">
                    <div className="col text-center mt-5">
                        <h1>Selamat datang di aplikasi Obat Hewan</h1>
                    </div>
                </div>
            </div>
        </>
    )
  }

export default Home;
