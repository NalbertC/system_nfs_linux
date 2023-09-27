import { useFile } from "../contexts/Files";
import { api } from "../services/api";


export function ModalDeleteFolder( ) {
  const { setModalDeleteFolder, path, setDependence, dependence } = useFile();

  async function handleDeleteFolder() {
    // e.preventDefault();

    await api.delete(`/folder${path}`);
    setDependence(!dependence)
    setModalDeleteFolder(false)
  }

  return (
    <div className="bg-black/50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center ">
      <div className="fixed flex items-center justify-center w-screen top-0 left-0 h-screen">
        <div className="relative modal font-poppins focus:shadow focus:outline-0 bg-[#333] flex flex-col border-black border rounded-xl -right-[16px]  min-w-[300px]  text-slate-200 text-sm">
          <header className="bg-[#373737] h-11 border-black border-b rounded-t-[inherit] flex items-center px-2 gap-10 justify-between">

          </header>
          <main className="bg-[#242424] rounded-b-[inherit]">
            <div className="flex flex-col w-full py-4 px-5 gap-4">
              <span>Deseja apagar a pasta {path}?</span>

              <div className="flex w-full items-center justify-evenly gap-2">
                <button
                  className="h-8 px-4 font-bold bg-[#2f2f2f] rounded-md"
                  onClick={() => {
                    setModalDeleteFolder(false);
                  }}
                >
                  Cancelar
                </button>

                <button
                  className="h-8 px-4 font-bold  rounded-md bg-[#e9524a]"
                  onClick={handleDeleteFolder}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
