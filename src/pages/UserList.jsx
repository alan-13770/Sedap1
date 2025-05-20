import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImSpinner2 } from 'react-icons/im';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then(res => {
                setUsers(res.data.users);
            })
            .catch(err => {
                setError("Gagal mengambil data pengguna.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Daftar Pengguna</h2>

            {loading && (
                <div className="flex items-center text-sm text-gray-600 mb-4">
                    <ImSpinner2 className="me-2 animate-spin" />
                    Memuat data pengguna...
                </div>
            )}

            {error && (
                <div className="bg-red-200 p-4 text-sm text-gray-700 rounded flex items-center mb-4">
                    <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
                    {error}
                </div>
            )}

            {!loading && !error && (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">No</th>
                                <th className="py-2 px-4 border-b">Nama</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Username</th>
                                <th className="py-2 px-4 border-b">Telepon</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                    <td className="py-2 px-4 border-b">{user.firstName} {user.lastName}</td>
                                    <td className="py-2 px-4 border-b">{user.email}</td>
                                    <td className="py-2 px-4 border-b">{user.username}</td>
                                    <td className="py-2 px-4 border-b">{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
