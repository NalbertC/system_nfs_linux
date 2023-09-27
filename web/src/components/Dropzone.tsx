import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFile } from "../contexts/Files";

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
}

export function Dropzone({ onFileUploaded }: DropzoneProps) {
  const {path} = useFile()
  const [selectedFileUrl, setSelectedFileUrl] = useState("");
  const [file, setFile] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);


    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
    setFile(file)
  }, [onFileUploaded]);
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
            className="w-full flex justify-center text-center"
            onClick={open}
          >
            { `${path}/${file.name}`}
          </span>
        </>
      ) : (
        <>
          <span
            className=" w-full h-28 rounded-2xl bg-[#3a3a3a]  border-dashed border border-black flex items-center justify-center text-center text-slate-400 "
            onClick={open}
          >
            Arraste e solte arquivos aqui,<br /> ou<br /> clique para selecionar arquivos
            {/* <BsPlus size={50} /> */}
          </span>
        </>
      )}
    </div>
  );
}
