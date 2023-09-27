import { FaPlus } from "react-icons/fa";
import { DropdownMenu } from "../components/DropdownMenu";
import { ModalDeleteFolder } from "../components/ModalDeleteFolder";
import { ModalNewFolder } from "../components/ModalNewFolder";
import { ModalUpload } from "../components/ModalUpload";
import { Diretorio } from "../components/Teste";
import { SystemFile } from "../components/teste";
import { useFile } from "../contexts/Files";
import "../styles/scroll.css";

interface FilesProps {}

export function Files({}: FilesProps) {
  const { directoryTree, path, viewPath, modalNewFolder , modalDeleteFolder, modalUpload} = useFile();

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <main className=" flex rounded-[14px] border border-[#404040]">
        {/* left  */}
        <aside className="w-[200px] bg-[#333333] rounded-l-[inherit]">
          <header className="h-11"></header>
          <div className="px-2 min-h-[500px] max-h-[500px] overflow-y-scroll scroll-area">
            <Diretorio directoryTree={directoryTree} key={directoryTree.name} />
          </div>
        </aside>

        {/* rigth */}
        <aside className="w-[534px] bg-[#242424] rounded-r-[inherit] border-l border-l-black">
          <header className="px-4 h-11 border-b border-black flex flex-row items-center justify-between gap-2">
            <div className="text-slate-200 h-6 bg-[#2f2f2f] px-1 rounded-md overflow-hidden flex-1">
              {path}
            </div>

            <DropdownMenu>
              <div className="text-slate-200 px-2 h-6 flex items-center justify-center rounded-md hover:bg-[#3a3a3a] ">
                <FaPlus />
              </div>
            </DropdownMenu>
          </header>
          <div className="px-4 py-4 min-h-[500px] max-h-[500px] overflow-y-scroll scroll-area">
            <SystemFile actualDirectory={viewPath} />
          </div>
        </aside>
      </main>

      {modalNewFolder && <ModalNewFolder />}
      {modalDeleteFolder && <ModalDeleteFolder />}
      { modalUpload && <ModalUpload />}
    </div>
  );
}
