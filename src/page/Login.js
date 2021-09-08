import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import LogoCenter from '../assets/logo1.png';
import { registerFire } from "../config/firebase/firebase";

const Login = () => {
    const history = useHistory();
    useEffect(()=>{
        const status = localStorage.getItem('loses');
        if (status && status !== '') {
            history.push('/home');              
        }
    },[history]);
    const [dataPost, setdataPost] = useState({
        email :'',
        password : ''
    });
    const inputForm = (e) => {
        const { id, value } = e.target;
        setdataPost(prevState => ({
                ...prevState,
                [id]: value.split('\n').join(' ')
        }));
    };
    const [error, seterror] = useState(false);
    const sumbitForm = (e) => {
        e.preventDefault();
        seterror(false);
        registerFire(dataPost)
        .then((res) => res ? history.push('/home') : null).catch(() => seterror(true));
    }

    return (
        <div className='logincs bg-primary bg-opacity-50'>
            <div className='card col-xl-3 col-md-4 col-sm-6 col-12 p-3'>
                <form className="form-signin text-center" onSubmit={sumbitForm}>
                    <img className="mb-4" src={LogoCenter} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    {error ? <p className='text-danger fs-6'>Email dan Password tidak benar</p> : null }
                    <label htmlFor="email" className="sr-only mb-2">Email address</label>
                    <input type="email" id="email" onChange={inputForm} className="form-control mb-3" placeholder="Email address" required autoFocus />
                    <label htmlFor="password" className="sr-only mb-2">Password</label>
                    <input type="password" id="password" onChange={inputForm} className="form-control mb-3" placeholder="Password" required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-3 mb-3 text-muted">&copy; 2021-2023</p>
                </form>
            </div>
        </div>
    )
  }

export default Login;