import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../assets/customers.json";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    customer_name: "",
    email: "",
    phone: "",
    loyalty: "Bronze"
  });

  useEffect(() => {
    setCustomers(customersData);
  }, []);

  const filteredCustomers = customers.filter((cust) =>
    cust.customer_name.toLowerCase().includes(searchName.toLowerCase()) &&
    cust.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  const handleAddCustomer = (e) => {
    e.preventDefault();
    const newId = customers.length + 1;
    setCustomers([...customers, { customer_id: newId, ...newCustomer }]);
    setShowForm(false);
    setNewCustomer({ customer_name: "", email: "", phone: "", loyalty: "Bronze" });
  };

  return (
    <div className="p-4">
      <PageHeader title="Customers" breadcrumb={["Home", "Customers"]}>
        {!showForm && (
          <>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="border px-3 py-2 rounded mr-2"
            />
            <input
              type="text"
              placeholder="Search by email..."
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              className="border px-3 py-2 rounded mr-2"
            />
          </>
        )}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          {showForm ? "Back to List" : "Add Customer"}
        </button>
      </PageHeader>

      {showForm ? (
        <form onSubmit={handleAddCustomer} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              value={newCustomer.customer_name}
              onChange={(e) => setNewCustomer({ ...newCustomer, customer_name: e.target.value })}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              value={newCustomer.email}
              onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              type="text"
              value={newCustomer.phone}
              onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Loyalty</label>
            <select
              value={newCustomer.loyalty}
              onChange={(e) => setNewCustomer({ ...newCustomer, loyalty: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
            </select>
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
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((cust) => (
                <tr key={cust.customer_id} className="border-t">
                  <td className="py-2 px-4 border">{cust.customer_id}</td>
                  <td className="py-2 px-4 border">{cust.customer_name}</td>
                  <td className="py-2 px-4 border">{cust.email}</td>
                  <td className="py-2 px-4 border">{cust.phone}</td>
                  <td className="py-2 px-4 border">{cust.loyalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}