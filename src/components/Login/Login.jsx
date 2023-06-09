import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../hooks/useTitle";


const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [errorMessage, setErrorMessage] = useState(null);


    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/';




    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setErrorMessage(error.message);
                console.log(error);
            });


    }


    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log('sign in', user);
                navigate(from, { replace: true });

            })
            .catch(error => {
                setErrorMessage(error.message);
                console.log(error);

            })
    }

    return (
        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>
                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"


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
                                        maxLength="6" placeholder="Enter your password"


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
                            <Link><FaGoogle onClick={handleGoogleSignIn} className='iconSize'></FaGoogle></Link>
                            <Link className='ms-3'><FaGithub className='iconSize' ></FaGithub></Link>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;

