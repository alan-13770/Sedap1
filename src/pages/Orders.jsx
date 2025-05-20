import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../assets/orders.json";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customer_name: "",
    status: "Pending",
    total_price: "",
    order_date: ""
  });

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const filteredOrders = orders.filter((ord) =>
    ord.customer_name.toLowerCase().includes(searchCustomer.toLowerCase()) &&
    ord.status.toLowerCase().includes(searchStatus.toLowerCase())
  );

  const handleAddOrder = (e) => {
    e.preventDefault();
    const newId = orders.length + 1;
    setOrders([...orders, { order_id: newId, ...newOrder }]);
    setShowForm(false);
    setNewOrder({ customer_name: "", status: "Pending", total_price: "", order_date: "" });
  };

  return (
    <div className="p-4">
      <PageHeader title="Orders" breadcrumb={["Home", "Orders"]}>
        {!showForm && (
          <>
            <input
              type="text"
              placeholder="Search by customer..."
              value={searchCustomer}
              onChange={(e) => setSearchCustomer(e.target.value)}
              className="border px-3 py-2 rounded mr-2"
            />
            <input
              type="text"
              placeholder="Search by status..."
              value={searchStatus}
              onChange={(e) => setSearchStatus(e.target.value)}
              className="border px-3 py-2 rounded mr-2"
            />
          </>
        )}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          {showForm ? "Back to List" : "Add Order"}
        </button>
      </PageHeader>

      {showForm ? (
        <form onSubmit={handleAddOrder} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Customer Name</label>
            <input
              type="text"
              value={newOrder.customer_name}
              onChange={(e) => setNewOrder({ ...newOrder, customer_name: e.target.value })}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Status</label>
            <select
              value={newOrder.status}
              onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Total Price</label>
            <input
              type="number"
              value={newOrder.total_price}
              onChange={(e) => setNewOrder({ ...newOrder, total_price: e.target.value })}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Order Date</label>
            <input
              type="date"
              value={newOrder.order_date}
              onChange={(e) => setNewOrder({ ...newOrder, order_date: e.target.value })}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4 border">ID</th>
                <th className="py-2 px-4 border">Customer</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Total Price</th>
                <th className="py-2 px-4 border">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((ord) => (
                <tr key={ord.order_id} className="border-t">
                  <td className="py-2 px-4 border">{ord.order_id}</td>
                  <td className="py-2 px-4 border">{ord.customer_name}</td>
                  <td className="py-2 px-4 border">{ord.status}</td>
                  <td className="py-2 px-4 border">{ord.total_price}</td>
                  <td className="py-2 px-4 border">{ord.order_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}