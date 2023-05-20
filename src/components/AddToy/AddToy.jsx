import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";


const AddToy = () => {


    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const toyPhotoURL = form.toyPhotoURL.value;
        const sellerEmail = user.email;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;



        const newToy = {toyName, sellerName, sellerEmail, toyPhotoURL, category, price, rating, quantity, details}
        console.log(newToy);

        fetch('https://toy-stars-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Toy Added Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
        })
    }


    return (
        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Add Your Toy!</h3>
                            <form onSubmit={handleAddToy}>
                                <div className="mb-3">
                                    <label htmlFor="toyName" className="form-label">
                                        Toy Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="toyName"
                                        placeholder=""



                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="toyPhotoURL" className="form-label">
                                        Toy Photo URL
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="toyPhotoURL"
                                        placeholder=""



                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="sellerName" className="form-label">
                                        Seller Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="sellerName"
                                        placeholder=""



                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="sellerEmail" className="form-label">
                                        Seller Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="sellerEmail"
                                        placeholder=""
                                        defaultValue={user.email}
                                        required



                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">
                                        Sub-Category
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="category"
                                        placeholder=""



                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        placeholder=""



                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="rating" className="form-label">
                                        Rating
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="rating"
                                        placeholder=""



                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="quantity" className="form-label">
                                        Available Quantity
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="quantity"
                                        placeholder=""



                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="details" className="form-label">
                                        Detail Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="details"
                                        placeholder=""



                                    />
                                </div>
                                <button type="submit" className="btn btn-warning w-100">
                                    Add
                                </button>
                            </form>



                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddToy;