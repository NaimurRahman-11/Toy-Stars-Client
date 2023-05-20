import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";



const Register = () => {

    useTitle('Register');
    const navigate = useNavigate()

    const { createUser } = useContext(AuthContext);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);


        createUser(email, password)
            .then(() => {
                // console.log(result)
                // const user = result.user;
                // console.log(user);
                form.reset();


                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registration Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')


            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Register Here!</h3>
                            <form onSubmit={handleRegister}>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"


                                        required
                                    />
                                </div>

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
                                        maxLength="6" placeholder="(Maximum Length is 6 )"


                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="photoURL" className="form-label">
                                        Photo URL
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="photoURL"

                                    />
                                </div>
                                <button type="submit" className="btn btn-warning w-100">
                                    Submit
                                </button>
                            </form>
                            <p className="mt-3 text-center">
                                Already have an account?{" "}
                                <Link to="/login">Login here</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;