

import ToyCard from "../ToyCard/ToyCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const MyToys = () => {


    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    
    const url = `http://localhost:5000/toys?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
        .then(data => setToys(data))
    } ,[])

    return (



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
                            <th scope="col">Details</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy) => (
                            <ToyCard
                                key={toy._id}
                                toy={toy}
                                toys={toys}
                                setToys={setToys}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>





        //     <div className="container">
        //   <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
        //     {toys.map((item) => (
        //       <div className="col mb-4 d-flex justify-content-center" key={item._id}>
        //         <div className="card">
        //           <img
        //             src={item.toyPhotoURL}
        //             className="card-img-top img-fluid"
        //             style={{ width: "200px", height: "230px" }}
        //             alt=""
        //           />
        //           <div className="card-body text-center">
        //             <h5 className="card-title">{item.sellerName}</h5>
        //             <p className="card-text">{item.details}</p>
        //           </div>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // </div>


    );
};

export default MyToys;