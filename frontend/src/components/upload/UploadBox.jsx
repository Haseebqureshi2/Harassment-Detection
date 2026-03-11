import { useRef } from "react";
import { toast } from "sonner";

export default function UploadBox({ onUpload, loading }) {
  const inputRef = useRef();

  const handleFile = async (file) => {
    if (!file) return;

    try {
      await onUpload(file);
      toast.success("File uploaded successfully");
    } catch (error) {
      toast.error(error.message || "Upload failed");
    }
  };

  return (
    <div
      onClick={() => inputRef.current.click()}
      className="border-2 border-dashed rounded-xl p-10 text-center cursor-pointer hover:border-blue-500 transition"
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        accept=".mp3,.wav,.mp4,.mov"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      <div className="text-blue-600 text-4xl mb-4">☁️</div>

      <p className="font-medium text-blue-600">
        Click to upload <span className="text-gray-500">or drag and drop</span>
      </p>

      <p className="text-sm text-gray-400 mt-2">
        MP3, WAV, MP4, MOV up to 100MB
      </p>

      {loading && (
        <p className="mt-4 text-sm text-blue-600 animate-pulse">
          Analyzing file...
        </p>
      )}
    </div>
  );
}