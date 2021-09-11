import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Modal = (props) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Detail</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <LazyLoadImage className="img-fluid rounded text-center"
                            alt={props.detail.judul}
                            effect="blur"
                            src={props.detail.img} />
                        <h6 className="mt-3">{props.detail.judul}</h6>
                        <p className="card-text mb-1 fs-10"><span className="fw-bold">Mengobati :</span> {props.detail.indikasi}</p>
                        <p className="card-text mb-1 fs-10"><span className="fw-bold">Hewan :</span> {props.detail.hewan}</p>
                        <p className="card-text mb-1 fs-10"><span className="fw-bold">Deskripsi :</span> {props.detail.deskripsi}</p>
                        <p className="card-text mb-1 fs-10"><span className="fw-bold">Sumber :</span> {props.detail.sumber}</p>
                    </div>
                    <div className="modal-footer css">
                        { props.deleteitem ? <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={props.deleteitem}>Delete</button> : null}
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;