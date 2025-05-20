import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {frameworkData.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
                    <p className="text-gray-600 italic">{item.description}</p>
                    <p className="text-sm text-gray-500 mb-2">
                        Developed by: <span className="font-semibold text-blue-600">{item.developer}</span> ({item.year})
                    </p>
                    <a href={item.website} className="text-blue-500 font-medium hover:underline">Visit Website</a>
                    <div className="mt-2">
                        {item.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
