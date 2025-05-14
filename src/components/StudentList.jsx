import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function StudentList({ reloadTrigger }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snapshot = await getDocs(collection(db, "students"));
      setStudents(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetch();
  }, [reloadTrigger]);

  const remove = async (id) => {
    await deleteDoc(doc(db, "students", id));
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-2">
      {students.map((s) => (
        <div
          key={s.id}
          className="flex justify-between items-center p-3 border rounded-md bg-gray-50"
        >
          <div>
            <p className="font-semibold">{s.name}</p>
            <p className="text-sm text-gray-500">Roll: {s.roll} | Class: {s.grade}</p>
          </div>
          <button
            onClick={() => remove(s.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}
      {students.length === 0 && <p className="text-center text-sm text-gray-400">No students yet.</p>}
    </div>
  );
}
