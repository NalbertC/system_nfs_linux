import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsFile, BsPlus } from "react-icons/bs";

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
}

export function Dropzone({ onFileUploaded }: DropzoneProps) {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);


    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, []);
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,

    noClick: true,
    multiple: false,
    maxFiles: 1,
  });

  return (
    <div
      className="relative w-full h-28 rounded-[inherit] bg-slate-100"
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      {selectedFileUrl ? (
        <>
          <img
            className="rounded-[inherit]"
            src={selectedFileUrl}
            alt="Upload"
          />
          <span
            className="absolute h-12 w-12 left-1/2 bottom-0 rounded-full flex items-center justify-center bg-gray-400 bg-opacity-50"
            onClick={open}
          >
            <BsFile />
          </span>
        </>
      ) : (
        <>
          <span
            className="absolute h-[inherit] w-[inherit] rounded-[inherit] border-dashed border border-black flex items-center justify-center"
            onClick={open}
          >
            <BsPlus size={50} />
          </span>
        </>
      )}
    </div>
  );
}
