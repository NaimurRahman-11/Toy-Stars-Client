import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"><img src="https://i.ibb.co/bmn3yVK/logo.png" alt="" className='logo' /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav p-2 mx-auto mb-2 mb-lg-0">
                                <li className='nav-item me-3'>
                                    <Link to='/' className="nav-link myColor">Home</Link>
                                </li>
                                <li className='nav-item me-3'>
                                    <Link to='/blog' className="nav-link myColor">Blog</Link>
                                </li>
                                <li className='nav-item me-3'>
                                    <Link to='/blog' className="nav-link myColor">All Toys</Link>
                                </li>

                            </ul>
                            <div>



                            </div>


                            <Link to="/login"><button className="btn btn-outline-warning" type="submit">Login</button></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;