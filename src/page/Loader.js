import React, { useEffect } from "react";
import { useHistory } from "react-router";
import LogoCenter from '../assets/logo1.png';
import Footer from "../component/Footer";
import NavLogin from "../component/NavLogin";
import Section from "../component/Section";

const Loader = () => {
    const history = useHistory();
    useEffect(()=>{
        document.querySelector('body').style.overflow  = 'auto';
        const status = localStorage.getItem('loses');
        if (status && status !== '') {
            history.push('/home');              
        }
    },[history]);

    return (
        <div className='bg-dark bg-opacity-25'>
            <NavLogin />
            <div className="container px-0 bg-light">
                <div className="row justify-content-center ms-0 me-0">
                    <div className="col-8 col-sm-6 col-md-4 col-lg-3 mt-5">
                        <img className='img-fluid' src={LogoCenter} alt='Logo'></img>
                    </div>
                </div>
                <div className="row justify-content-center mt-1 mb-3 text-center ms-0 me-0">
                    <div className='col-8 col-sm-6 col-md-4 col-lg-3 h2'>Obat Hewan</div>
                    <p className='px-3'>Aplikasi Obat Hewan adalah Katalog Obat Hewan untuk mempermudah mencari obat hewan.</p>
                </div>
                <Section title='obat' color='bg-primary bg-opacity-75 px-5 py-3' />
                <Section title='vaksin' color='bg-primary bg-opacity-25 px-5 py-3' />
                <Section title='suplement' color='bg-primary bg-opacity-50 px-5 py-3' />
                <Section title='desinfektan' color='bg-primary bg-opacity-10 px-5 py-3' />
            </div>
            <Footer />
        </div>
    )
  }

export default Loader;
