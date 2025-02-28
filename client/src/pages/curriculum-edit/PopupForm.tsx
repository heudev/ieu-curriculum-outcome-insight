import { useEffect, useRef, useState } from "react";

function PopupForm() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");

  const courseData: { [key: string]: string } = {
    CE101: "Computer Engineering Basics",
    MATH203: "Linear Algebra",
    PHYS150: "Physics I",
    ENG102: "English Composition",
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  const handleCourseChange = (code: string) => {
    setCourseCode(code);
    setCourseName(courseData[code] || "");
  };

  return (
    <dialog
      ref={modalRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg backdrop:bg-black/50 w-96"
    >
      <h2 className="text-lg font-bold mb-4 text-center">
        Ders Bilgisi / Course Detail
      </h2>

      {/* Course Code */}
      <div className="mb-4">
        <label className="block mb-1">Ders Kodu / Course Code:</label>
        <select
          className="w-full p-2 border rounded"
          value={courseCode}
          onChange={(e) => handleCourseChange(e.target.value)}
        >
          <option value="" disabled>
            Ders Kodu Seç / Select Course Code
          </option>
          {Object.keys(courseData).map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>

      {/* Course Name */}
      <div className="mb-4">
        <label className="block mb-1">Ders Adı / Course Name:</label>
        <input
          type="text"
          readOnly
          className="w-full p-2 border rounded"
          value={courseName}
        />
      </div>

      {/* Version */}
      <div className="mb-4">
        <label className="block mb-1">Versiyon / Version:</label>
        <select className="w-full p-2 border rounded">
          <option value="" disabled>
            Versiyon Seç / Select Version
          </option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded w-full"
          onClick={() => modalRef.current?.close()}
        >
          Vazgeç / Cancel
        </button>
      </div>
    </dialog>
  );
}

export default PopupForm;