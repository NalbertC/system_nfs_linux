import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

interface DropdownProps {
  children: ReactNode;
}

export const DropdownMenu = ({ children }: DropdownProps) => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <div className="flex flex-row ">{children}</div>
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content className="bg-[#333] flex flex-col border-[#3e3e3e] border rounded-xl -right-[16px] absolute min-w-[220px] p-2 text-slate-200 text-sm">
          <Dropdown.Item className="h-7 pl-2 rounded-md flex flex-row items-center  cursor-pointer  hover:bg-[#444] focus:shadow-0 focus:outline-0">
            <p>Nova pasta</p>
          </Dropdown.Item>
          <Dropdown.Item className="h-7 pl-2 rounded-md flex flex-row items-center  cursor-pointer hover:text-gray-200 hover:delay-150 hover:bg-gray-700 focus:shadow-0 focus:outline-0">
            <p>Novo upload</p>
          </Dropdown.Item>

          <Dropdown.Item className="h-7 pl-2 rounded-md flex flex-row items-center  cursor-pointer hover:text-gray-200 hover:delay-150 hover:bg-gray-700 focus:shadow-0 focus:outline-0">
            <p>Apagar pasta atual</p>
          </Dropdown.Item>
          <Dropdown.Arrow className="fill-[#3e3e3e] h-2 w-3 -translate-x-[84px]" />
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};
