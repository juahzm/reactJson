import { useState } from "react";


const AddPackage = ({ onAdd }) => {
    const [packageName, setpackageName] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        if (!packageName) {
            alert('please add a Package name')
            return;
        }

        onAdd({ packageName, country, description, price, category })
        setpackageName('')
        setCountry('')
        setDescription('')
        setPrice('')
        setCategory('')

    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-lg font-bold mb-4 text-blue-700">Add Package</h2>
            <div>
                <input
                    type="text"
                    name="packageName"
                    value={packageName}
                    placeholder="Package Name"
                    className="w-full p-2 mb-2 border rounded"
                    onChange={(e) => setpackageName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="country"
                    value={country}
                    placeholder="Country"
                    className="w-full p-2 mb-2 border rounded"
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>

            <div>
                <textarea
                    name="description"
                    placeholder="Description"
                    value={description}
                    className="w-full p-2 mb-2 border rounded"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={price}
                    className="w-full p-2 mb-2 border rounded"
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="text"
                    name="category"
                    value={category}
                    placeholder="Category"
                    className="w-full p-2 mb-4 border rounded"
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div className="flex gap-4">
                <input type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" value="Save" />
            </div>
        </form>

    )
}
export default AddPackage;