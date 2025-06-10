// components/PageHeader.jsx

export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div className="flex justify-between items-center mb-6">
      {/* Title dan Breadcrumb */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

        {/* Breadcrumb */}
        {/*{typeof breadcrumb === "string" ? (
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
        )}*/}
        <div className="breadcrumbs text-sm">
<div className="breadcrumbs text-sm">
  <ul>
    <li>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Home
      </a>
    </li>
    <li>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Documents
      </a>
    </li>
    <li>
      <span className="inline-flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Add Document
      </span>
    </li>
  </ul>
</div>
</div>
      </div>

      {/* Action Button di Sisi Kanan */}
      <div className="flex items-center space-x-2">
        {children}
      </div>
    </div>
  );
}
