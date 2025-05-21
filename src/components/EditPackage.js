import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const EditPackage = ({ destinations, onEdit }) => {

    const { id } = useParams(); //get the id

    //bring the formData empty
    const [formData, setFormData] = useState({

        packageName: "",
        country: "",
        description: "",
        price: "",
        category: ""

    });

    //retrieve data

    useEffect(() => {
        async function fetchPackage() {
            const res = await fetch(`http://localhost:5001/destinations/${id}`);
            const data = await res.json();
            setFormData(data);
        }

        fetchPackage();
    }, [id]);



    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    //Update DB
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        onEdit(id, formData);
        navigate("/packages");
    };



    return (

        < form onSubmit={handleSubmit} >
            <h2 className="text-lg font-bold mb-4 text-blue-700">Edit Package</h2>
            <div>
                <input
                    type="text"
                    name="packageName"
                    value={formData.packageName}
                    placeholder="Package Name"
                    className="w-full p-2 mb-2 border rounded"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    placeholder="Country"
                    className="w-full p-2 mb-2 border rounded"
                    onChange={handleChange}
                />
            </div>

            <div>
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    className="w-full p-2 mb-2 border rounded"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    className="w-full p-2 mb-2 border rounded"
                    onChange={handleChange}
                />
            </div>

            <div>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    placeholder="Category"
                    className="w-full p-2 mb-4 border rounded"
                    onChange={handleChange}
                />
            </div>
            <div className="flex gap-4">
                <input type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" value="Save" />
            </div>

            <div className='mt-7 p-1 border flex justify-center rounded text-center w-max mx-auto'>
                <Link className="font-bold  text-gray-400" to="/packages"> Back</Link>
            </div>
        </form >


    )

}

export default EditPackage;
