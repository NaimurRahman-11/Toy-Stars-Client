
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";



const AllToys = () => {


    const [toys, setToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useTitle('All Toys');

    const allToys = useLoaderData();
    // const { _id, toyPhotoURL, toyName, category, sellerName, price, details, sellerEmail, rating, quantity } = toy;


    useEffect(() => {
        filterToys();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);


    const filterToys = () => {
        if (!searchQuery) {
            setToys(allToys);
        } else {
            const filteredToys = allToys.filter(toy =>
                toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setToys(filteredToys);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        filterToys();
    };


    return (
        <div>


            <div className="container">
                <form onSubmit={handleSearchSubmit} className="mt-2 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-md-6 mb-2">
                            <input className="form-control" type="text" value={searchQuery} onChange={handleSearch} placeholder="Search by toy name" />
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <button className="btn btn-warning btn-block" type="submit">Search</button>
                        </div>
                    </div>
                </form>

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
                                        <td>
                                            <img src={toy.toyPhotoURL} alt="" className="img-fluid" style={{ objectFit: "contain", height: "130px" }} />
                                        </td>
                                        <td>{toy.toyName}</td>
                                        <td>{toy.category}</td>
                                        <td>{toy.sellerName}</td>
                                        <td>{toy.price}$</td>
                                        <td>{toy.quantity}</td>
                                        <td>
                                            <Link to={`/view-details/${toy._id}`}>
                                                <button className="btn btn-warning">View Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {/* <div className="container">
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
                                    <td><img src={toy.toyPhotoURL} alt="" className="img-fluid" style={{ objectFit: "contain", height: "130px" }} /></td>
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
            </div> */}





        </div>
    );
};

export default AllToys;