import React from "react";
import { Link } from "react-router-dom";

const Loader = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center mt-5">
                    <Link aria-current="page" to='/home'>Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
  }

export default Loader;
