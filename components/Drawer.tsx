"use client";

import { Dialog, Transition } from "@headlessui/react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, Fragment, SetStateAction } from "react";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  navItems: {
    label: string;
    path: string;
  }[];
};

const Drawer = ({ setIsOpen, isOpen, navItems }: Props) => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
    return setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10  lg:hidden "
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-black fixed inset-0 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0  -translate-x-full "
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 -translate-x-full"
            >
              <Dialog.Panel className=" fixed inset-0   w-80 transform  bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-gray-900 text-lg font-medium leading-6"
                >
                  <Image
                    src="/quarter-logo.svg"
                    alt="logo"
                    width={140}
                    height={100}
                    className="object-cover"
                    onClick={() => handleClick("/")}
                  />
                </Dialog.Title>
                <div className="mt-2">
                  <ul className="items-center ">
                    {navItems.map((item) => (
                      <li
                        key={item.label}
                        className="text-rose-300 p-5 text-secondary"
                        onClick={() => handleClick(item.path)}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
