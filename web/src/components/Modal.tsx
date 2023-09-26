import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface ModalProps {
  trigger: ReactNode;
  children: ReactNode;
  title: string
}

export function Modal({ trigger, children, title }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className="text-[#781499] font-bold focus:shadow-0 focus:outline-0 transition-colors underline"
      >
        {trigger}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="  bg-black/50 fixed top-0 left-0 w-full h-full flex items-center justify-center" />

        <div className="fixed flex items-center justify-center w-screen top-0 left-0 h-screen">
          <Dialog.Content className="relative modal font-poppins focus:shadow focus:outline-0  p-4 bg-[#333] flex flex-col border-[#3e3e3e] border rounded-xl -right-[16px]  min-w-[220px]  text-slate-200 text-sm">
            <Dialog.Close className=" absolute right-2 top-2 text-red-400 focus:shadow-0 focus:outline-0">
              <MdClose size={22} aria-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-sm font-bold leading-tight flex">
              {title}
            </Dialog.Title>
            {children}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
