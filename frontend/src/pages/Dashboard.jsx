import { useEffect, useState } from "react";
import api from "../api/api";
import { useAuth } from "../context/authContext";

export default function Dashboard() {
  const { logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [profile, setProfile] = useState("");
  const [search, setSearch] = useState("");

  const loadData = async () => {
    const [taskRes, profileRes] = await Promise.all([
      api.get("/tasks"),
      api.get("/auth/me"),
    ]);
    setTasks(taskRes.data);
    setProfile(profileRes.data);
  };

  const addTask = async () => {
    if (!title) return;
    await api.post("/tasks", { title });
    setTitle("");
    loadData();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="font-bold">{profile.email}</h2>
          <p className="text-sm text-gray-600">Role: {profile.role}</p>
        </div>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex mb-4">
        <input
          className="border p-2 flex-1 mr-2"
          placeholder="New task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {filteredTasks.map((t) => (
        <div
          key={t._id}
          className="bg-white p-2 mb-2 rounded flex justify-between"
        >
          {t.title}
          <button
            onClick={() => deleteTask(t._id)}
            className="text-red-500"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
