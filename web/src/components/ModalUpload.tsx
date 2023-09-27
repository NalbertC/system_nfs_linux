import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { useFile } from "../contexts/Files";
import { api } from "../services/api";
import { Dropzone } from "./Dropzone";



export function ModalUpload() {
  const { path, setDependence, dependence, setModalUpload } = useFile();
  const [selectedFile, setSelectedFile] = useState<File>();

  async function handleDeleteFolder() {
    // e.preventDefault();
    if (selectedFile === null || selectedFile === undefined) {
      alert("Por favor selecione algum arquivo");
    } else {
      const data = new FormData();
      !!selectedFile && data.append("file", selectedFile);


      await api.post(`/upload${path}`, data);

      setDependence(!dependence);
    }


  }

  return (
    <div className="bg-black/50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center ">
      <div className="fixed flex items-center justify-center w-screen top-0 left-0 h-screen">
        <div className="relative modal font-poppins focus:shadow focus:outline-0 bg-[#333] flex flex-col border-black border rounded-xl -right-[16px]  min-w-[400px]  text-slate-200 text-sm">
          <header className="bg-[#373737] h-11 border-black border-b rounded-t-[inherit] flex items-center px-4 gap-10 justify-between">
            <div
              className="bg-[#e9524a] w-4 h-4 rounded-full flex items-center justify-center"
              onClick={() => {
                setModalUpload(false)
                setSelectedFile(undefined)
              }}
            >
              <div className="flex items-center justify-center focus:shadow-0 focus:outline-0 ">
                <GrFormClose size={15} aria-label="Fechar" />
              </div>
            </div>
            <div>Upload</div>
            <div />
          </header>
          <main className="bg-[#242424] rounded-b-[inherit]">
            <form className="flex flex-col w-full py-4 px-5 gap-4">
              <Dropzone onFileUploaded={setSelectedFile} />
              {selectedFile && (
                <div className="flex w-full items-center justify-evenly gap-2">
                  <button
                    type="button"
                    style={{ backgroundColor: "#515151" }}
                    className="h-9 px-6 font-bold bg-[#515151] rounded-md"
                    onClick={() => {
                      setModalUpload(false)
                    }}
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    style={{ backgroundColor: "#478bf8" }}
                    className="h-9 px-6 font-bold  rounded-md bg-[#478bf8]"
                    onClick={handleDeleteFolder}
                  >
                    Confirmar
                  </button>
                </div>
              )}
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
