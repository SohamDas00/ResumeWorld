import { Edit, Plus, Trash, Upload } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { dummyResumeData } from "../assets/resume-builder-assets/assets/assets";
import { useNavigate } from "react-router-dom";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";

const Dashboard = () => {
  const randomeColor = ["#bbecbf", "#eedab6", "#a7abe6", "#c7c682"];
  const navigate = useNavigate();

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [updateResume, setUpdateResume] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(false);
  const [title, setTitle] = useState("");
  const [selectedResumeId, setSelectedResumeId] = useState(null);

  const toast = useRef(null);

  // Load dummy data
  useEffect(() => {
    setAllResumes(dummyResumeData);
  }, []);

  // Navigate to builder
  const gotoResume = () => {
    navigate("/app/builder/resum123");
  };

  // Create new resume
  const createResume = () => {
    const newResume = {
      _id: Date.now().toString(),
      title: title,
      updatedAt: new Date(),
    };

    setAllResumes([newResume, ...allResumes]);
    setShowCreateResume(false);
    setTitle("");
  };

  // Edit title open modal
  const editTitle = (resume) => {
    setSelectedResumeId(resume._id);
    setTitle(resume.title);
    setUpdateTitle(true);
  };

  // Update title
  const updateResumeTitle = () => {
    const updated = allResumes.map((resume) =>
      resume._id === selectedResumeId
        ? { ...resume, title: title }
        : resume
    );

    setAllResumes(updated);
    setUpdateTitle(false);
    setTitle("");
  };

  // Delete resume
  const deleteResume = (id) => {
    const filtered = allResumes.filter((resume) => resume._id !== id);
    setAllResumes(filtered);
  };

  // Upload PDF validation
  const onUpload = (e) => {
    const file = e.files[0];

    if (file.type !== "application/pdf") {
      toast.current.show({
        severity: "error",
        summary: "Invalid file",
        detail: "Only PDF files are allowed",
      });
      return;
    }

    toast.current.show({
      severity: "success",
      summary: "Uploaded",
      detail: "PDF uploaded successfully",
    });
  };

  return (
    <div>
      {/* Top actions */}
      <div className="flex gap-6 m-20">
        {/* Create */}
        <div
          className="shadow-md bg-white p-6 rounded-lg h-52 w-42 flex flex-col items-center justify-center cursor-pointer hover:border border-dashed hover:shadow-lg transition"
          onClick={() => setShowCreateResume(true)}
        >
          <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
            <Plus size={20} />
          </div>
          <p className="mt-3 text-gray-700">Create Resume</p>
        </div>

        {/* Upload */}
        <div
          className="shadow-md bg-white p-6 rounded-lg h-52 w-42 flex flex-col items-center justify-center cursor-pointer hover:border border-dashed hover:shadow-lg transition"
          onClick={() => setUpdateResume(true)}
        >
          <div className="bg-green-100 text-green-600 p-4 rounded-full">
            <Upload size={20} />
          </div>
          <p className="mt-3 text-gray-700">Upload Existing</p>
        </div>
      </div>

      {/* Resume Cards */}
      <div className="flex flex-wrap gap-6 m-20 mt-6">
        {allResumes.map((resume, index) => (
          <div
            key={resume._id}
            onClick={() => navigate(`/app/builder/${resume._id}`)}
            className="relative group shadow-md p-6 rounded-lg h-52 w-40 cursor-pointer hover:shadow-lg transition flex flex-col justify-center items-center text-center"
            style={{
              backgroundColor: randomeColor[index % randomeColor.length],
            }}
          >
            {/* Hover buttons */}
            <div className="absolute top-2 right-2 hidden group-hover:flex gap-2">
              <Edit
                onClick={(e) => {
                  e.stopPropagation();
                  editTitle(resume);
                }}
                className="size-6 p-1 rounded bg-white/70 hover:bg-white transition"
              />

              <Trash
                onClick={(e) => {
                  e.stopPropagation();
                  deleteResume(resume._id);
                }}
                className="size-6 p-1 rounded bg-white/70 hover:bg-red-100 text-red-500 transition"
              />
            </div>

            <Edit size={22} />

            <div className="flex flex-col gap-y-5">
              <p className="mt-2 text-sm">{resume.title}</p>
              <div className="text-xs text-gray-700">
                <p>Updated on:</p>
                {new Date(resume.updatedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CREATE MODAL */}
      {showCreateResume && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createResume();
            }}
            className="bg-white p-6 rounded-lg shadow-lg w-80"
          >
            <h2 className="text-lg font-semibold mb-3">Create a Resume</h2>

            <input
              type="text"
              placeholder="Enter Resume Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowCreateResume(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}

      {/* UPLOAD MODAL */}
      {updateResume && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[420px]">
            <h2 className="text-xl font-semibold mb-4">Upload Resume</h2>

            <div className="mb-4">
              <label className="text-sm text-gray-600">Resume Title</label>
              <input
                type="text"
                placeholder="Enter resume title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border mt-1 p-2 w-full rounded-md"
              />
            </div>

            <div className="mb-5">
              <label className="text-sm text-gray-600">Upload File</label>

              <div className="mt-2 border-2 border-dashed rounded-lg p-4 text-center bg-gray-50">
                <Toast ref={toast} />

                <FileUpload
                  mode="basic"
                  name="resume"
                  accept="application/pdf"
                  maxFileSize={2000000}
                  chooseLabel="Choose PDF"
                  onUpload={onUpload}
                />

                <p className="text-xs text-gray-500 mt-2">
                  Only PDF allowed (Max 2MB)
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setUpdateResume(false)}
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                Cancel
              </button>

              <button
                onClick={gotoResume}
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Upload & Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UPDATE TITLE MODAL */}
      {updateTitle && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateResumeTitle();
            }}
            className="bg-white p-6 rounded-lg shadow-lg w-80"
          >
            <h2 className="text-lg font-semibold mb-3">Update Resume Title</h2>

            <input
              type="text"
              placeholder="Enter Resume Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setUpdateTitle(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
