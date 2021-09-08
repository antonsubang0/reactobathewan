import React, { useEffect } from "react";
import { useHistory } from "react-router";
import NavbarCs from "../component/NavbarCs";
import { statusLogin } from "../config/firebase/firebase";

const Home = () => {
    const history = useHistory();
    useEffect(()=>{
        document.querySelector('body').style.overflow  = 'auto';
        if (!statusLogin()) {
            history.push('/');   
        }
    },[history]);
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
