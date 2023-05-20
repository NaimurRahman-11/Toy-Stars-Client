import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";



const ViewDetails = () => {

    const { id } = useParams();

    const [toy, setToy] = useState(null);

    useEffect(() => {

        const fetchToyDetails = async () => {
            try {

                const response = await fetch(`https://toy-stars-server.vercel.app/toys/${id}`);
                const data = await response.json();
                setToy(data);
            } catch (error) {
                console.error("Error fetching toy details:", error);
            }
        };

        fetchToyDetails();
    }, [id]);



    return (
        <div>
            {toy && (
                <div className="container">
                    <div className="row align-items-center p-3 mb-5">
                        <div className="col-md-6">
                            <img src={toy.toyPhotoURL} alt='' className="img-fluid" style={{ objectFit: "contain", height: "430px" }} />
                        </div>
                        <div className="col-md-4 shadow rounded p-5">
                            <h2>Toy Name: {toy.toyName}</h2>
                            <p className="text-muted">{toy.details}</p>
                            <p>Category: &apos;{ toy.category}&apos;</p>
                            <p className="">Seller: {toy.sellerName}</p>
                            <p>Rating: <Rating
                              placeholderRating={toy.rating}
                              readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                              fullSymbol={<FaStar></FaStar>}>
                              
                            </Rating> ({ (toy.rating)})</p>
                            
                            <h3>Price: ${toy.price}</h3>
                            <Link to='/all-toys'><button className="btn btn-warning mt-3">Back to All Toys</button></Link>
                            <Link to=''><button className="btn btn-warning mt-3 ms-2">Purchase</button></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewDetails;