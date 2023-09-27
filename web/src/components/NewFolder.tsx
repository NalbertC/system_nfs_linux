import { ReactNode } from "react";
import { BiSolidDownload, BiTrash } from "react-icons/bi";
import { Modal } from "./Modal";

interface NewFolderProps {
  children: ReactNode;
}

export function NewFolder({ children }: NewFolderProps) {
  return (
    <Modal title="Nova Pasta" trigger={children}>
      <div className="flex w-full items-center justify-evenly py-3">
        <div className="flex flex-col gap-2 items-center">
          <BiSolidDownload size={30} className="text-gray-300" />
          <a>
            <button className="h-8 px-4 font-bold bg-[#2f2f2f] rounded-md ">
              Baixar
            </button>
          </a>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <BiTrash size={30} className="text-gray-300" />

          <button className="h-8 px-4 font-bold  rounded-md bg-[#e9524a]">
            Excluir
          </button>
        </div>
      </div>
    </Modal>
  );
}
