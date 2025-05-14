import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

export default function App() {
  const [reload, setReload] = useState(false);
  const triggerReload = () => setReload(!reload);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📚 Student Manager</h1>
        <StudentForm onStudentAdded={triggerReload} />
        <StudentList reloadTrigger={reload} />
      </div>
    </div>
  );
}
