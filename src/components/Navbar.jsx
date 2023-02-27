import React from 'react'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,
} from '@heroicons/react/24/outline'

 import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { user, navigation, userNavigation, products, callsToAction} from '../constants'
import Header from './Header'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
  <>
      <Menu>
      <Menu.Button className="text-black">
        <ChevronDownIcon className="text-black"/>
      </Menu.Button>

      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  </>
  )
}

export default Navbar
