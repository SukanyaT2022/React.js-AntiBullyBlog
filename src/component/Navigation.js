import { Component, Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import myLogo from '../Image/antibullyLogo-BGpng.png'
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'How2Handle', href: 'how2handle', current: false },
  { name: 'Questions', href: 'questions', current: false},
  { name: 'Contact', href: 'contact', current: false },
  // { name: 'React Projects', href: 'reactportfolio', current: false },
  // { name: 'IOS & Swift Projects', href: 'swiftportfolio', current: false },
  // { name: 'Contact', href: 'contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 function Navigation() {
  return (
    // control whole nav bar
    <Disclosure as="nav" className="bg-[#eeeeee]">
      {({ open }) => (
        <>
        {/* this div below control the whole nav bar */}
          <div className="mx-auto max-w-full px-2 sm:px-0 lg:px-6 md:py-2 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* this div control parent of  logo and link navbar box */}
              <div className="flex flex-1 items-center justify-center lg:items-center lg:justify-between">
                {/* control logo- targetLogo */}
                <div className="flex  items-center lg:flex-row w-[400px] bg-red-300">
                  <a href='/'><img
                    className="h-24 w-auto"
                    src={myLogo}
                    alt="logo"
                  />
                  </a>
                  <h2>Anti Bully</h2>
                </div>
                <div className="hidden lg:ml-6 lg:block">

                  {/* control the whole bloc of nav bar */}

    {/* this div control only link navbar box */}
                  <div className="flex space-x-4  items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-grey-700  hover:text-[#0088cc]' : 'text-gray-800  hover:text-[#0088cc]',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">

                {/* download CV */}
              {/* <a href={myResume}><button className='border-2 bg-[#eeeeee] border-gray-800 
              py-2 px-5 rounded-3xl text-sm'>Download CV</button></a> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? ' text-gray-700 hover:text-[#0088cc]' : 'text-gray-700 hover:text-[#0088cc]',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default Navigation;
