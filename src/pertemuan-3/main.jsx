import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import UserForm from "./userform";
import './tailwind.css';
import HitungGajiForm from "./HitungGaji";
import InputField from "./components/Inputfield";
import InputGaji from "./components/InputGaji";
import HitungHargaLaptopForm from "./HitungHargaLaptop";
import InputHarga from "./components/InputHarga";

createRoot (document.getElementById("root"))
    .render(
        <div>
            <TailwindCSS/>
            <UserForm/>
            <HitungGajiForm/>
            <InputGaji/>
            <InputField/>
            <HitungHargaLaptopForm/>
            <InputHarga/>
        </div>
    )