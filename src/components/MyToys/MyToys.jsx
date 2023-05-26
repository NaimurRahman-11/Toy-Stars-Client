

import ToyCard from "../ToyCard/ToyCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useTitle from "../hooks/useTitle";


const MyToys = () => {


    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    useTitle('My Toys');

    
    const url = `https://toy-stars-server.vercel.app/toys?email=${user.email}&sort=${sortOrder}`;

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => setToys(data))
          .catch(error => {
            console.error("Error fetching toys:", error);
          });
    }, [url]);
    

    const handleSortOrderChange = () => {
        const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newSortOrder);
      };

    return (



        <div className="container">

<button onClick={handleSortOrderChange} className="btn btn-warning mb-3">
          {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
        </button>
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

            <div>
        
      </div>
        </div>





            


    );
};

export default MyToys;

// This is for testing