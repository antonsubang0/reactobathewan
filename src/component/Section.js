import image from '../assets/ab.png';
const Section = (props) => {
    const toTitleCase = (str) => {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
    };
    return (
        <section className={props.color}>
            <div className='row'>
                <div className='col'>
                    <h3>{ toTitleCase(props.title)}</h3>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-4 col-md-6 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-5 col-md-4 col-lg-6">
                                    <img className="card-img-top" src={image} alt='default' />
                                </div>
                                <div className="col-7 col-md-8 col-lg-6">
                                    <h6>djsajdhjhajdhj</h6>
                                    <p className="card-text mb-1 fs-10">dasnjdnjansjdjas</p>
                                    <p className="card-text mb-1 fs-10">dbsahjbdjbasjdbj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-5 col-md-4 col-lg-6">
                                    <img className="card-img-top" src={image} alt='default' />
                                </div>
                                <div className="col-7 col-md-8 col-lg-6">
                                    <h6>djsajdhjhajdhj</h6>
                                    <p className="card-text mb-1 fs-10">dasnjdnjansjdjas</p>
                                    <p className="card-text mb-1 fs-10">dbsahjbdjbasjdbj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-5 col-md-4 col-lg-6">
                                    <img className="card-img-top" src={image} alt='default' />
                                </div>
                                <div className="col-7 col-md-8 col-lg-6">
                                    <h6>djsajdhjhajdhj</h6>
                                    <p className="card-text mb-1 fs-10">dasnjdnjansjdjas</p>
                                    <p className="card-text mb-1 fs-10">dbsahjbdjbasjdbj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-5 col-md-4 col-lg-6">
                                    <img className="card-img-top" src={image} alt='default' />
                                </div>
                                <div className="col-7 col-md-8 col-lg-6">
                                    <h6>djsajdhjhajdhj</h6>
                                    <p className="card-text mb-1 fs-10">dasnjdnjansjdjas</p>
                                    <p className="card-text mb-1 fs-10">dbsahjbdjbasjdbj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-5 col-md-4 col-lg-6">
                                    <img className="card-img-top" src={image} alt='default' />
                                </div>
                                <div className="col-7 col-md-8 col-lg-6">
                                    <h6>djsajdhjhajdhj</h6>
                                    <p className="card-text mb-1 fs-10">dasnjdnjansjdjas</p>
                                    <p className="card-text mb-1 fs-10">dbsahjbdjbasjdbj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className="col-5 col-md-4 col-lg-6">
                                    <img className="card-img-top" src={image} alt='default' />
                                </div>
                                <div className="col-7 col-md-8 col-lg-6">
                                    <h6>djsajdhjhajdhj</h6>
                                    <p className="card-text mb-1 fs-10">dasnjdnjansjdjas</p>
                                    <p className="card-text mb-1 fs-10">dbsahjbdjbasjdbj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-end'>
                <div className='col-md-2 col-xl-1 col-3'>More ...</div>
            </div>
        </section>
    )
}

export default Section;