// components/PageHeader.jsx

export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div className="flex justify-between items-center mb-6">
      {/* Title dan Breadcrumb */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

        {/* Breadcrumb */}
        {typeof breadcrumb === "string" ? (
          <p className="text-sm text-gray-500">{breadcrumb}</p>
        ) : (
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            {breadcrumb.map((item, index) => (
              <span key={index}>
                {item}
                {index < breadcrumb.length - 1 && " "} 
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Button di Sisi Kanan */}
      <div className="flex items-center space-x-2">
        {children}
      </div>
    </div>
  );
}
