import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { LoginModal, Logo } from '../../utils';

function ExternalMenu() {
  return (
    <>

      <Menu as="div" className="relative inline-block text-left z-20 float-left">
        <Menu.Button className="md:hidden p-1 pt-0">
          <MenuAlt1Icon className="h-6 w-6 mr-3" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="fixed h-screen ring-black ring-opacity-5 bg-secundary top-0 right-0 left-0 mt-0 origin-top-right divide-y divide-gray-100 w-screen">
            <div className="relative">
              <div className="ring-1 ring-black ring-opacity-5 bg-secundary p-3 h-screen">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <Logo />
                      {/* <Image className="h-8 w-auto sm:h-10" src={logo} /> */}
                    </div>
                    <div className="-mr-2">
                      <Menu.Button className="bg-secundary p-1 inline-flex items-center justify-center">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-8 w-8" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                  </div>
                </div>

                <div className="pt-5 pb-6 px-5 h-full flex items-center content-center justify-center text-center">
                  <div className="flex flex-row flex-wrap">
                    <Menu.Item>
                      <a href="#" className="font-normal text-m-base hover:text-quaternary w-full p-3">How it works</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="#" className="font-normal text-m-base hover:text-quaternary w-full p-2">About Us</a>
                    </Menu.Item>
                    <LoginModal title="Get Started" className="text-primaryVar bg-yellow mt-10 p-5 pl-10 pr-10 font-bold text-base rounded-md w-full" />
                  </div>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
export { ExternalMenu }