import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {



    const navigate = useNavigate();
    const toy = new useLoaderData();
    const { _id, toyPhotoURL, toyName, category, sellerName, price, details, sellerEmail, rating, quantity } = toy;


    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const toyPhotoURL = form.toyPhotoURL.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;



        const updatedToy = { toyName, sellerName, sellerEmail, toyPhotoURL, category, price, rating, quantity, details }
        console.log(updatedToy);

        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Toy Updated Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        navigate("/my-toys"); // Navigate to "my-toys" page
                    });
                }
            })
    }



    return (
        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Update Your Toy!</h3>
                            <form onSubmit={handleUpdateToy}>
                                <div className="mb-3">
                                    <label htmlFor="toyName" className="form-label">
                                        Toy Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="toyName"
                                        placeholder=""
                                        defaultValue={toyName}



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
                                        defaultValue={toyPhotoURL}



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
                                        defaultValue={sellerName}



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
                                        defaultValue={sellerEmail}
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
                                        defaultValue={category}



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
                                        defaultValue={price}



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
                                        defaultValue={rating}



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
                                        defaultValue={quantity}



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
                                        defaultValue={details}



                                    />
                                </div>
                                <button type="submit" className="btn btn-warning w-100">
                                    Update
                                </button>
                            </form>



                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default UpdateToy;