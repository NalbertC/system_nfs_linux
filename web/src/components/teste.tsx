import { useState } from "react";
import file from "../assets/application-vnd.appimage.svg";
import folder from "../assets/folder.svg";
import { useFile } from "../contexts/Files";
import { api } from "../services/api";
import { Modal } from "./Modal";

interface Path {
  name: string;
  children?: Path[];
  isOpen: boolean;
}

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
  actualDirectory: Path;
}

export function SystemFile({ actualDirectory }: SystemFileProps) {
  // const [directoryTree, setDirectoryTree] = useState<Path>({} as Path);
  const [isOpen, setIsOpen] = useState(false);
  const { setViewPath, directoryTree, setPath } = useFile();

  async function handleDownload(path: string) {
    await api.get(`/download${path}`);
  }

  const renderTree = (node: Path) => {
    if (!node) return null;

    return (
      <div className="flex flex-wrap gap-[10px]" key={node.name}>
        <div
          className="flex flex-col items-center w-[90px] h-28 overflow-hidden"
          onClick={() => {
            node.isOpen = !node.isOpen;
            setIsOpen(!isOpen);

            setPath(getPath(directoryTree, node.name)!);
            handleDownload(getPath(directoryTree, node.name)!);

            node.children && setViewPath(node);
          }}
        >
          {node.children ? (
            <img src={folder} width={45} />
          ) : (
            <Modal
              trigger={
                <img
                  src={file}
                  width={45}
                  title={`${getPath(directoryTree, node.name)}`}
                />
              }
              title={node.name}
            >
              <div className="flex">
                <div>

                  <span>Baixar</span>
                </div>

              </div>
            </Modal>
          )}

          {/* <a href={`${baseUrl}/download${getPath(directoryTree, node.name)}`}></a> */}
          <span className="w-full text-center break-all text-slate-100">
            {node.children ? node.name : String(node.name)}
          </span>
        </div>

        {node.isOpen &&
          node.children &&
          node.children.map((child) => renderTree(child))}
      </div>
    );
  };

  return <div>{actualDirectory && renderTree(actualDirectory)}</div>;
}
