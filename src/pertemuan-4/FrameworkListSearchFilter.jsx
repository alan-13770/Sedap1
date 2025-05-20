import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
    
    //const [searchTerm, setSearchTerm] = useState("");
    //const [selectedTag, setSelectedTag] = useState("");

    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
        /*Tambah state lain beserta default value*/
        });

        const handleChange = (evt) => {
            const { name, value } = evt.target;
            setDataForm({
                ...dataForm,
                [name]: value,
            });
        };


    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name.toLowerCase().includes(_searchTerm) ||
            framework.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag
            ? framework.tags.includes(dataForm.selectedTag)
            : true;

        return matchesSearch && matchesTag;
    });
    const allTags = [
        ...new Set(filteredFrameworks.flatMap((framework) => framework.tags)),
    ];
    return (
        <div className="p-8">
            <input
                type="text"
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.searchTerm}
                onChange={handleChange}
            />

            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.selectedTag}
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>
            <div className="grid grid-cols-3 md:grid-cols-3">
            {filteredFrameworks.map((item) => (
                <div
                    key={item.id}
                    className="border p-4 mb-4 rounded-lg shadow-md bg-white"
                >
                    <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
                    <p className="text-gray-600 italic">{item.description}</p>
                    <p className="text-sm text-gray-500 mb-2">
                        Developed by:{" "}
                        <span className="font-semibold text-blue-600">
                            {item.developer}
                        </span>{" "}
                        ({item.year})
                    </p>
                    <a
                        href={item.website}
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Visit Website
                    </a>
                    <div className="mt-2">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
            </div>
           
        
    );
}
