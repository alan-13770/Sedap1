import { BiUserPin } from "react-icons/bi"; 
import { MdPeople, MdShoppingCart, MdSpaceDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export default function ListMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
    return (
        <div className="p-4 space-y-4">
            <div className="text-lg font-bold">Main Menu</div>
            <ul className="space-y-2">
                <li>
                    <NavLink id="menu-1" to="/" className={menuClass}>
                        <MdSpaceDashboard className="mr-4 text-xl" />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink id="menu-2" to="/orders" className={menuClass}>
                        <MdShoppingCart className="mr-4 text-xl" />
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink id="menu-3" to="/customers" className={menuClass}>
                        <MdPeople className="mr-4 text-xl" />
                        Customers
                    </NavLink>
                </li>

                <li>
                    <NavLink id="menu-3" to="/userlist" className={menuClass}>
                        <BiUserPin  className="mr-4 text-xl" />
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink id="menu-3" to="/" className={menuClass}>
                        <BiUserPin  className="mr-4 text-xl" />
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink id="menu-4" to="/CekProduk" className={menuClass}>
                        <MdShoppingCart className="mr-4 text-xl" />
                        Cek Produk
                    </NavLink>
                </li>
            </ul>
            <div className="text-lg font-bold pt-6">Error Pages</div>
            <ul className="space-y-2">
                <li>
                    <NavLink to="/400" className={menuClass}>Error 400</NavLink>
                </li>
                <li>
                    <NavLink to="/401" className={menuClass}>Error 401</NavLink>
                </li>
                <li>
                    <NavLink to="/403" className={menuClass}>Error 403</NavLink>
                </li>
            </ul>
        </div>
    );
}
