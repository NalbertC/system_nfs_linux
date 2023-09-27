import { useState } from "react";
import { useFile } from "../contexts/Files";
import { api } from "../services/api";
import { ModalInfo } from "./ModalInfo";



export function ModalNewFolder() {
  const { setModalNewFolder, path } = useFile();
  const [folder, setFolder] = useState("");

  async function handleSubmit() {
    // e.preventDefault();
    if (path === "" || /^\s*$/.test(path)) {
      return <ModalInfo />;
    }

    await api.post(`/folder${path}/${folder}`);
  }

  return (
    <div className="bg-black/50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center ">
      <div className="fixed flex items-center justify-center w-screen top-0 left-0 h-screen">
        <form
          className="relative modal font-poppins focus:shadow focus:outline-0 bg-[#333] flex flex-col border-black border rounded-xl -right-[16px]  min-w-[220px]  text-slate-200 text-sm"
          onSubmit={handleSubmit}
        >
          <header className="bg-[#373737] h-11 border-black border-b rounded-t-[inherit] flex items-center px-2 gap-10 justify-between">
            <button
              type="button"
              className="text-sm leading-tight h-6 flex items-center hover:bg-[#4b4b4b] px-3 rounded-md"
              onClick={() => {
                setModalNewFolder(false);
                setFolder("");
              }}
            >
              Cancelar
            </button>
            <h1 className="text-sm leading-tight flex">Nova Pasta</h1>
            <button
              type="submit"
              className="text-sm leading-tight flex h-6 items-center   px-4 rounded-md hover:bg-[#478bf8]"
            >
              Criar
            </button>
          </header>
          <main className="bg-[#242424] rounded-b-[inherit]">
            <div className="flex flex-col w-full py-[22px] px-5 gap-1">
              <label htmlFor="">Nome da pasta</label>
              <input
                type="text"
                className="h-7 rounded-md bg-[#2f2f2f] focus:outline-0 focus:border-2 border-[#4472be] px-2"
                value={folder}
                onChange={(e) => setFolder(e.target.value)}
              />
            </div>
          </main>
        </form>
      </div>
    </div>
  );
}
