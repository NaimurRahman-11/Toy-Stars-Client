import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Register Here!</h3>
                            <form >

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