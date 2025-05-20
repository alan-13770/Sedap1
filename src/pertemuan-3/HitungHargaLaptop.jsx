import { useState } from "react";
import InputHarga from "./components/InputHarga";

export default function HitungHargaLaptopForm() {
  const [harga, setHarga] = useState("");
  const [diskon, setDiskon] = useState("");
  const [pajak, setPajak] = useState("");

  // Hitung harga setelah pajak dan diskon
  const hitungHargaBersih = () => {
    const hargaNum = parseFloat(harga);
    const diskonNum = parseFloat(diskon) || 0; // Jika diskon kosong, anggap 0
    const pajakNum = parseFloat(pajak) || 0; // Jika pajak kosong, anggap 0

    if (hargaNum <= 0) return 0;

    const hargaSetelahDiskon = hargaNum - (hargaNum * diskonNum) / 100;
    const hargaSetelahPajak = hargaSetelahDiskon + (hargaSetelahDiskon * pajakNum) / 100;

    return hargaSetelahPajak;
  };

  const handleInputChange = (e, setState) => {
    let value = e.target.value;

    // Hapus angka 0 di depan kecuali angka nol tunggal
    value = value.replace(/^0+(?=\d)/, "");

    setState(value ? parseFloat(value) : "");
  };

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Hitung Harga Laptop</h2>

        {/* Input Harga Laptop */}
        <InputHarga
          label="Harga Laptop (Rp)"
          type="text"
          placeholder="Masukkan harga laptop..."
          value={harga}
          onChange={(e) => handleInputChange(e, setHarga)}
        />

        {/* Input Diskon */}
        <InputHarga
          label="Diskon (%)"
          type="text"
          placeholder="Masukkan diskon..."
          value={diskon}
          onChange={(e) => handleInputChange(e, setDiskon)}
        />

        {/* Input Pajak */}
        <InputHarga
          label="Pajak (%)"
          type="text"
          placeholder="Masukkan pajak..."
          value={pajak}
          onChange={(e) => handleInputChange(e, setPajak)}
        />

        {/* Hasil Perhitungan */}
        {harga === "" || harga <= 0 ? (
          <div className="p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
            <p className="font-semibold">Silakan masukkan harga yang valid!</p>
          </div>
        ) : (
          <div className="p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <p className="font-semibold">
              Harga Laptop Setelah Pajak dan Diskon: Rp {hitungHargaBersih().toLocaleString("id-ID")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}