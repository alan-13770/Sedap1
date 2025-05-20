import frameworkData from "./product.json";
import { useState } from "react";

export default function ProductList() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const filteredProducts = frameworkData.filter((product) => {
        const matchesSearch =
            product.title.toLowerCase().includes(_searchTerm) ||
            product.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag
            ? product.tags.includes(dataForm.selectedTag)
            : true;

        return matchesSearch && matchesTag;
    });

    const allTags = [...new Set(frameworkData.flatMap((product) => product.tags))];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <input
                    type="text"
                    name="searchTerm"
                    placeholder="Search products..."
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={dataForm.searchTerm}
                    onChange={handleChange}
                />

                <select
                    name="selectedTag"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={dataForm.selectedTag}
                    onChange={handleChange}
                >
                    <option value="">All Tags</option>
                    {allTags.map((tag, index) => (
                        <option key={index} value={tag}>{tag}</option>
                    ))}
                </select>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((item) => (
                        <div key={item.id} className="border p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition duration-300">
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h2>
                            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                            <p className="text-blue-600 font-bold text-lg">${item.price}</p>
                            <p className="text-sm text-gray-500">Brand: {item.brand}</p>
                            <div className="mt-3">
                                {item.tags.map((tag, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full mr-2">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
