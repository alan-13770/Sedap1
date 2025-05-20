import { useState } from "react";
import InputGaji from "./components/InputGaji";

export default function HitungGajiForm() {
    const [gaji, setGaji] = useState("");

    const pajak = 0.11;
    const totalGaji = gaji ? gaji - (gaji * pajak) : 0;

    const handleInputChange = (e) => {
        let value = e.target.value;

        // Hapus angka 0 di depan kecuali angka nol tunggal
        value = value.replace(/^0+(?=\d)/, "");

        setGaji(value ? parseInt(value) : "");
    };

    return (
        <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Hitung Gaji Bersih</h2>
                
                <InputGaji
                    label="Gaji Pokok"
                    type="text"  // Ubah ke text untuk mengontrol input
                    placeholder="Masukkan jumlah gaji..."
                    value={gaji}
                    onChange={handleInputChange}
                />

                <div className="mb-3 text-gray-700">
                    Pajak: <b className="text-red-500">11%</b>
                </div>

                {gaji === "" || gaji <= 0 ? (
                    <div className="p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
                        <p className="font-semibold">Silakan masukkan gaji yang valid!</p>
                    </div>
                ) : (
                    <div className="p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
                        <p className="font-semibold">Total Take Home Pay (THP): Rp {totalGaji.toLocaleString("id-ID")}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
