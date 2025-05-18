import { useState } from "react";

const EditPackage = ({ }) => {


    <form >
        <h2 className="text-lg font-bold mb-4 text-blue-700">Edit Package</h2>
        <div>
            <input
                type="text"
                name="packageName"
                value=""
                placeholder="Package Name"
                className="w-full p-2 mb-2 border rounded"
                onChange=""
            />
        </div>
        <div>
            <input
                type="text"
                name="country"
                value=""
                placeholder="Country"
                className="w-full p-2 mb-2 border rounded"
                onChange=""
            />
        </div>

        <div>
            <textarea
                name="description"
                placeholder="Description"
                value=""
                className="w-full p-2 mb-2 border rounded"
                onChange=""
            />
        </div>
        <div>
            <input
                type="number"
                name="price"
                placeholder="Price"
                value=""
                className="w-full p-2 mb-2 border rounded"
                onChange=""
            />
        </div>

        <div>
            <input
                type="text"
                name="category"
                value=""
                placeholder="Category"
                className="w-full p-2 mb-4 border rounded"
                onChange=""
            />
        </div>
        <div className="flex gap-4">
            <input type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" value="Save" />
        </div>
    </form>


}

export default EditPackage;