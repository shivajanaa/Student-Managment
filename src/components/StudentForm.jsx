import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function StudentForm({ onStudentAdded }) {
  const [student, setStudent] = useState({ name: "", roll: "", grade: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!student.name || !student.roll || !student.grade) {
      setError("All fields are required.");
      return;
    }

    try {
      await addDoc(collection(db, "students"), student);
      setStudent({ name: "", roll: "", grade: "" });
      setError("");
      onStudentAdded();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-6">
      {["name", "roll", "grade"].map((field) => (
        <input
          key={field}
          name={field}
          value={student[field]}
          onChange={handleChange}
          placeholder={field[0].toUpperCase() + field.slice(1)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      ))}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add Student
      </button>
    </form>
  );
}
