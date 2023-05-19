

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
         // eslint-disable-next-line react-hooks/exhaustive-deps
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





            


    );
};

export default MyToys;