import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { GrFormClose } from "react-icons/gr";

interface ModalProps {
  trigger: ReactNode;
  children: ReactNode;
  title: string;
}

export function Modal({ trigger, children, title }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"

      >
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed top-0 left-0 w-full h-full flex items-center justify-center" />

        <div className="fixed flex items-center justify-center w-screen top-0 left-0 h-screen">
          <Dialog.Content className="relative modal font-poppins focus:shadow focus:outline-0 bg-[#333] flex flex-col border-black border rounded-xl -right-[16px]  min-w-[220px]  text-slate-200 text-sm">
            <header className="bg-[#373737] h-11 border-black border-b rounded-t-[inherit] flex items-center px-4 gap-4">
              <div className="bg-[#e9524a] w-4 h-4 rounded-full flex items-center justify-center">
                <Dialog.Close className="flex items-center justify-center focus:shadow-0 focus:outline-0 ">
                  <GrFormClose
                    size={15}
                    aria-label="Fechar"

                  />
                </Dialog.Close>
              </div>
              <Dialog.Title className="text-sm font-bold leading-tight flex">
                {title}
              </Dialog.Title>
            </header>
            <main className="bg-[#242424] rounded-b-[inherit]">{children}</main>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
