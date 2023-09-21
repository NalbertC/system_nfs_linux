import { useEffect, useState } from "react";
import file from "../assets/application-vnd.appimage.svg";
import folder from "../assets/folder.svg";
import { api, baseUrl } from "../services/api";

interface Path {
  name: string;
  children?: Path[];
}

// async function getLocalIpAddress() {
//   try {
//     const response = await fetch("https://api64.ipify.org?format=json");
//     const data = await response.json();
//     return data.ip;
//   } catch (error) {
//     console.error("Erro ao obter o endereço IP:", error);
//     return "http://localhost:5555";
//   }
// }

function getPath(root: Path, targetName: string): string | null {
  function findPath(node: Path, currentPath: string): string | null {
    const filePath = `${currentPath}/${node.name}`;

    if (node.name === targetName) {
      return filePath;
    }

    if (node.children) {
      for (const childNode of node.children) {
        const result = findPath(childNode, filePath);
        if (result) {
          return result;
        }
      }
    }

    return null;
  }

  const result = findPath(root, "");
  return result ? result : null;
}

interface SystemFileProps {
  dependence: boolean;
}

export function SystemFile({ dependence }: SystemFileProps) {
  const [directoryTree, setDirectoryTree] = useState<Path>({} as Path);
  const [isOpen, setIsOpen] = useState(false);

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

  async function handleDownload(path: string) {
    await api.get(`/download${path}`);
  }

  const renderTree = (node: Path) => {
    if (!node) return null;

    return (
      <div className="flex flex-wrap gap-2" key={node.name}>
        <div
          className="flex flex-col items-center w-[100px] bg-slate-500 "
          onClick={() => {
            handleDownload(getPath(directoryTree, node.name)!);
          }}
        >
          {node.children ? (
            <img src={folder} width={50} />
          ) : (
            <a href={`${baseUrl}/download${getPath(directoryTree, node.name)}`}>
              <img
                src={file}
                width={50}
                title={`${getPath(directoryTree, node.name)}`}
              />
            </a>
          )}

          <span className="w-full text-center truncate">
            {node.children ? node.name : node.name}
          </span>
        </div>

        {node.children && node.children.map((child) => renderTree(child))}
      </div>
    );
  };

  return <div className="">{directoryTree && renderTree(directoryTree)}</div>;
}
