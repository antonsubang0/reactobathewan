import { Link, useLocation, useHistory } from "react-router-dom";
import Logo from '../assets/logo.png'
import { logoutFire } from "../config/firebase/firebase";

const ListNavbar = ({ke, label}) => {
    let match = useLocation();
    return (
        <li className="nav-item">
            <Link className={match.pathname===ke ? "nav-link active" : "nav-link"} aria-current="page" to={ke}>{label}</Link>
        </li>
    )
}

const NavbarCs = () => {
    const history = useHistory();
    const logoutBtn = () => {
        logoutFire().then(res => res ? history.push('/') : null).catch((e)=>{ console.log(e)}); 
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container">
                <Link className="navbar-brand" to="/home"><img src={Logo} alt='OB' /> Obat Hewan</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end bg-primary" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" id="closeNav" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3 ms-1">
                            <ListNavbar ke='/home' label='Home' />
                            <ListNavbar ke='/home/obat' label='Obat' />
                            <ListNavbar ke='/home/vaksin' label='Vaksin' />
                            <ListNavbar ke='/home/suplement' label='Suplement' />
                            <ListNavbar ke='/home/desinfektan' label='Desinfektan' />
                            <ListNavbar ke='/home/saran' label='Saran' />
                            <ListNavbar ke='/home/history' label='History' />
                        </ul>
                        <div className='justify-content-end'>
                            <button className='btn btn-danger' onClick={logoutBtn}>Logout</button>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
            <div className="mb-5"></div>
        </>
    )
  }

export default NavbarCs;