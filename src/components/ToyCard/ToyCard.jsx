import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ToyCard = ({ toy, toys, setToys }) => {

    const { _id, toyPhotoURL, toyName, category, sellerName, price, details } = toy;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id);
                            setToys(remaining);
                        }
                    })

            }
        })
    }

    return (

        <tr>
            <td><img src={toyPhotoURL} alt="" className="img-fluid" style={{ width: "100px", height: "130px" }} /></td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>{sellerName}</td>
            <td>{price}$</td>
            <td>{details}</td>
            <td>
                <Link><button className="btn btn-warning me-2"> <FaEdit></FaEdit> </button></Link>
                <Link><button onClick={() => handleDelete(_id)} className="btn btn-danger"> <FaTrash></FaTrash> </button></Link>
            </td>
        </tr>

    );
};

export default ToyCard;