import { useRef, useState } from "react";
import { Upload, Music, CheckCircle, X } from "lucide-react";
import { uploadFile } from "../../api/uploadApi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
export default function UploadArea() {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("idle"); 
  // idle | selected | ready | processing
const navigate = useNavigate();
const { t } = useTranslation();
const MAX_SIZE = 100 * 1024 * 1024;
const allowedTypes = [
  "audio/mpeg",
  "audio/wav",
  "video/mp4",
  "video/quicktime",
];

const handleFile = (selectedFile) => {

  if (!allowedTypes.includes(selectedFile.type)) {
    toast.error("Unsupported file format");
    return;
  }

  if (selectedFile.size > MAX_SIZE) {
    toast.error("File exceeds 100MB limit");
    return;
  }

  setFile(selectedFile);
  setStatus("selected");
};

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) handleFile(selectedFile);
  };
const startAnalysis = async () => {
  if (!file || !agreed) return;

  try {
    setStatus("processing");

    const result = await uploadFile(file, "VTC");

    toast.success("Analysis completed");

    navigate("/analysis", {
      state: {
        analysisData: result,
        fileName: file.name,
        analyzedAt: new Date().toLocaleString(),
      },
    });

  } catch (error) {
    console.error(error);

    toast.error(error.message || "Upload failed");

    setStatus("selected");
  }
};


  const removeFile = () => {
    setFile(null);
    setAgreed(false);
    setStatus("idle");
  };

  const fileSize = file ? (file.size / (1024 * 1024)).toFixed(2) : null;

return (
  <>
    {/* ================= IDLE STATE ================= */}
    {status === "idle" ? (
      <div
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const droppedFile = e.dataTransfer.files[0];
          if (droppedFile) handleFile(droppedFile);
        }}
        className="w-full max-w-3xl mx-auto border border-dashed bg-white border-gray-300 rounded-xl p-16 text-center cursor-pointer hover:bg-gray-50 transition"
      >
        <input
          ref={inputRef}
          type="file"
          accept=".mp3,.wav,.mp4,.mov"
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gray-100 shadow-sm ">
            <Upload className=" w-6 h-6 text-blue-600" />
          </div>

          <p className="text-sm text-gray-700">
           <span className="text-blue-600 font-medium">
  {t("uploadClick")}
</span>{" "}
{t("orDragDrop")}
         
          </p>

        <p className="text-xs text-gray-400">
  {t("fileFormats")}
</p>
        </div>
      </div>
    ) : (
      /* ================= FILE SELECTED / PROCESSING ================= */
      <div className="w-full max-w-3xl mx-auto bg-white border rounded-xl p-6 shadow-sm">
        
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-50">
              <Music className="w-5 h-5 text-green-600" />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-800 truncate max-w-xs">
                {file.name}
              </p>
              <p className="text-xs text-gray-400">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>

          {status !== "processing" && (
            <CheckCircle className="text-green-500 w-5 h-5" />
          )}
        </div>

        {/* AGREEMENT */}
        {status !== "processing" && (
          <div className="flex items-start gap-2 mt-4 text-xs text-gray-500">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => {
                const newValue = !agreed;
                setAgreed(newValue);
                setStatus(newValue ? "ready" : "selected");
              }}
              className="mt-1"
            />
           <p>{t("agreeTerms")}</p>
          </div>
        )}

        {/* PROCESSING */}
        {status === "processing" && (
          <div className="mt-4">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 animate-pulse w-full"></div>
            </div>
          <p className="text-xs text-gray-400 mt-2">
  {t("processingAI")}
</p>
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex gap-4 mt-6">
          {status !== "processing" ? (
            <>
              <button
                onClick={startAnalysis}
                disabled={!agreed}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition
                  ${
                    agreed
                      ? "bg-teal-600 text-white hover:opacity-90"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
              >
               {t("startAnalysis")}
              </button>

              <button
                onClick={removeFile}
                className="px-6 py-3 rounded-lg bg-gray-200 text-gray-600 text-sm"
              >
              {t("remove")}
              </button>
            </>
          ) : (
            <button
              onClick={removeFile}
              className="w-full py-3 rounded-lg bg-red-100 text-red-600 text-sm"
            >
             {t("cancelAnalysis")}
            </button>
          )}
        </div>
      </div>
    )}
  </>
);

}
