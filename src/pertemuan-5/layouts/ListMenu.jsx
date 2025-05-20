// components/ListMenu.jsx
import { FaHome, FaChartBar, FaBox } from "react-icons/fa";

export default function ListMenu() {
    return (
        <div className="p-4 space-y-4">
            <div className="text-lg font-bold">Main Menu</div>
            <ul className="space-y-2">
                <li className="flex items-center space-x-2 cursor-pointer hover:text-hijau">
                    <FaHome /> <span>Dashboard</span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer hover:text-hijau">
                    <FaChartBar /> <span>Orders</span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer hover:text-hijau">
                    <FaBox /> <span>Customers</span>
                </li>
            </ul>
        </div>
    );
}
