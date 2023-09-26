import { useEffect, useState } from "react";
import nautilus from "../assets/nautilus.png";
import { Dropzone } from "../components/Dropzone";
import { Diretorio } from "../components/Teste";
import { SystemFile } from "../components/teste";
import { api } from "../services/api";

export interface Path {
  name: string;
  children?: Path[];
  isOpen: boolean;
}

export function Home() {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [dependence, setDependence] = useState(false);
  const [directoryTree, setDirectoryTree] = useState<Path>({} as Path);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/listar");
        const result = response.data;
        setDirectoryTree(result);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    })();
  }, [dependence]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile === null || selectedFile === undefined) {
      alert("Por favor selecione algum arquivo");
    } else {
      const data = new FormData();
      !!selectedFile && data.append("file", selectedFile);

      await api.post(`/upload`, data);

      setDependence(!dependence);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Interface de visualização e dowload
      </h1>
      <SystemFile  directoryTree={directoryTree} />
      <hr />

      <h1 className="text-2xl font-bold">Zona de dropagem e upload</h1>
      <form
        className="bg-dark-200   rounded-[24px] gap-3 w-[300px] flex justify-center flex-col items-center  "
        action=""
        onSubmit={handleSubmit}
      >
        <Dropzone onFileUploaded={setSelectedFile} />

        <button className="h-14 bg-[#47bafc] w-full rounded-lg font-bold">
          Fazer upload
        </button>

        <hr />
      </form>

      <Diretorio  directoryTree={directoryTree} />

      <img src={nautilus} alt=""  className=""/>
    </div>
  );
}
