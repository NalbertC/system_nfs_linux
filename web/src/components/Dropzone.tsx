import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsPlus } from "react-icons/bs";

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
    <div className="relative " {...getRootProps()}>
      <input {...getInputProps()} />

      {selectedFileUrl ? (
        <>
          <span
            className=""
            onClick={open}
          >
            {}
          </span>
        </>
      ) : (
        <>
          <span
            className=" w-full h-28 rounded-2xl bg-[#3a3a3a]  border-dashed border border-black flex items-center justify-center"
            onClick={open}
          >
            <BsPlus size={50} />
          </span>
        </>
      )}
    </div>
  );
}
