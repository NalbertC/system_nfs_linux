import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface Path {
  name: string;
  children?: Path[];
  isOpen: boolean;
}

type FielContextType = {
  dependence: boolean;
  setDependence: React.Dispatch<React.SetStateAction<boolean>>;
  setViewPath: React.Dispatch<React.SetStateAction<Path>>;
  directoryTree: Path;
  viewPath: Path;
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
  // signIn: () => Promise<void>;
  // singOut: () => Promise<void>;
};

type FileContextProviderProps = {
  children: JSX.Element;
};

export const FileContext = createContext({} as FielContextType);

export function FileContextProvider(props: FileContextProviderProps) {
  const [dependence, setDependence] = useState(false);
  const [directoryTree, setDirectoryTree] = useState<Path>({} as Path);
  const [viewPath, setViewPath] = useState<Path>({} as Path);
  const [path, setPath] = useState("/acesso");

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/listar");
        const result = response.data;
        setDirectoryTree(result);
        setViewPath(result);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    })();
  }, [dependence]);
  return (
    <FileContext.Provider
      value={{
        dependence,
        setDependence,
        directoryTree,
        path,
        setPath,
        setViewPath,
        viewPath,
      }}
    >
      {props.children}
    </FileContext.Provider>
  );
}

export const useFile = () => {
  return useContext(FileContext);
};
