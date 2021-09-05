import { Link, useLocation } from "react-router-dom";

const ListNavbar = ({ke, label}) => {
    let match = useLocation();
    return (
        <li className="nav-item">
            <Link className={match.pathname===ke ? "nav-link active" : "nav-link"} aria-current="page" to={ke}>{label}</Link>
        </li>
    )
}

const NavbarCs = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container">
                <Link className="navbar-brand" to="#">Obat Hewan</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <ListNavbar ke='/home' label='Home' />
                        <ListNavbar ke='/home/obat' label='Obat' />
                        <ListNavbar ke='/home/vaksin' label='Vaksin' />
                        <ListNavbar ke='/home/suplement' label='Suplement' />
                        <ListNavbar ke='/home/pakan' label='Pakan' />
                        <ListNavbar ke='/home/saran' label='Saran' />
                        <ListNavbar ke='/home/history' label='History' />
                    </ul>
                </div>
                </div>
            </nav>
            <div className="mb-5"></div>
        </>
    )
  }

export default NavbarCs;