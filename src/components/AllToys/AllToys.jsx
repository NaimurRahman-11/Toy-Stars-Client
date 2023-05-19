
import { Link, useLoaderData } from "react-router-dom";



const AllToys = () => {


    const toys = useLoaderData();
    // const { _id, toyPhotoURL, toyName, category, sellerName, price, details, sellerEmail, rating, quantity } = toy;
    



    return (
        <div>


            <div className="container">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Toy Photo</th>
                                <th scope="col">Toy Name</th>
                                <th scope="col">Sub-Category</th>
                                <th scope="col">Seller Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Available Quantity</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            

                            {toys.map((toy) => (
                                <tr key={toy._id}>
                                    <td><img src={toy.toyPhotoURL} alt="" className="img-fluid" style={{ width: "100px", height: "130px" }} /></td>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.price}$</td>
                                    <td>{toy.quantity}</td>
                                    <td>
                                     <Link to={`/view-details/${toy._id}`}><button className="btn btn-warning">View Details</button></Link>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>

            
            
           
            
        </div>
    );
};

export default AllToys;