// pages/Dashboard.jsx

import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 min-h-screen">
        <div id="dashboard-container">
          <PageHeader title="Dashboard" breadcrumb={["Home", "Dashboard"]}>
            <button className="bg-hijau text-white px-4 py-2 rounded-lg">
              Add
            </button>
            <button className="bg-blue-600 text-gray-800 px-4 py-2 rounded-lg">
              Export
            </button>
            <button className="bg-red-500 text-gray-800 px-4 py-2 rounded-lg">
              Kembali
            </button>
          </PageHeader>

          <div
            id="dashboard-grid"
            className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            {/* Orders Card */}
            <div
              id="dashboard-orders"
              className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
            >
              <div id="orders-icon" className="bg-hijau rounded-full p-4">
                <FaShoppingCart className="text-3xl text-white" />
              </div>
              <div id="orders-info" className="flex flex-col">
                <span id="orders-count" className="text-2xl font-bold">
                  75
                </span>
                <span id="orders-text" className="text-gray-400">
                  Total Orders
                </span>
              </div>
            </div>

            {/* Delivered Card */}
            <div
              id="dashboard-delivered"
              className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
            >
              <div id="delivered-icon" className="bg-biru rounded-full p-4">
                <FaTruck className="text-3xl text-white" />
              </div>
              <div id="delivered-info" className="flex flex-col">
                <span id="delivered-count" className="text-2xl font-bold">
                  175
                </span>
                <span id="delivered-text" className="text-gray-400">
                  Total Delivered
                </span>
              </div>
            </div>

            {/* Canceled Card */}
            <div
              id="dashboard-canceled"
              className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
            >
              <div id="canceled-icon" className="bg-merah rounded-full p-4">
                <FaBan className="text-3xl text-white" />
              </div>
              <div id="canceled-info" className="flex flex-col">
                <span id="canceled-count" className="text-2xl font-bold">
                  40
                </span>
                <span id="canceled-text" className="text-gray-400">
                  Total Canceled
                </span>
              </div>
            </div>

            {/* Revenue Card */}
            <div
              id="dashboard-revenue"
              className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4"
            >
              <div id="revenue-icon" className="bg-emas rounded-full p-4">
                <FaDollarSign className="text-3xl text-white" />
              </div>
              <div id="revenue-info" className="flex flex-col">
                <span id="revenue-amount" className="text-2xl font-bold">
                  Rp.128
                </span>
                <span id="revenue-text" className="text-gray-400">
                  Total Revenue
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
