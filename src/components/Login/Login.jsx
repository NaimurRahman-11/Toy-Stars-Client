import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"


                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"


                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-warning w-100">
                                    Login
                                </button>
                            </form>
                            <p className="mt-3 text-center">
                                New to Toy Stars?{" "}
                                <Link to="/register">Sign up here</Link>.
                            </p>

                            <small className='me-2'>Sign in with: </small>
                <Link><FaGoogle className='iconSize'></FaGoogle></Link>
                <Link className='ms-3'><FaGithub className='iconSize' ></FaGithub></Link>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;

