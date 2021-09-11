import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { readData } from '../config/firebase/firebase';

const Section = (props) => {
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
    const [dataSection, setDataSection] = useState([]);
    useEffect(()=>{
        readData(props.title).then((res)=>{
            if (res.length > 0) {
                const array = [];
                for (let index = res.length-1; index > res.length-7 && index> 0; index--) {
                    const element = res[index];
                    array.push(element);
                }
                setDataSection(array);
            }
        })
    },[props.title]);
    return (
        <section className={props.color}>
            <div className='row'>
                <div className='col'>
                    <h3>{ toTitleCase(props.title)}</h3>
                </div>
            </div>
            <div className='row'>
                {dataSection ? dataSection.map((data)=>{
                    return (
                        <div className="col-lg-4 col-md-6 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {props.detailact(data)}} key={data.id}>
                            <div className="card">
                                <div className="card-body">
                                    <div className='row'>
                                        <div className="col-5 col-md-4 col-lg-6">
                                            <img className="card-img-top" src={data.img} alt={data.title} />
                                        </div>
                                        <div className="col-7 col-md-8 col-lg-6">
                                            <h6>{data.title}</h6>
                                            <p className="card-text mb-1 fs-10">{data.hewan}</p>
                                            <p className="card-text mb-1 fs-10">{splite(data.indikasi, 10)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : null }
            </div>
            <div className='row'>
                <div className='col text-end'> <Link to={`/category/${props.title}`} ><button className='btn btn-light'>More...</button></Link></div>
            </div>
        </section>
    )
}

export default Section;