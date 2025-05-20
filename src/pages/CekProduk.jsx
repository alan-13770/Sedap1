import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
//import ordersData from "../assets/orders.json";
//import ProdukData from "../assets/product.json";

const ProdukData = [
  { kode_produk: "P001", nama_produk: "Laptop Asus", harga: 8500000, stok: 5 },
  { kode_produk: "P002", nama_produk: "iPhone 13", harga: 12000000, stok: 0 },
  { kode_produk: "P003", nama_produk: "Samsung Galaxy S22", harga: 9800000, stok: 3 },
  { kode_produk: "P004", nama_produk: "Headphone Sony", harga: 1200000, stok: 0 },
  { kode_produk: "P005", nama_produk: "Keyboard Mechanical", harga: 650000, stok: 12 }
];

export default function CekKetersediaanProduk() {
  const [produk, setProduk] = useState([]);
  const [kodeProduk, setKodeProduk] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setProduk(ProdukData);
  }, []);

  const handleSearch = () => {
    setIsSubmitted(true);
    
    // Validation
    if (!kodeProduk) {
      setError("Kode produk tidak boleh kosong");
      setSearchResult(null);
      return;
    }
    
    // Find product - handles numeric inputs by matching to P00X format
    let foundProduct = null;
    
    // Check if input is numeric only
    if (/^\d+$/.test(kodeProduk)) {
      // For numeric inputs, search for product with code P00{input}
      // For example, input "1" will search for "P001"
      const formattedCode = "P" + kodeProduk.padStart(3, "0");
      foundProduct = produk.find(item => item.kode_produk === formattedCode);
    } else {
      // Normal search for exact matches
      foundProduct = produk.find(item => 
        item.kode_produk.toLowerCase() === kodeProduk.toLowerCase()
      );
    }
    
    if (foundProduct) {
      setSearchResult(foundProduct);
      setError("");
    } else {
      setSearchResult(null);
      setError("Kode produk tidak ditemukan");
    }
  };
  
  const resetForm = () => {
    setKodeProduk("");
    setSearchResult(null);
    setError("");
    setIsSubmitted(false);
  };

  return (
    <div className="p-4">
      <PageHeader title="Cek Ketersediaan Produk" breadcrumb={["Home", "Produk", "Cek Ketersediaan"]}>
        <button
          onClick={resetForm}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Reset
        </button>
      </PageHeader>

      <div className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kode Produk
            </label>
            <input
              type="text"
              value={kodeProduk}
              onChange={(e) => setKodeProduk(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md ${isSubmitted && error ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Masukkan kode produk"
            />
            {isSubmitted && error && (
              <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
          </div>
          <button
            onClick={handleSearch}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Cek Ketersediaan
          </button>
        </div>

        {searchResult && (
          <div className="mt-8 p-4 border rounded-lg">
            {searchResult.stok > 0 ? (
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-green-700">
                    ✅ Produk {searchResult.nama_produk} tersedia dengan harga Rp{searchResult.harga.toLocaleString()}
                  </h3>
                  <p className="text-green-600">
                    Stok tersedia: {searchResult.stok}
                  </p>
                  <div className="mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Tersedia di keranjang belanja</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-yellow-700">
                    ⚠️ Produk {searchResult.nama_produk} saat ini sedang habis.
                  </h3>
                  <div className="mt-2 flex items-center">
                    <div className="bg-red-100 text-red-700 px-3 py-1 rounded-md font-bold inline-block transform rotate-0">
                      OUT OF STOCK
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {isSubmitted && error === "Kode produk tidak ditemukan" && (
          <div className="mt-8 p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-red-700">
                  ❌ Kode produk tidak ditemukan.
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}