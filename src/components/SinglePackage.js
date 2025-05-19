import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SinglePackage = ({ destination, onDelete, onUpdate }) => {
    return (

        <div className="container border-2 rounded my-6 pl-10 pr-10 pb-8 transition-shadow duration-100 hover:shadow-lg" key={destination.id}>
            <h4 className="text-blue-400 text-lg font-bold text-center rounded-lg my-8 cursor-pointer">
                {destination.packageName}
            </h4>
            <div className="flex flex-row gap-9 justify-between">
                <div>
                    <p> <strong className="text-blue-400">Destination:</strong> {destination.country}</p>
                    <p> <strong className="text-blue-400">Description: </strong>{destination.description}</p>
                    <p> <strong className="text-blue-400">Price: </strong>$ {destination.price} CAD</p>
                    <p> <strong className="text-blue-400">Category: </strong>{destination.category}</p>

                </div>
                <div className="flex flex-col gap-y-5">
                    <Link to={`/edit/${destination.id}`}>
                        <FaEdit className="text-green-400 text-4xl cursor-pointer" />
                    </Link>
                    <FaTrash className="text-red-400 text-3xl cursor-pointer" onClick={() => onDelete(destination.id)} />

                </div>
            </div>
        </div >

    )
}
export default SinglePackage;