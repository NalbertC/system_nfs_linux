import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import folder from "../assets/folder.svg";
import { useFile } from "../contexts/Files";

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
  directoryTree: Path;
}

export function Diretorio({ directoryTree }: SystemFileProps) {
  const [isOpen, setIsOpen,] = useState(false);
  const { setPath, setViewPath } = useFile();



  interface RenderTreeProps {
    node: Path;
    padding: number;
  }

  function RenderTree({ node, padding }: RenderTreeProps) {
    if (!node) return null;

    return (
      <div
        style={{
          paddingLeft: `${0 + padding}px`,
          display: `${!node.children && "none"} `,
        }}
        key={node.name}
        className="text-slate-100 w-full"
      >
        <div
          className="group flex h-7  hover:bg-[#515151] px-2 gap-1 text-sm items-center rounded-md"
          onClick={() => {
            node.isOpen = !node.isOpen;

          }}
        >
          <span
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <BiChevronRight
              size={16}
              className={`transform transition-transform duration-200 ${
                node.isOpen &&
                "rotate-90 transform transition-transform duration-200 "
              }`}
            />
          </span>
          <span className="flex flex-row items-center gap-1" onClick={()=>{
            setPath(getPath(directoryTree, node.name)!);
            setViewPath(node)
          }}>


          {node.children && <img src={folder} width={16} />}

          {node.children && (
            <span className="truncate w-full">{node.name}</span>
            )}
            </span>
        </div>

        <span>
          {node.isOpen &&
            node.children &&
            node.children.map((child) => {
              return <RenderTree key={child.name} node={child} padding={10} />;
            })}
        </span>
      </div>
    );
  }

  return (
    <div>
      {directoryTree && <RenderTree key={directoryTree.name} padding={0} node={directoryTree} />}
    </div>
  );
}
