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
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">Click</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Premium</h2>
                  <span className="text-xl">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Seamless cloud integration</span>
                  </li>
                  <li className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="line-through">Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
