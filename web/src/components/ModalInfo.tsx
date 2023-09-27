import { MdInfo } from "react-icons/md";


export function ModalInfo() {
  return (
    <div className="bg-black/50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center ">
      <div className="fixed flex items-center justify-center w-screen top-0 left-0 h-screen">
        <div className="relative modal font-poppins focus:shadow focus:outline-0 bg-[#333] flex flex-col border-black border rounded-xl -right-[16px]  min-w-[380px]  text-slate-200 text-sm">
          <main className="p-3 flex flex-col gap-6">
            <div className="px-6 py-4 flex justify-evenly gap-8 items-center">
              <MdInfo size={30} className="rotate-180" />

              <div className="flex flex-col items-center">
                <div className="font-bold text-lg">Não foi possível criar pasta</div>
                <span>Já existe uma pasta com esse nome</span>
              </div>
            </div>

            <button className="bg-[#3a3a3a] h-7 rounded-md hover:bg-[#515151] focus:bg-[#478bf8]">
              Ok
            </button>
          </main>
        </div>
      </div>
    </div>
  );
}
