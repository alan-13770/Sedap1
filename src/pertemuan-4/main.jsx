import { createRoot } from "react-dom/client";
import "./tailwind.css";
import TailwindCSS from "./TailwindCSS";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchList from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import ProductList from "./productList";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <FrameworkList/> */}
    <FrameworkListSearchList/>
    <ResponsiveDesign />
    <ProductList/>
  </div>
);
