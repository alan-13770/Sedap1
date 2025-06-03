import { useEffect, useState } from "react";
import { notesAPI } from "../services/notesAPI";
import GenericTable from "../components/GenericTable";
import AlertBox from "../components/AlertBox";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";
import { AiFillDelete } from "react-icons/ai";

export default function Notes() {
    const [form, setForm] = useState({ title: "", content: "", status: "" });
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [editNote, setEditNote] = useState(null); // Note yang sedang diedit

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleEditChange = (e) => {
        setEditNote({ ...editNote, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await notesAPI.fetchNotes();
            setNotes(data);
        } catch (err) {
            setError("Gagal memuat catatan");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError("");
            setSuccess("");

            await notesAPI.createNote(form);
            setSuccess("Catatan berhasil ditambahkan!");

            setForm({ title: "", content: "", status: "" });
            setTimeout(() => setSuccess(""), 3000);
            loadNotes();
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
        if (!konfirmasi) return;

        try {
            setLoading(true);
            setError("");
            setSuccess("");

            await notesAPI.deleteNote(id);
            setSuccess("Catatan berhasil dihapus.");
            setTimeout(() => setSuccess(""), 3000);

            loadNotes();
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await notesAPI.updateNote(editNote.id, {
                title: editNote.title,
                content: editNote.content,
            });
            setEditNote(null);
            setSuccess("Catatan berhasil diperbarui!");
            setTimeout(() => setSuccess(""), 3000);
            loadNotes();
        } catch (err) {
            setError("Gagal mengedit catatan.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Tambah Catatan Baru</h1>

            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox type="success">{success}</AlertBox>}

            {/* Form Tambah Catatan */}
            {!editNote && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Judul Catatan"
                        value={form.title}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full border rounded p-2"
                        required
                    />
                    <textarea
                        name="content"
                        placeholder="Isi Catatan"
                        value={form.content}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full border rounded p-2"
                        rows={4}
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        {loading ? "Mohon Tunggu..." : "Tambah Data"}
                    </button>
                </form>
            )}

            {/* Form Edit Catatan */}
            {editNote && (
                <form onSubmit={handleEditSubmit} className="space-y-4 bg-yellow-50 border border-yellow-200 rounded p-4 mt-6">
                    <h2 className="text-lg font-semibold text-yellow-700">Edit Catatan</h2>
                    <input
                        type="text"
                        name="title"
                        value={editNote.title}
                        onChange={handleEditChange}
                        disabled={loading}
                        className="w-full border rounded p-2"
                        required
                    />
                    <textarea
                        name="content"
                        value={editNote.content}
                        onChange={handleEditChange}
                        disabled={loading}
                        className="w-full border rounded p-2"
                        rows={4}
                        required
                    />
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded"
                            disabled={loading}
                        >
                            Simpan Perubahan
                        </button>
                        <button
                            type="button"
                            onClick={() => setEditNote(null)}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Batal
                        </button>
                    </div>
                </form>
            )}

            {/* Notes Table */}
            <div className="mt-10">
                {loading && <LoadingSpinner text="Memuat catatan..." />}

                {!loading && notes.length === 0 && !error && (
                    <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
                )}

                {!loading && notes.length === 0 && error && (
                    <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
                )}

                {!loading && notes.length > 0 ? (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-6">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-semibold">
                                Daftar Catatan ({notes.length})
                            </h3>
                        </div>
                        <GenericTable
                            columns={["#", "Judul", "Isi Catatan", "Aksi"]}
                            data={notes}
                            renderRow={(note, index) => (
                                <>
                                    <td className="px-6 py-4 text-gray-700 font-medium">
                                        {index + 1}.
                                    </td>
                                    <td className="px-6 py-4 text-emerald-600 font-semibold">
                                        {note.title}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 truncate max-w-xs">
                                        {note.content}
                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <button
                                            onClick={() => handleDelete(note.id)}
                                            disabled={loading}
                                            title="Hapus"
                                        >
                                            <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                                        </button>
                                        <button
                                            onClick={() => setEditNote(note)}
                                            title="Edit"
                                            className="text-yellow-600 hover:underline"
                                        >
                                            ✏️
                                        </button>
                                    </td>
                                </>
                            )}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}
