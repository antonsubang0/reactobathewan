const Form = (props) => {
    return (
        <div className="col-lg-4 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="mb-2 px-5 py-3 position-relative">
                        <img className="img-fluid rounded" src={props.imagex} alt="hello"></img>
                        <input type="file" value={props.dataValue.img} onChange={props.pickerImage} className="imagepicker" id="image" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="judul" className="form-label">Judul</label>
                        <input type="text" value={props.dataValue.judul} onChange={props.inputForm} className="form-control" id="judul"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="indikasi" className="form-label">Indikasi</label>
                        <input type="text" value={props.dataValue.indikasi} onChange={props.inputForm} className="form-control" id="indikasi" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="hewan" className="form-label">Hewan</label>
                        <input type="text" value={props.dataValue.hewan} onChange={props.inputForm} className="form-control" id="hewan" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="ciri2" className="form-label">Ciri-ciri</label>
                        <input type="text" value={props.dataValue.ciri2} onChange={props.inputForm} className="form-control" id="ciri2" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
                        <textarea value={props.dataValue.deskripsi} onChange={props.inputForm} className="form-control" id="deskripsi" rows="3"></textarea>
                    </div>
                    <div className="text-center mt-3">
                        <button type="button" onClick={props.submit} className="btn btn-primary">Primary</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;