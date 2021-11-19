import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
import avatar from '../../../assets/avatar.png';
import Image from 'next/image'

function InternalMenu() {
  const butonState = ({ open }) => (open ?
    <ChevronUpIcon className="w-5 h-5 ml-2 -mr-1 hover:text-violet-100 text-black" aria-hidden="true" /> :
    <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100 text-black" aria-hidden="true" />)
  return (
    <>
      <h2 className="mm:hidden md:block uppercase font-bold text-mini1 text-white px-5 py-3 bg-secundary rounded-md bg-opacity-50 mr-5">Change to teacher mode</h2>
      <Menu as="div" className=" relative inline-block text-left z-20 top-3 float-left">
        <Menu.Button className="md:hidden p-1 pt-0 pr-5">
          {butonState}
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
          <Menu.Items className="fixed h-screen right-0 left-0 mt-7 origin-top-right bg-white divide-y divide-gray-100 w-screen bg-opacity-50">
            <div className="bg-white p-5 relative">
              <Menu.Item>
                <a href="#" className="text-primary text-mini1 flex flex-row items-center justify-end"><span className="w-11/12">CHANGE TO TEACHER MODE</span> <ArrowNarrowRightIcon className="w-1/12 items-end h-5 top-5" /></a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Image className="h-auto w-10" src={avatar} />
    </>
  )
}
export { InternalMenu }