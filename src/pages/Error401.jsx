export default function Error401() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white text-center p-4">
        <h1 className="text-9xl font-bold text-gray-800 mb-4">401</h1>
        <p className="text-2xl text-gray-600">Authorization Required</p>
      </div>
    );
  }