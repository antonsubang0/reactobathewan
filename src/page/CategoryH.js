import NavLogin from "../component/NavLogin";
import { useParams, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import image from '../assets/image.png';
import { readData } from '../config/firebase/firebase'
import Modal from "../component/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const CategoryH = () => {
    const history = useHistory();
    const {category} = useParams();
    const [dataApi, setDataApi] = useState([]);
    const [dataCategory, setdataCategory] = useState([]);
    const inputHandle = (e) => {
        setdataCategory([]);
        let array = [];
        // eslint-disable-next-line eqeqeq
        if(e.target.value==''){
          // eslint-disable-next-line array-callback-return
          dataApi.map((data) => {
            array.push(data);
          })
          setdataCategory(array);
        } else {
          // eslint-disable-next-line array-callback-return
          dataApi.map((data) => {
            // eslint-disable-next-line eqeqeq
            if(data.indikasi.toLowerCase().indexOf(e.target.value) > -1  || data.judul.toLowerCase().indexOf(e.target.value) > -1){
              array.push(data);
            }
          })
          setdataCategory(array);
          console.log(dataCategory);
        }
    }
    useEffect(()=> {
        document.querySelector('body').style.overflow  = 'auto';
        const firstLoad = async () => {
            await readData(category).then(res=> {setDataApi(res); setdataCategory(res);});
        }
        firstLoad();
    },[category, history]);
    const [detail, setdetail] = useState({
        sumber: '',
        date: '',
        deskripsi: '',
        hewan: '',
        id: '',
        img: '',
        indikasi: '',
        jenis: '',
        judul: '',
    });
    const toTitleCase = (str) => {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
    };
    const splite = (str, number) => {
        return str.split('',number).join('');
    };
    const setDetail = (e) => {
        setdetail(e);
    };
    const [imagebefore, setImagebefore] = useState(true);
    const bfloadImage = (e) => {
        setImagebefore(false);
    }

    return (
        <>
            <NavLogin />
            <div className="container pt-5">
                <div className="row">
                    <div className="col mb-3">
                        <div className="row mb-3">
                            <div className="col ms-3 me-3 rounded pt-2 bg-primary text-center">
                                <h3 className="text-light"><u>{toTitleCase(category)}</u></h3>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="col ms-3 me-3 pt-2">
                                <input type="text" className="form-control" onChange={inputHandle} placeholder="Search" />
                            </div>
                        </div>
                        <div className="row">
                            {dataCategory.map((data)=>{
                                return (
                                    <div className="col-lg-4 mb-3" onClick={() =>{setDetail(data)}} data-bs-toggle="modal" data-bs-target="#exampleModal" key={data.id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-5 col-md-4 col-lg-6">
                                                        { imagebefore ? <img className="card-img-top" src={image} alt='default' /> : null}
                                                    <LazyLoadImage className="card-img-top"
                                                        alt={data.judul}
                                                        afterLoad={bfloadImage}
                                                        effect="blur"
                                                        src={data.img} />
                                                    </div>
                                                    <div className="col-7 col-md-8 col-lg-6">
                                                        <h6>{data.judul}</h6>
                                                        <p className="card-text mb-1 fs-10">{splite(data.indikasi, 10)}</p>
                                                        <p className="card-text mb-1 fs-10">{data.hewan}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Modal detail={detail} />
        </>
    )
  }

export default CategoryH;
