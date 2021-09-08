import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/logo.png'

const ListNavbar = ({ke, label}) => {
    let match = useLocation();
    return (
        <li className="nav-item">
            <Link className={match.pathname===ke ? "nav-link active" : "nav-link"} aria-current="page" to={ke}>{label}</Link>
        </li>
    )
}

const NavLogin = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container">
                <Link className="navbar-brand" to="/home"><img src={Logo} alt='OB' /> Obat Hewan</Link>
                        <ul className="navbar-nav justify-content-end pe-3 ms-1">
                            <ListNavbar ke='/login' label='Login' />
                        </ul>
                </div>
            </nav>
            <div className="mb-5"></div>
        </>
    )
  }

export default NavLogin;